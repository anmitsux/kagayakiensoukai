//Google map

function initialize() {
  latlng = new google.maps.LatLng(35.4573871,139.631120);
  var myOptions = {
    zoom: 17, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
	caleControl: true,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

  /*アイコン設定▼*/
  var icon = new google.maps.MarkerImage('images/map-marker-icon.png',
    new google.maps.Size(60,98),/*アイコンサイズ設定*/
    new google.maps.Point(0,0)/*アイコン位置設定*/
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: '耀き縁創会-かがやきえんそうかい-'
  };
  var marker = new google.maps.Marker(markerOptions);
  /*アイコン設定ここまで▲*/
}
