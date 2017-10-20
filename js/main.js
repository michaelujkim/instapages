$(function() { 

 $('#sections').on('change', function() {
   var clickon = $('#sections').val(); 
   var url = "https://api.nytimes.com/svc/topstories/v2/" + clickon + ".json";
   url += '?' + $.param({
    'api-key': "477581d880d94e029c1543365b5b4c84"
});



$.ajax({
    url: url,
    method: 'GET',
}).done(function(data) {
    // console.log(data);
    var resultsFromObject = data.results;
  $.each(resultsFromObject, function(index, value) {
  //  console.log(value.multimedia)
   console.log(value);
   $('.news-items').append('<li><img src="' + value.multimedia[4].url + '"></li>');
  });  



  }).fail(function(err) {
    throw err;
  });


 })
});


