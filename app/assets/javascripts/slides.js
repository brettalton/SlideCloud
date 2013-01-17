// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var Slide = function(json) {
	this.id = json._id;
	this.stage = json.stage;
	this.img_src = json.img_src;
	this.slide_count = json.slide_count;

};

Slide.prototype.toJSON = function(){
	var json = {"_id": this.id,"stage": this.stage,"img_src": this.img_src,"slide_count": this.slide_count}
	return json;
};

Slide.prototype.toString = function(){
	return JSON.stringify(this.toJSON());
};