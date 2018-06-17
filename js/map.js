if( document.getElementById("map") ) {

	var map;
	var marker;
	var latCoord;
	var lngCoord;

	function initMap() {

		if( bodyWidth > 1240 ) {


			latCoord = 55.673621;
			lngCoord = 37.4933593;

		} else {
			
			latCoord = 55.673621;
			lngCoord = 37.4953593;

		}

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: latCoord, lng: lngCoord},
			scrollwheel: false,
			scaleControl: false,
			zoom: 17,
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.673621, lng: 37.4975493},
			map: map,
			title: 'SEOMIND'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}



