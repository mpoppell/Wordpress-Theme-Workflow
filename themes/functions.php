<?php
//
// Recommended way to include parent theme styles.
//  (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
//  
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style')
    );
    wp_enqueue_style( 'sass-style',
        get_stylesheet_directory_uri() . '/sass.css?v=' . time(),
        array('parent-style')
);
}

//
// Your code goes below
//
function enqueue_my_scripts() {
 
wp_register_script('my_amazing_script',  get_stylesheet_directory_uri() . '/js/script.js?v=' . time(), array('jquery'),'1.1', true);
wp_register_script('my_template_script',  get_stylesheet_directory_uri() . '/js/templates.js?v=' . time(), array('jquery'),'0.1', true);
 
wp_enqueue_script('my_amazing_script');
wp_enqueue_script('my_template_script');
}
  
add_action( 'wp_enqueue_scripts', 'enqueue_my_scripts' ); 