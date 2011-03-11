/**
 * =======================================================
 * smoothZone 
 * jQuery: 1.4.2
 * author: rocky
 * author blog  : www.rocknoon.com
 * 
 */


(function( $ ){

  
  /**
   * register smoothZone into Jquery Plugin
   */
  $.fn.smoothzone = function( config ) {
	  var rtn = new smoothZone( this , config );
	  return rtn;
  };
  
  
  /**
   * smoothZone default configuration
   */
  var configDefault = {
		  
		  speed	  : 500,
		  number  : 5,
		  effect  : 'default'
		  mode	  : [ 'cirle' , 'static' ]  
	
  };
  
  
  /**
   * when build smoothZone we should specify the container and configuration
   * 
   * __construct
   */
  var smoothZone = function( $ctl , config ){
	  
	  this._config;
	  this._$ctl = $ctl;
	  
	  
	  
	  this._initConfig(config);
	  this._start();
	  
  }
  
  
  smoothZone.prototype = function(){
	  
	  /**
	   * get current smoothZone version
	   */
	  getVersion : function(){
	  	return "1.0.0";
  	  },
  	  
  	  
  	  /**
  	   * this method is only suitable for static mode 
  	   */
  	  add : function( $new ){
  		  
  		//check mode
  		queue.first.next = $new;
  		this._queue_next();
  		  
  	  },
  	  _start : function(){
  		  
  		  this._parseItems();
  		  this._initShow();
  		  this._run();
  		  
  		  
  	  },
  	  _run : function(){
  		  
  		  swith( this._config._mode ){
  			  
  			  "cirle" :
  				  setTimeout( this._queueNext , this._config.time );
  				  break;
  		  	  "static" : 
  		  		  break;
  			  default : 
  				  throw new Exception("no such mode");
  				  break;
  			  
  		  }
  	  },
  	  _queueNext : function(){
  		  queue.add( queue.first.next );
  	  }
	  
  }
  
  
  /**
   * The show list manager
   */
  var smoothZoneQueue = function( ctl , config ){
	  
	  this._first;
	  this._last;
	
  }
  
  smoothZoneQueue.prototype = {
		  
		  add : function( newItem ){
	  		
	  			_addItem(newItem);
	  			_removeLast();
	  			
	  		
  		  },
  		  _addItem : function(newItem){
  			  
  			  //show
  			  this._first = newItem;
  			  
  		  },
  		  _removeLast : function(){
  			  
  			  //remove
  			  this._last = this._last.next;
  			  
  		  }
		    
  }
  
  /**
   * The smooth Zone item entity
   */
  var smoothZoneItem = function( $ctl , next ){
	  
	
  }
  
  smoothZoneItem.prototype = function(){
	  
	  
	  getNext : function(){
	  		
	  		
  	  }
	  
	  
  }
  
  
  
  
  
  
  
  
  
})( jQuery );