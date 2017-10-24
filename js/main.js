$(function() { 

  //when user clicks on the sections drop down menu it searches the NYT API// 

  $('#sections').on('change', function() {

    $('#articles').empty();

   $('#header-change').removeClass("initial-header").addClass("newheader");

   $('.loading').show(); // If user clicks on sections drop menu the loader will appear //

   var clickon = $('#sections').val(); 
   var apiUrl = "https://api.nytimes.com/svc/topstories/v2/" + clickon + ".json";
   apiUrl += '?' + $.param({
    'api-key': "477581d880d94e029c1543365b5b4c84"
});

// This function is going through the NYT API traversing the DOM and grabbin the 4th value in the multimedia index//
$.ajax({
    url: apiUrl,
    method: 'GET',
}).done(function(data) {
 var storiesWithPicture = data.results.filter(function(article) {
  return article.multimedia.length;
}).slice(0,12);

 
$.each(storiesWithPicture, function(index, value) {
    var imageUrl = value.multimedia[4].url
    var abstractText = value.abstract
    var storyUrl = value.url

    var output = '<a href=' + storyUrl + '>' + '<li class="article-item" style = "background-image:url(' + imageUrl + ')"><p>' + abstractText + '</p></li></a>';
    
 
    
        // "<li>" + value.abstract + '<div class=".news-items" style"background-image:url(' + value.multimedia[4].url + ")'> "</li>"'</div>’);
    
    $('#articles').append(output);
    
    

}); // $.each

}).fail(function(err) {
    throw err;
})
.always(function(){
$('.loading').hide();
});

});

});

