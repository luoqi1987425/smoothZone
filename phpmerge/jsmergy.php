<?php 
require_once 'JsCompress.php';

defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../src'));
    
defined('APPLICATION_PATH_ROOT')
    || define('APPLICATION_PATH_ROOT', realpath(dirname(__FILE__) . '/../'));    

	$rtn = array(
		APPLICATION_PATH . "/include.js",
		APPLICATION_PATH . "/core.js",
		APPLICATION_PATH . "/display.js",
		APPLICATION_PATH . "/item.js",
		APPLICATION_PATH . "/jquery.js",
	);
	
	$rtn = WeFlex_JsCompress::compress( $rtn , APPLICATION_PATH_ROOT . "/jquery.smoothzone.js" );
	
?>