<?php

require_once('functions.php')

defined( 'ABSPATH' ) || exit;

if ( ! wp_doing_ajax() ) {
do_action( 'woocommerce_review_order_before_payment' );
}
?>
<div id="payment" class="woocommerce-checkout-payment">
<?php if ( WC()->cart->needs_payment() ) : ?>
<ul class="wc_payment_methods payment_methods methods">
<?php
if ( ! empty( $available_gateways ) ) {
foreach ( $available_gateways as $gateway ) {
wc_get_template( 'checkout/payment-method.php', array( 'gateway' => $gateway ) );
}
} else {
echo '<li class="woocommerce-notice woocommerce-notice--info woocommerce-info">' . apply_filters( 'woocommerce_no_available_payment_methods_message', WC()->customer->get_billing_country() ? esc_html__( 'Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.', 'woocommerce' ) : esc_html__( 'Please fill in your details above to see available payment methods.', 'woocommerce' ) ) . '</li>'; // @codingStandardsIgnoreLine
}
?>
</ul>
<?php endif; ?>
<div class="form-row place-order">
<noscript>
<?php
/* translators: $1 and $2 opening and closing emphasis tags respectively */
printf( esc_html__( 'Since your browser does not support JavaScript, or it is disabled, please ensure you click the %1$sUpdate Totals%2$s button before placing your order. You may be charged more than the amount stated above if you fail to do so.', 'woocommerce' ), '<em>', '</em>' );
?>

<a href="http://catalog.doacademy.in/cart/?cart-pdf=1&amp;_wpnonce=a6db849de2" class="cart-pdf-button button" target="_blank">
<button type = "submit"  onClick="downloadFile('http://catalog.doacademy.in/cart/?cart-pdf=1&amp;_wpnonce=a6db849de2')" value ="place_order" id ="place_order">
My order
 </button>




<?php wp_nonce_field( 'woocommerce-process_checkout', 'woocommerce-process-checkout-nonce' ); ?>
</div>
</div>
<?php
if ( ! wp_doing_ajax() ) {
do_action( 'woocommerce_review_order_after_payment' );
}

<script >
function downloadFile(url) {
var link = document.createElement('a');
link.href = url;
link.download = '';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
  }
 

</script>
