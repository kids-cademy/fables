$package("com.kidscademy.fables");

/**
 * Generic Kids Fables page.
 * 
 * @author Iulian Rotaru
 * @since 1.0
 * 
 * @constructor Construct an instance of page class.
 */
com.kidscademy.fables.Page = function () {
	this.$super();

	var installMenu = this.getByCss("nav a.install");
	var userDismiss = false;
	window.addEventListener('beforeinstallprompt', (e) => {
		// Prevent Chrome 67 and earlier from automatically showing the prompt
		e.preventDefault();
		if (userDismiss) {
			return;
		}
		// Stash the event so it can be triggered later.
		deferredPrompt = e;
		// Update UI to notify the user they can add to home screen
		installMenu.show();

		installMenu.on('click', () => {
			// hide our user interface that shows our A2HS button
			installMenu.hide();
			// Show the prompt
			deferredPrompt.prompt();
			// Wait for the user to respond to the prompt
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
					userDismiss = true;
				}
				deferredPrompt = null;
			});
		});
	});

	/**
	 * Global event manager instance.
	 * @type js.event.Manager
	 */
	this._eventManager = new js.event.Manager();
};

com.kidscademy.fables.Page.prototype = {
	getEventManager: function () {
		return this._eventManager;
	},

	toString: function () {
		return "com.kidscademy.fables.Page";
	}
};
$extends(com.kidscademy.fables.Page, js.ua.Page);
