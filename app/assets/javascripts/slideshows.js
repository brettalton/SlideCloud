var Slideshow = function(json){
	this.user_id = json.user_id;
	this.id = json._id
	this.slides = this.serializeSlides(json.slides);
  this.title = json.title;
  this.description = json.desc;
  this.thumbnail = json.thumbnail;
};

Slideshow.prototype.getSlides = function(){
	return this.slides;
};

Slideshow.prototype.toJSON = function(){
	var json = {"_id": this.id,"desc": this.description,"slides": this.deserializeSlides(),"thumbnail": this.thumbnail,"title": this.title,"user_id":this.user_id }
	return json;
};

Slideshow.prototype.toString = function(){
	return JSON.stringify(this.toJSON());
};

Slideshow.prototype.serializeSlides = function(slides_json){
	var slides = [];
	
	for(var i=0;i<slides_json.length;i++){
		slides.push(new Slide(slides_json[i]));
	}
	return slides;
};

Slideshow.prototype.deserializeSlides = function(){
	var slides_json = [];
	for(var i=0;i<this.slides.length;i++){
		slides_json.push(this.slides[i].toJSON());
	}
	return slides_json;
};