<?php
/**
 * @wordpress-plugin
 * Plugin Name:       map_container
 */

defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

define( 'MC_WIDGET_PATH', plugin_dir_path( __FILE__ ) . '/electroculus' );
define( 'MC_ASSET_MANIFEST', ERW_WIDGET_PATH . '/asset-manifest.json' );
define( 'MC_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );

require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcode.php' );