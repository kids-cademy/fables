$package("com.kidscademy.fables");

/**
 * CollapsibleSection class.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of CollapsibleSection class.
 * @param js.dom.Document ownerDoc element owner document,
 * @param Node node native {@link Node} instance.
 * @assert assertions imposed by {@link js.dom.Element#Element(js.dom.Document, Node)}.
 */
com.kidscademy.fables.CollapsibleSection = function(ownerDoc, node) {
	this.$super(ownerDoc, node);
	this._head = this.getByCssClass("head");
	this._body = this.getByCssClass("body");
	this._head.on("click", this._onHeadClick, this);
};

com.kidscademy.fables.CollapsibleSection.prototype = {
	_onHeadClick : function(ev) {
		this.toggleCssClass("collapsed");
	},

	/**
	 * Class string representation.
	 * 
	 * @return this class string representation.
	 */
	toString : function() {
		return "com.kidscademy.fables.CollapsibleSection";
	}
};
$extends(com.kidscademy.fables.CollapsibleSection, js.dom.Element);
$preload(com.kidscademy.fables.CollapsibleSection);
