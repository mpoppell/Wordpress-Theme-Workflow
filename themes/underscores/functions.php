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
}

//
// Your code goes below
//
function my_enqueue_scripts() {
 
    wp_register_script('my_main_script',  get_stylesheet_directory_uri() . '/js/script.js', array('jquery'),'1.1', true);
    wp_enqueue_script('my_main_script');
    
    //
    // Handlebars Templates and Runtime Library
    //
    wp_register_script('handlebars', 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.runtime.js', array('jquery'),'1.1', true);
    wp_enqueue_script('handlebars');
    
}
  
add_action( 'wp_enqueue_scripts', 'enqueue_my_scripts' ); 

function my_enqueue_styles() {

    wp_enqueue_style( 'sass-style',
        get_stylesheet_directory_uri() . '/sass.css?v=' . time(),
        array('parent-style')
    );
}
