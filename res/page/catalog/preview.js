fables = [ {
	name : "a-raven-and-a-swan",
	icon : "http://data.kids-fables.com/a-raven-and-a-swan/icon.jpg",
	title : "A Raven and a Swan",
	moral : "Change of habit cannot alter Nature"
}, {
	name : "belling-the-cat",
	icon : "http://data.kids-fables.com/belling-the-cat/icon.jpg",
	title : "Belling the Cat",
	moral : "It is easy to propose impossible remedies"
}, {
	name : "the-animals-and-the-plague",
	icon : "http://data.kids-fables.com/the-animals-and-the-plague/icon.jpg",
	title : "The Animals and the Plague",
	moral : "The weak are made to suffer for the misdeeds of the powerful"
}, {
	name : "the-ants-and-the-grasshopper",
	icon : "http://data.kids-fables.com/the-ants-and-the-grasshopper/icon.jpg",
	title : "The Ants and the Grasshopper",
	moral : "It is best to prepare for the days of necessity"
}, {
	name : "the-ass-and-his-driver",
	icon : "http://data.kids-fables.com/the-ass-and-his-driver/icon.jpg",
	title : "The Ass and his Driver",
	moral : "A willful beast must go his own way"
}, {
	name : "the-ass-and-his-shadow",
	icon : "http://data.kids-fables.com/the-ass-and-his-shadow/icon.jpg",
	title : "The Ass and his Shadow",
	moral : "In quarreling about the shadow we often lose the substance"
}, {
	name : "the-ass-and-the-lapdog",
	icon : "http://data.kids-fables.com/the-ass-and-the-lapdog/icon.jpg",
	title : "The Ass and the Lapdog",
	moral : "To be satisfied with one's lot is better than to desire something which one is not fitted to receive"
}, {
	name : "the-ass-and-the-load-of-salt",
	icon : "http://data.kids-fables.com/the-ass-and-the-load-of-salt/icon.jpg",
	title : "The Ass and the Load of Salt",
	moral : "Do not try a trick too often or it will turn against you"
}, {
	name : "the-ass-in-the-lion-skin",
	icon : "http://data.kids-fables.com/the-ass-in-the-lion-skin/icon.jpg",
	title : "The Ass in the Lion Skin",
	moral : "Fine clothes may disguise, but silly words will disclose a fool"
}, {
	name : "the-bat-and-the-weasels",
	icon : "http://data.kids-fables.com/the-bat-and-the-weasels/icon.jpg",
	title : "The Bat and the Weasels",
	moral : "It is wise to turn circumstances to good account"
} ];

WinMain.on("load", function() {
	var fablesList = WinMain.doc.getByCssClass("fables-list-xp");
	fablesList.setObject(fables);
});
