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
		next : function(){
			
	
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
			var $ = newItem.get$();	
			this._$.prepend($);
		},
		_remove : function( item ){
			item.get$().remove();
		}
		
		
	});
	
	
	
	
	/**
	 * register into SmoothZone Namespace
	 */
	SmoothZone.Display = Display;
	
}
)();