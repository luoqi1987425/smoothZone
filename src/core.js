(
function(){
	
	  /**
	   * SmoothZone.Core default configuration
	   */
	var configDefault = {
			  
			  speed	  : 3000,
			  number  : 5,
			  effect  : 'default',
			  mode	  : 'circle'
		
	};
	
	
	/**
	 * SmoothZone Manager
	 */
	var Core = SmoothZone.Class({
		
		_config : configDefault,
		_$   	: null,
		_items  : new Array(),
		_display : null,
		_tmpNext : null,
		
		initialize : function( $ , config ){
			this._$ = $;
			this._initConfig(config);
			this._start();
			
		},
		
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
	  		if( this._config.mode === "circle" ){
	  			throw new Exception("sorry add function only support static mode");
	  		}
	  		
	  		//create new element
	  		var firstItem = this._display.getFirst();
	  		var item = new SmoothZone.Item( $new , null );
	  		firstItem.setNext(item);
	  		this._items.push( item );
	  		
	  		
	  		this._displayNext();
	  	  },
	  	  
	  	  /**
	  	   * init config will override the default ones
	  	   * @param config
	  	   */
	  	  _initConfig : function( config ){
	  		 
	  		  //check the configuation
	  		  
	  		SmoothZone.Extend( this._config , config , true );
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
	  		  
	  		  var hackThis = this;
	  		  
	  		  /**
	  		   * parse items link
	  		   */
	  		  this._$.children().each( function(){
	  			hackThis._insertLink.apply(hackThis, [$(this)]);
	  		  } );
	  		  
	  		  /**
	  		   * if mode == 'circle' specify the first item's next is the last one
	  		   * make sure the this._items is a circling link
	  		   */
	  		  if( this._config.mode == "circle" ){
	  			this._items[0].setNext( this._items[(this._items.length-1)] );
	  		  }
	  		  
	  		  /**
	  		   * if number > real amount
	  		   */
	  		  if( this._config.number > this._items.length  ){
	  			this._config.number = this._items.length;
	  		  }
	  	  },
	  	  
	  	  /**
	  	   * Create a Item and insert into link line
	  	   * @param $item
	  	   */
	  	  _insertLink : function( $item ){

	  		  var item = new SmoothZone.Item( $item , this._tmpNext );
	  		  this._items.push( item );
	  		  this._tmpNext = item;
	  	  },
	  	  
	  	  
	  	  
	  	  /**
	  	   * show the current numbers of items
	  	   */
	  	  _initShow : function(){
	  		 
	  		  for( var i = 0; i < this._items.length ;  i++ ){
	  			  if( i >= this._config.number ){
	  				  this._items[i].get$().remove();
	  			  }
	  		  }
	  		  
	  	  },
	  	  
	  	  /**
	  	   * after 
	  	   */
	  	  _run : function(){
	  		  
	  		  //init display
	  		  this._display = new SmoothZone.Display( 
	  				  	this._$ , 
	  				  	this._items[0] , 
	  				  	this._items[ (this._config.number - 1 )],
	  				  	this._config
	  		  );
	  		  
	  		  
	  		  switch( this._config.mode ){
	  			  
	  		  	case "circle" :
	  				  setInterval( SmoothZone.Callback( this , "_displayNext" ) , this._config.speed );
	  				  break;
	  		  	case "static" : 
	  		  		  break;
	  			  default : 
	  				  throw new Exception("no such mode");
	  				  break;
	  		  }
	  	  },
	  	  
	  	  /**
	  	   * notice display show next
	  	   */
	  	  _displayNext : function(){
	  		  this._display.next();
	  	  }
		
		
		
	});
	
	
	
	
	/**
	 * register into SmoothZone Namespace
	 */
	SmoothZone.Core = Core;
	
}
)();


