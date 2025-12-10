$(function () {
  let $setToken = '13c7a2590bf7681775e3cded455ec3d6286d8b4eef39174bf92bf186ba730b4a', // Token of your apps
  $perPage  = 9; // Set how much items you want to show
  
  jribbble.shots({token: $setToken, per_page: $perPage}, function(shots) {
    document.querySelector(".dribbble-gallery").innerHTML = shots.reduce(function(html, shot) {
      return html + '<div class="col-md-4 col-sm-6 padding-none"><a target="_blank" class="single-project-item" href="' + shot.html_url + '"><img class="full-width" src="' + shot.images.normal + '"><div class="grid-caption"><h2>'+ shot.title +'</h2></div></a></div>';
    }, "");
  });
  
});