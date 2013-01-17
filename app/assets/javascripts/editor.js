// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
var Editor = function(appBaseUrl){

  this.connection = new ConnectionManager(appBaseUrl);
  this.loaded_slideshow;
  this.slideshow;
  this.stage;
  this.layer;
  this.slideshow_id = $("#editor_canvas_container").data("slideshow");
};

Editor.prototype.init = function(){
  this.loadSlideshow();
  window.addEventListener('slideSelectedEvent', function(e) { 
    console.log(e.detail.slide_id); 
  });
  $(".slide_thumb_container:first").click();
  $( "#slidesbar" ).sortable();
  $("#thumbs_container").selectable();
  console.log("editor successfull initalised");
};

Editor.prototype.setSlideshowVariables = function(json){
  editor.loaded_slideshow = new Slideshow(json);
  editor.slideshow = new Slideshow(json);
};

Editor.prototype.loadStage = function(){
  var json = JSON.stringify(this.selectedSlide().stage);
  editor.stage = Kinetic.Node.create(json,'editor_canvas_container');
    //editor.layer = stage.getChildren()[0] != undefined ? stage.getChildren()[0] :new Kinetic.Layer();
  };

  Editor.prototype.selectedSlide = function(){
    var selectedSlideId = $(".selected:first").attr("id");
    for(var i=0; i<this.slideshow.slides.length; i++){
     if( "" + this.slideshow.slides[i].id == selectedSlideId ) 
      return this.slideshow.slides[i];
  }
  return undefined;
};

Editor.prototype.loadSlideshow = function(){
  var url =  "/slideshows/" + editor.slideshow_id;
  this.connection.httpGetRequest(url, {}, function(data){
    editor.setSlideshowVariables(data);
    editor.loadStage();
  });
  
//   var response = $.ajax({
//     url: this.appURL + "/slideshows/" + editor.slideshow_id,
//     type: "GET",
//     dataType: 'json',
//     success: function(text){ 
//       editor.setSlideshowVariables(text);
//       editor.loadStage();
//     }
//   });
};


$(document).ready(function() {
  //$.getScript("assets/slides.js").done(function(console.log("scripts loaded")));
  if($('#editor_canvas_container').length != 0){  
    editor = new Editor("http://localhost:3000/");
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

  /*
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
*/