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
        echo '<link rel="stylesheet" href="' . FL_CHILD_THEME_URL . '/style.css" />';
    }
}