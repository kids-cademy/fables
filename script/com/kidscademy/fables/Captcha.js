$package("com.kidscademy.fables");

/**
 * Captcha class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of Captcha class.
 * @param js.dom.Document ownerDoc element owner document,
 * @param Node node native {@link Node} instance.
 * @assert assertions imposed by {@link js.dom.Element#Element(js.dom.Document, Node)}.
 */
com.kidscademy.fables.Captcha = function(ownerDoc, node) {
	this.$super(ownerDoc, node);
	this._checkbox = this.getByCssClass("checkbox");
	this._checkbox.on("click", this._onCheckboxClick, this);

	this._bodyView = this.getByCssClass("body");
	this._imagesList = this.getByCssClass("images");
	this._imagesList.on("click", this._onImagesListClick, this);

	this.getByCssClass("reload").on("click", this._onReload, this);
	this.getByCssClass("help").on("click", this._onHelp, this);
};

com.kidscademy.fables.Captcha.prototype = {
	_onCheckboxClick : function(ev) {
		this._bodyView.show(this._checkbox.checked());
	},

	_onImagesListClick : function(ev) {
		this._checkbox.addCssClass("checked");
		this._bodyView.hide();
	},

	_onReload : function(ev) {
		js.ua.System.alert("realod");
	},

	_onHelp : function(ev) {
		js.ua.System.alert("help");
	},

	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.Captcha";
	}
};
$extends(com.kidscademy.fables.Captcha, js.dom.Element);
$preload(com.kidscademy.fables.Captcha);
