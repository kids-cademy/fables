$package("com.kidscademy.fables.page");

/**
 * Pages base class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of a page class.
 */
com.kidscademy.fables.page.Page = function() {
	this.$super();

	this.ERRORS = ["", // SUCCESS
		"Business error #1.", // BUSINESS_ERROR_1
		"Business error #2." // BUSINESS_ERROR_2
	];
};

com.kidscademy.fables.page.Page.prototype = {
	onServerFail(er) {
		$error("com.kidscademy.fables.page.Page#onServerFail", "%s: %s", er.cause, er.message);
		js.ua.System.error("Server error. Please contact administrator.");
	},

	onBusinessFail(er) {
		if (er.errorCode > this.ERRORS.length) {
			this.$super("onBusinessFail", er);
			return;
		}
		js.ua.System.error(this.ERRORS[er.errorCode]);
	},

	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.page.Page";
	}
};
$extends(com.kidscademy.fables.page.Page, js.ua.Page);
