
var dropdown = $("#doglists");
var allowSubmit = true;

dropdown.change(function () {
    allowSubmit = true;
});
$.get('https://dog.ceo/api/breeds/list/all',function(data){
  var a=data;
  for (var i = 0; i < Object.keys(a.message).length; i++) {
  $("#doglists").append('<option value="'+Object.keys(a.message)[i]+'">'+Object.keys(a.message)[i]+'</option>');
  }
})
$("#button").click(function() {
  if(allowSubmit==true){
  $.get('https://dog.ceo/api/breed/'+$("#doglists").val()+'/images/random',function(image) {
    $('img').attr("src",image.message);
  });
  allowSubmit=false;
}
});
$("#next").click(function() {
  $.get('https://dog.ceo/api/breed/'+$("#doglists").val()+'/images/random',function(image) {
    $('img').attr("src",image.message);
  });
});
