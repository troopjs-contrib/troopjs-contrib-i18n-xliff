require.config({
	"baseUrl": "bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery/dist",
		"main": "jquery"
	}, {
		"name": "troopjs-contrib-l10n-xliff",
		"location": ".."
	}],
	"deps": [ "jquery", "require", "troopjs/main", "troopjs-widget/main" ],
	"callback": function (jQuery, localRequire) {
		localRequire([
			"troopjs-widget/application",
			"troopjs-ajax/service",
			"troopjs-l10n/service",
			"troopjs-contrib-l10n-xliff/2.0/service"
		], function (Application, AjaxService, L10NService, XLIFFService) {
			jQuery(function ($) {
				Application($("html"), "application", AjaxService(), L10NService(), XLIFFService("2.0/xliff.xml")).start();
			});
		});
	}
});
