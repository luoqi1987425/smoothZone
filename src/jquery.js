  /**
   * register smoothZone into Jquery Plugin
   */
  $.fn.smoothzone = function( config ) {
	  var rtn = new SmoothZone.Core( this , config );
	  return rtn;
  };