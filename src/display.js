(
function(){
	
	
	/**
	 * Display Manager
	 */
	var Display = SmoothZone.Class({
		
		_$     : null,
		_first : null,
		_last  : null,
		_config : null,
		
		initialize : function( $ , first , last , config ){
			
			this._$ = $;
			this._config = config;
			this._first	= first;
			this._last 	= last;
			
		},
		
		getFirst : function(){
			return this._first;
		},
		
		next : function(){
			
			//if next is last then return
			if( this._last == this._first.getNext() ){
				return true;
			}
			
			//insert new
			this._add( this._first.getNext() );
			//remove last
			this._remove( this._last );
			//upgrade
			this._upgrade( this._first.getNext() , this._last.getNext() )
		},
		_upgrade : function( first , last ){
			
			this._first = first;
			this._last  = last;
			
		},
		_add : function( newItem ){
			var $item = newItem.get$();
			this._show($item);
		},
		_remove : function( item ){
			item.get$().remove();
		},
		
		
		/**
		 * show item using different effect
		 */
		_show : function( $item ){
			
			switch( this._config.effect ){
				case "default":
					this._showDefault( $item );
					break;
				case "fade" :
					this._showFade( $item );
					break;
				case "slice" :
					this._showSlice( $item );
					break;
				default:
					throw new Exception("no such effect");
			}
			
		},
		_showDefault : function($item){
			this._$.prepend($item);
		},
		_showFade : function($item){
			
			$item.css("display" , "none");
			this._$.prepend($item);
			
			$item.animate({
				 opacity: "show"
			}, 1500);
		},
		_showSlice : function($item){
			
			$item.css("display" , "none");
			this._$.prepend($item);
			
			$item.show("fast");
		}
		
		
	});
	
	
	
	
	/**
	 * register into SmoothZone Namespace
	 */
	SmoothZone.Display = Display;
	
}
)();