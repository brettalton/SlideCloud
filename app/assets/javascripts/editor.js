// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
var Editor = function(appBaseUrl){
  this.connection = new ConnectionManager(appBaseUrl);
  this.loaded_slideshow;
  this.slideshow;
  this.actual_stage;
};

Editor.prototype.init = function(){  
  //adds event Listner for selections on slides
  _this = this;
  window.addEventListener('slideSelectedEvent', function(e) { 
    var json = JSON.stringify(_this.selectedSlide().stage);
    _this.actual_stage = Kinetic.Node.create(json,'editor_canvas_container');
  });
  $( "#slidesbar" ).sortable();
  $("#thumbs_container").selectable();
  this.loadSlideshow();
  console.log("editor successfull initalised");
};

Editor.prototype.loadSlideshow = function(){
  var url =  "/slideshows/" + $("#editor_canvas_container").data("slideshow");
  var _this = this;
  this.connection.httpGetRequest(url, {}, function(data){
    // set Slideshow variables
    _this.loaded_slideshow = new Slideshow(data);
    _this.slideshow = new Slideshow(data);
  });
};

Editor.prototype.selectedSlide = function(){
  var selectedSlideId = $(".selected:first").attr("id");
  for(var i=0; i<this.slideshow.slides.length; i++){
   if( "" + this.slideshow.slides[i].id == selectedSlideId ) 
    return this.slideshow.slides[i];
  }
  return undefined;
};

Editor.prototype.createEmptyStage = function(){
  var stage = new Kinetic.Stage({
    container: 'editor_canvas_container',
    width: 960,
    height: 540
  });
  layer = new Kinetic.Layer();
  stage.add(layer);
  return stage;
};

Editor.prototype.getSelectedImageSrc = function(){
  this.createImageObject($('.ui-selected:first').data('src'));
};

Editor.prototype.createImageObject = function(src){
  var imageObj = new Image();
  var layer = this.actual_stage. 

  imageObj.onload = function() {
    var img = new Kinetic.Image({
      image: imageObj,
      width: 300,
      height: 200,
      draggable: true
    });
    // add the shape to the layer
    layer.add(img);
    // add the layer to the stage
    this.actual_stage.add(layer);
  }
  imageObj.src = src;
};

Editor.prototype.saveSlideshow = function(){
  var json = this.slideshow.toString();
  var url = "/slideshows/" + this.slideshow.id;
  this.connection.httpPutRequest(url, json);
};

Editor.prototype.createNewSlide = function(){
  var new_stage = this.createEmptyStage();
  var json = '{"stage": ' + new_stage.toJSON() + '}';
  var url = "/slideshows/" + this.slideshow.id + "/slides";
  var _this = this;
  this.connection.httpPostRequest(url, json, this.addSlide);
};

Editor.prototype.addSlide = function(data){
  var id = data["_id"];
  var src = "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_and_yellow_flower.JPG/250px-White_and_yellow_flower.JPG";
  var slide = new Slide(data);
  this.slideshow.push(new Slide(data));
  $('#slidesbar').append('<li id="' + id + '" class="slide_thumb_container">\
        <img class="thumbnail slide_thumb" src="' + src + '">\
      </li>');
  setSelectableSlides();
  $('#' + id).click();
};

$(document).ready(function() {
  if($('#editor_canvas_container').length != 0){  
    editor = new Editor("http://localhost:3000");  
    editor.init();
    setSelectableSlides();
    $(".slide_thumb_container:first").click();
  }
});