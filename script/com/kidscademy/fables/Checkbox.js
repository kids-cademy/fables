$package("com.kidscademy.fables");

/**
 * Checkbox class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of Checkbox class.
 * @param js.dom.Document ownerDoc element owner document,
 * @param Node node native {@link Node} instance.
 * @assert assertions imposed by {@link js.dom.Element#Element(js.dom.Document, Node)}.
 */
com.kidscademy.fables.Checkbox = function(ownerDoc, node) {
	this.$super(ownerDoc, node);
	this._control = this.getByCssClass("control").on("click", this._onClick, this);
};

com.kidscademy.fables.Checkbox.prototype = {
	getValue : function() {
		return this.getAttr("data-value");
	},

	uncheck : function() {
		this._control.removeCssClass("checked");
	},

	checked : function() {
		return this._control.hasCssClass("checked");
	},

	_onClick : function(ev) {
		this._control.toggleCssClass("checked");
	},

	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.Checkbox";
	}
};
$extends(com.kidscademy.fables.Checkbox, js.dom.Control);
$preload(com.kidscademy.fables.Checkbox);
