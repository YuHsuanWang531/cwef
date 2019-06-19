$(function() {
	for (var j = 0; j < sheet.length; j++) {
		$.getJSON(sheet[j]["json"], function(data) {
			var htmlv1 = "",
				htmlv2 = "";
			for (var i = 0; i < 3; i++) {
				htmlv1 += "<div class='card'>";
				htmlv1 += "<span class='card-author'>";
				if (data.feed.entry[i]["gsx$anonymous"]["$t"] == 1) {
					htmlv1 += "匿名";
				} else {
					htmlv1 += data.feed.entry[i]["gsx$company"]["$t"] + "／" + data.feed.entry[i]["gsx$name"]["$t"];
				}
				htmlv1 += "</span>";
				htmlv1 += "<p class='card-text'>";
				htmlv1 += data.feed.entry[i]["gsx$problem"]["$t"];
				htmlv1 += "</p>";
				htmlv1 += "</div>";
			}
			for (var i = 3; i < data.feed.entry.length; i++) {
				htmlv2 += "<div class='card'>";
				htmlv2 += "<span class='card-author'>";
				if (data.feed.entry[i]["gsx$anonymous"]["$t"] == 1) {
					htmlv2 += "匿名";
				} else {
					htmlv2 += data.feed.entry[i]["gsx$company"]["$t"] + "／" + data.feed.entry[i]["gsx$name"]["$t"];
				}
				htmlv2 += "</span>";
				htmlv2 += "<p class='card-text'>";
				htmlv2 += data.feed.entry[i]["gsx$problem"]["$t"];
				htmlv2 += "</p>";
				htmlv2 += "</div>";
			}
			$("main ." + sheet[j]["eng"] + " .card__group--display").html(htmlv1);
			$("main ." + sheet[j]["eng"] + " .card__group--none").html(htmlv2);

			if (data.feed.entry.length <= 3) {
				$("main ." + sheet[j]["eng"] + " .card__group > .btn").remove();
				$("main ." + sheet[j]["eng"] + " .card__group--none").remove();
			}
		});
	}
	if (location.href.match(/ask/)) {
		if (window.location.hash.match('#' + hashValue + '')) {
			var hashValue = window.location.hash.slice(1);
			$(".tab__nav .anchor.active").removeClass("active");
			$(".tab__nav .anchor").data("pane", hashValue).addClass("active");
			$(".tab__content__pane.active").removeClass("active");
			$(".tab__content__pane." + $(this).data("pane")).addClass("active");
			console.log(hashValue);

		}
	}
	$(".tab__nav .anchor").click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(".tab__content__pane.active").removeClass("active");
		$(".tab__content__pane." + $(this).data("pane")).addClass("active");
	});
	$(".card__group > .btn").click(function() {
		$(this).siblings(".card__group--none").slideDown();
		$(this).slideUp();
	});
});