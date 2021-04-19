$package("com.kidscademy.fables.page");

/**
 * Home page class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of home page class.
 */
com.kidscademy.fables.page.Home = function() {
	this.$super();
};

com.kidscademy.fables.page.Home.prototype = {
	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.page.Home";
	}
};
$extends(com.kidscademy.fables.page.Home, com.kidscademy.fables.page.Page);

WinMain.createPage(com.kidscademy.fables.page.Home);
