var setSelectableSlides = function(){

	$(".slide_thumb_container").click(function() {
		$(".slide_thumb_container").removeClass("selected");
		$(this).addClass("selected");

		var slideSelectedEvent = new CustomEvent("slideSelectedEvent", {
			detail: {
				slide_id: $(this).attr('id')
			}
		});
		window.dispatchEvent(slideSelectedEvent);

		return $(this).attr("id");
	});

};
