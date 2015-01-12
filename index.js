require.config({
	"baseUrl": "bower_components",
	"packages": [{
		"name": "jquery",
		"location": "jquery/dist",
		"main": "jquery"
	}, {
		"name": "troopjs-contrib-i18n-xliff",
		"location": ".."
	}],
	"deps": [ "jquery", "require", "troopjs/main", "troopjs-widget/main" ],
	"callback": function (jQuery, localRequire) {
		localRequire([
			"troopjs-widget/application",
			"troopjs-ajax/service",
			"troopjs-i18n/service",
			"troopjs-contrib-i18n-xliff/2.0/service"
		], function (Application, AjaxService, I18NService, XLIFFService) {
			jQuery(function ($) {
				Application($("html"), "application", AjaxService(), I18NService(), XLIFFService("2.0/xliff.xml")).start();
			});
		});
	}
});
