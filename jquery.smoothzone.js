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
	  var rtn = new SmoothZone( this , config );
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
  var SmoothZone = function( $ctl , config ){
	  
	  this._config;
	  this._$ctl = $ctl;
	  this._items = new Array();
	  
	  this._tmpNext = null;
	  
	  
	  
	  this._initConfig(config);
	  this._start();
	  
  }
  
  
  SmoothZone.prototype = function(){
	  
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
  	  
  	  /**
  	   * parse sub items into links
  	   * mode == 'circle'
  	   * 	circle link  
  	   * mode == 'static'
  	   * 	string link
  	   */
  	  
  	  _parseItems : function(){
  		  
  		  this._$ctl.each( SmoothZone_Helper.callback( this , '_insertLink' ) );
  		  
  		  //if mode == 'circle'
  		  this._items[0].setNext( this._items[(this._items.length-1)] );
  	  },
  	  
  	  _insertLink : function( $item ){
  		  this._items.push( new SmoothZone_Item( $item , next ) );
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
  var SmoothZone_Queue = function( ctl , config ){
	  
	  this._first;
	  this._last;
	
  }
  
  SmoothZone_Queue.prototype = {
		  
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
  var SmoothZone_Item = function( $ctl , next ){
	
	  this._next = next;
	
  }
  
  SmoothZone_Item.prototype = function(){
	  
	  
	  getNext : function(){
		  return this._next;
  	  },
  	  setNext : function( next ){
  		  this._next = next;
  	  }
	  
	  
  }
  
  
  	/**
  	 * some helper functions
  	 */
  	var SmoothZone_Helper = {};
  
  	/**
  	 * create a event function
  	 */
  	SmoothZone_Helper.event = function(obj, strFunc) {
		var args = [];
		if (!obj)
			obj = window;
		for ( var i = 2; i < arguments.length; i++)
			args.push(arguments[i]);
		return function() {
			return obj[strFunc].apply(obj, args);
		}
	};
	
	/**
	 * create a callback function
	 */
	SmoothZone_Helper.callback = function(obj, strFunc) {
		if (!obj)
			obj = window;
		return function() {
			return obj[strFunc].apply(obj, arguments);
		}
	};

	
	SmoothZone.Class = function( rtn ){
			

	}
  
  
  
  
  
  
  
  
  
})( jQuery );