---
layout: default
title: Thirsty Plant
---
<script>
  function initMap()
  {
    var options =
    {
      zoom:8,
      center:{lat:-45.8788, lng:170.5028}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
  }
</script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwuSpWUy7vSYA7OZcNuA_epLmA1SjMYC4&callback=initMap">
</script>


<div class="container">
    <div class="starter-template">
        <h1>Nodes</h1>
        <p class="lead">Example web application for the Internet of Things project group at Otago Polytech. The web application provides a              friendly user interface to map and produce data on moisture sensors in the Dunedin CBD area.</p>
     </div>

     <div class="row">
          <div class="col-md-5">
              <div class="starter-template">
                  <h2>Node list</h2>
                  <p>List of nodes</p>
              </div>
          </div>

          <div class="col-md-7">
              <div class="starter-template">
              <h2>Map - fill me in</h2>
              <p>Map showing nodes</p>

              <div id="map"></div>

          </div>
       </div>
    </div>


</div><!-- /.container -->
