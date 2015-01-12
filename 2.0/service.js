define([
	"troopjs-core/component/gadget",
	"troopjs-core/pubsub/hub",
	"jquery"
], function (Gadget, hub, $) {
	return Gadget.extend(function (url) {
		var me = this;
		var dictionary = {};

		me.on("sig/start", function () {
			return hub
				.publish("ajax", {
					"url": url,
					"method": "get"
				})
				.spread(function (data) {
					$(data).find("unit[id]").each(function (index, unit) {
						var $unit = $(unit);

						dictionary[$unit.attr("id")] = $unit.find("segment target").text();
					});
				});
		});

		me.on("hub/i18n/fetch", function (key) {
			return [ key, dictionary[key] ];
		});
	});
});