var ConnectionManager = function(appURL){
	this.appURL = appURL;

	//private
	this.addSlideToSlidesbar = function(id, src){
		$("#slidesbar").append('<li id='+ id +' class="slide_thumb_container">\
			<img class="thumbnail slide_thumb" src="' + src + '" alt="">\
			</li>');
	};

	this.createEmptyStage = function(){
		var stage = new Kinetic.Stage({
			container: 'editor_canvas_container',
			width: 960,
			height: 540
		});
		layer = new Kinetic.Layer();
		stage.add(layer);
		return stage;
	};
};

ConnectionManager.prototype.loadSlideshow = function(){
	var response = $.ajax({
		url: this.appURL + "/slideshows/" + editor.slideshow_id,
		type: "GET",
		dataType: 'json',
		success: function(text){ 
			editor.setSlideshowVariables(text);
			editor.loadStage();
		}
	});
};

ConnectionManager.prototype.saveSlideshow = function(){
	var json = slideshow.toJSON();
	$.ajax({
		url: this.appURL + "/slideshows/" + editor.slideshow_id + "/update",
		type: "PUT",
		data: json,
		contentType: 'application/json; charset=utf-8',
		dataType: "json"
	});
};

ConnectionManager.prototype.createNewSlide = function(){
	var new_stage = this.createEmptyStage();
	var json = '{"stage": ' + new_stage.toJSON() + '}';
	$.ajax({
		url: this.appURL + "/slideshows/" + editor.slideshow_id + "/slides",
		type: "POST",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: json,
		success: function(text){
			var id = text["_id"];
			var src = "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_and_yellow_flower.JPG/250px-White_and_yellow_flower.JPG";
			editor.connection.addSlideToSlidesbar(id,src);
			//editor.setSelectableSlides();
			$('#' + id).click();
		}
	});
	  //saveStageToSlide();
};

ConnectionManager.prototype.httpGetRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "GET",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: callback(data,textStatus,jqXHR)
	});
};

ConnectionManager.prototype.httpPostRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "POST",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: callback(data,textStatus,jqXHR)
	});
};

ConnectionManager.prototype.httpPutRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "PUT",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: callback(data,textStatus,jqXHR)
	});
};

ConnectionManager.prototype.httpDeleteRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "DELETE",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: callback(data,textStatus,jqXHR)
	});
};