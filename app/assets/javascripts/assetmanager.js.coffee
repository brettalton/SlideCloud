# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ->  
  $('#new_image').fileupload
    dataType: "script"
    add: (e, data) ->
      types = /(\.|\/)(gif|jpe?g|png)$/i
      file = data.files[0]
      if types.test(file.type) || types.test(file.name)
        data.context = $(tmpl("template-upload", file))
        $('#new_image').append(data.context)
        data.submit()
      else
        alert("#{file.name} is not a gif, jpeg, or png image file")
    progress: (e, data) ->
      if data.context
        progress = parseInt(data.loaded / data.total * 100, 10)
        data.context.find('.bar').css('width', progress + '%')
    $("#selectable").selectable({selected: onSelect, filter: "div"})
  
onSelect = () ->  
  selectedElements = $(".ui-selected") 
  selectedElements
  
#@destroyAllSelectedImages = () ->
# selectedElements = $(".ui-selected") 
# selectedElements.each () ->
#   elementId = $(this).data('id')
#   json = JSON.stringify {"id":elementId }
#   $.ajax {
#     url: "http://localhost:3000/assetmanager/images/destroy",
#     type: "DELETE",
#     contentType: "application/json; charset=utf-8",
#     dataType: "json",
#     data: json,
#     success: () -> 
#       $(".ui-selected").parent().remove()
#   }
#   true
# true
  
@destroySelectedImages = () ->
  selectedElements = $(".ui-selected") 
  connection = new ConnectionManager('http://localhost:3000/')
  selectedElements.each () ->
    elementId = $(this).data('id')
    json = JSON.stringify {"id":elementId }
    connection.httpDeleteRequest 'assetmanager/images/destroy', json, () ->
      $(".ui-selected").parent().remove()
    true