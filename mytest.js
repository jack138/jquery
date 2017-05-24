var Mytest = function() {

	this.init();
	
};



Mytest.prototype = {
	// 初始化
	init : function() {
		var that = this;
		that.cck();
	},

	cck : function(){
			// Binding multiple events with different handlers
		$( "p" ).on({
		    "click": function() { console.log( "clicked!" ); },
		    "mouseover": function() { console.log( "hovered!" ); }
		});
		
	}

};