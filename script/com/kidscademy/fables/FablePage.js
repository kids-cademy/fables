$package("com.kidscademy.fables");

/**
 * FablePage class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of FablePage class.
 */
com.kidscademy.fables.FablePage = function() {
	this.$super();
	WinMain.doc._document.requestFullscreen();
	if (!WinMain.url.parameters.name) {
		WinMain.assing("play.htm");
		return;
	}
	WinMain.on("load", this._onLoad, this);
};

com.kidscademy.fables.FablePage.prototype = {
	_onLoad : function(ev) {
		WinMain.doc.getByClass(js.widget.Panorama);
		var fableView = WinMain.doc.getByCss(".fable-view");
		fableView.setFocus();
		fableView.open(WinMain.url.parameters.name, this);
	},

	onFableClose : function(keyEvent) {
		WinMain.assign("play.htm");
	},

	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.FablePage";
	}
};
$extends(com.kidscademy.fables.FablePage, com.kidscademy.fables.Page);
$implements(com.kidscademy.fables.SectionView, com.kidscademy.fables.FableCloseListener);
