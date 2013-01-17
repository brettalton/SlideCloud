// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
var Editor = function(){

  this.loaded_slideshow;
  this.slideshow;
  this.stage;
  this.layer;
  this.slideshow_id = $("#editor_canvas_container").data("slideshow");

  this.init = function(){
    this.connection = new ConnectionManager("http://localhost:3000");
    this.connection.loadSlideshow();
    window.addEventListener('slideSelectedEvent', function(e) { 
      console.log(e.detail.slide_id); 
    });
    $(".slide_thumb_container:first").click();
    $( "#slidesbar" ).sortable();
    $("#thumbs_container").selectable();
    console.log("editor successfull initalised");
  };

  this.setSlideshowVariables = function(json){
    editor.loaded_slideshow = new Slideshow(json);
    editor.slideshow = new Slideshow(json);
  };

  this.loadStage = function(){
    var json = JSON.stringify(this.selectedSlide().stage);
    console.log(json);
    editor.stage = Kinetic.Node.create(json,'editor_canvas_container');
    //editor.layer = stage.getChildren()[0] != undefined ? stage.getChildren()[0] :new Kinetic.Layer();
  };

  this.selectedSlide = function(){
  var selectedSlideId = $(".selected:first").attr("id");
  for(var i=0; i<this.slideshow.slides.length; i++){
   if( "" + this.slideshow.slides[i].id == selectedSlideId ) 
    return this.slideshow.slides[i];
  }
  return undefined;
};

};


$(document).ready(function() {
  //$.getScript("assets/slides.js").done(function(console.log("scripts loaded")));
  if($('#editor_canvas_container').length != 0){  
    editor = new Editor();
    editor.init();
  }
});

var getSelectedImageSrc = function(){
  $('#add_pics_modal').modal('hide');
  createImageObject($('.ui-selected:first').data('src'));
};

var createImageObject = function(src){
  var imageObj = new Image();

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
      stage.add(layer);
    }

  imageObj.src = src;
};