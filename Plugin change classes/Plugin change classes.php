<?php
/**
 * Plugin Name: Plugin for Vlad
 * Description:  This plugin does change the screen sizes.
 * Version: 1.0
 * Author: MaxHalimon
 * Author URI: https://www.facebook.com/maxhalimon
 */
?>

<?php
function wpmudev_cta_register_stylesheet(){
	wp_register_style( 'cta_stylesheet', plugins_url( '/styles/style.css', __FILE__ ) );
	wp_enqueue_style( 'cta_stylesheet' );
}
add_action( 'enqueue_scripts', 'wpmudev_cta_register_stylesheet' );
?>
<?php
function wpmudev_cta_add_script() {
  wp_register_script('cta_script', plugins_url('scripts/cta-script.js', __FILE__), array('jquery') );
  wp_enqueue_script('cta_script');
}
add_action( 'wp_enqueue_scripts', 'wpmudev_cta_add_script' );
?>
<?php

 ?>
