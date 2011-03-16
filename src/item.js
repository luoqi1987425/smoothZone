(
function(){
	
	
	/**
	 * Item for SmoothZone
	 */
	var Item = SmoothZone.Class({
		
		_next : null,
		_$	  : null,
		
		initialize : function( $ , next ){
			
			this._$    = $;
			this._next = next;
			
		},
		setNext : function( item ){
			this._next = item;
		},
		getNext : function( item ){
			return this._next;
		},
		get$ : function(){
			return this._$;
		}
		
		
	});
	
	
	
	
	/**
	 * register into SmoothZone Namespace
	 */
	SmoothZone.Item = Item;
	
}
)();


