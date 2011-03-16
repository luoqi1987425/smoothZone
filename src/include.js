/**
 * =======================================================
 * smoothZone 

 * jQuery: 1.4.2
 * author: rocky
 * author blog  : www.rocknoon.com
 * 
 **/


  
  SmoothZone = {};

	/*
	 * create a class
	 */
  SmoothZone.Class = function( prototype ){
	  
	  var constractor = function(){
		  return this.initialize
	         ? this.initialize.apply(this, arguments) || this
	         : this;
	  };
	  
	  constractor.prototype = prototype;
	  
	  SmoothZone.Extend( constractor.prototype , SmoothZone.Class.Methods );
	  
	  return constractor;
  };
  
  /**
   * here you can write some father methods
   */
  SmoothZone.Class.Methods = {
		  
		 
		  
  };
  
  
  /**
   * extend a object
   */
  SmoothZone.Extend = function(destination, source, overwrite) {
	  if (!destination || !source) return destination;
	  for (var field in source) {
	    if (destination[field] === source[field]) continue;
	    if (overwrite === false && destination.hasOwnProperty(field)) continue;
	    destination[field] = source[field];
	  }
	  return destination;
	};
  
  	/**
	 * create a event function
	 */
  SmoothZone.Event = function(obj, strFunc) {
		var args = [];
		if (!obj)
			obj = window;
		for ( var i = 2; i < arguments.length; i++)
			args.push(arguments[i]);
		return function() {
			return obj[strFunc].apply(obj, args);
		};
	};
	
	/**
	 * create a callback function
	 */
	SmoothZone.Callback = function(obj, strFunc) {
		if (!obj)
			obj = window;
		return function() {
			return obj[strFunc].apply(obj, arguments);
		};
	};
	
	
	
