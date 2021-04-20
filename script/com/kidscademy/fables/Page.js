$package("com.kidscademy.fables");

/**
 * Generic Kids Fables page.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of page class.
 */
com.kidscademy.fables.Page = function() {
	this.$super();

	var fullScreen = document.getElementsByClassName("full-screen")[0];
	fullScreen.addEventListener("click", function(ev) {
		if (!this.isFullScreen()) {
			this.requestFullScreen();
		}
		else {
			this.cancelFullScreen();
		}
	}.bind(this));

	/**
	 * Global event manager instance.
	 * 
	 * @type js.event.Manager
	 */
	this._eventManager = new js.event.Manager();

	// $E("#sys-message-id").info("test")
};

com.kidscademy.fables.Page.prototype = {
	getEventManager : function() {
		return this._eventManager;
	},

	toString : function() {
		return "com.kidscademy.fables.Page";
	}
};
$extends(com.kidscademy.fables.Page, js.ua.Page);
