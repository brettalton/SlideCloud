// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {

	if($('#editor_canvas_container').length != 0){
		var stage = new Kinetic.Stage({
      container: 'editor_canvas_container',
      width: $('#editor_canvas_container').width(),
      height: $('#editor_canvas_container').height()
    });
    var layer = new Kinetic.Layer();

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
  }

  imageObj.src = 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/White_and_yellow_flower.JPG/250px-White_and_yellow_flower.JPG';
  console.log(stage.toJSON());
});