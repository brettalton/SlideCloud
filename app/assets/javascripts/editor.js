// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var stage;
var layer;

$(document).ready(function() {
  init();
});

var init = function(){
  $(function() {
        $("#slidesbar").selectable();
        $("#thumbs_container").selectable();
  });

  if($('#editor_canvas_container').length != 0){
    stage = new Kinetic.Stage({
      container: 'editor_canvas_container',
      width: $('#editor_canvas_container').width(),
      height: $('#editor_canvas_container').height()
    });
    layer = new Kinetic.Layer();
  }
};

var getSelectedImageSrc = function(){
  $('#add_pics_modal').modal('hide');
  createImageObject($('.ui-selected').data('src'));
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

var saveStageToSlide = function(){
  return stage.toJSON();
};