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

	/**
	 * Global event manager instance.
	 * @type js.event.Manager
	 */
	this._eventManager = new js.event.Manager();
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
