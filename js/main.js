(function($) {

 var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  url += '?' + $.param({
    'api-key': "477581d880d94e029c1543365b5b4c84"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(data) {
    console.log(data);

  $.each(data.results, function(index, value) {
   console.log(value.abstract);
   $("#contentload").append('<p>' + value.abstract + "/p");
  });  



  }).fail(function(err) {
    throw err;
  });




})(jQuery);


