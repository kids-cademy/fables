$package("com.kidscademy.fables");

/**
 * CommunityPage class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of CommunityPage class.
 */
com.kidscademy.fables.CommunityPage = function() {
	this.$super();
};

com.kidscademy.fables.CommunityPage.prototype = {
	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString: function() {
		return "com.kidscademy.fables.CommunityPage";
	}
};
$extends(com.kidscademy.fables.CommunityPage, js.ua.Page);
