<?php

/**
 * Helper class for theme functions.
 *
 * @class FLChildTheme
 */
final class FLChildTheme {
    
    /**
     * @method styles
     */
    static public function stylesheet()
    {
        echo '<link rel="stylesheet" href="' . FL_CHILD_THEME_URL . '/dist/styles/main.css" />';
    }

    static public function javascript()
    {
        echo '<script type="text/javascript" src="' . FL_CHILD_THEME_URL . '/dist/scripts/main.js"></script>';
    }
}