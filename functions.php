<?php

// Defines
define( 'FL_CHILD_THEME_DIR', get_stylesheet_directory() );
define( 'FL_CHILD_THEME_URL', get_stylesheet_directory_uri() );

// Classes
require_once 'classes/class-fl-child-theme.php';

function bb_child_resources() {
	wp_enqueue_script( 'bb-child-scripts', get_stylesheet_directory_uri() . '/dist/scripts/main.js',  array('jquery'), '', true);
  wp_enqueue_style( 'bb-child-styles', get_stylesheet_directory_uri() . '/dist/styles/main.css');
}
add_action( 'wp_enqueue_scripts', 'bb_child_resources' );