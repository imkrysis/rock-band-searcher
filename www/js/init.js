(function($){
  $(function(){

    $('#sidenav').sidenav()
    $('#tabs').tabs({'swipeable': true})
    $('#btnSearch').click(getArtists)
    

  }) // end of document ready
})(jQuery) // end of jQuery name space

const apiUrl = "https://musicbrainz.org/ws/2/"

function getArtists(){

  query = "artist?query=" + $('#inputSearch').val()

	$.ajax({
	  method: "GET",
	  url: apiUrl + query,
	  dataType: "json",
    
	}).done(function (msg) {
    
		$('#listResult').empty();

	  for(i in msg.artists) {

      if (msg.artists[i].disambiguation  == null) {

        $('#listResult').append('<li><h5>'+msg.artists[i].name+'</h5>'+'<a href="#!" class="secondary-content"></a></li>');

      } else {

        $('#listResult').append('<li><h5>'+msg.artists[i].name+'</h5>'+'('+msg.artists[i].disambiguation +')<a href="#!" class="secondary-content"></a></li>');

      }	   	

	  };

	}).fail(function () {

		alert("There has been an unexpected problem");

	});

}



