(function() {

	FlyToDestination = function(id) {
		this.id = id;
	};

	var p = FlyToDestination.prototype;

	p.show = function() {

		this.root.globe.position.x = 0;
		this.root.globe.position.y = 0;
		this.root.globe.position.z = 0;

		this.root.highlighCountries();

		if (this.root.selectedCountries.length > 0) {
			var lastCountry = this.root.selectedCountries[this.root.selectedCountries.length - 1];
			this.root.globe.latitude = lastCountry.latlng[0];
			this.root.globe.longitude = lastCountry.latlng[1];
		}

		this.root.pin.position.x = 0.51;
		this.root.pin.position.y = 0.032;
		this.root.pin.rotation.y = Math.PI / 2;
		this.root.scene.add(this.root.pin);
		var id = this.id;
		this.country = this.root.getCountryById(id);
		var latDiff = this.country.latlng[0] - this.root.globe.latitude;
		var lngDiff = this.country.latlng[1] - this.root.globe.longitude;
		while(lngDiff > 180) {
			lngDiff -= 360;
		}
		while(lngDiff < -180) {
			lngDiff += 360;
		}
		var start = new tsunami.geom.Point(0, 0);
		var end = new tsunami.geom.Point(latDiff, lngDiff);
		var distance = tsunami.geom.Point.distance(start, end);
		var time = 1 + ((distance / 180) * 2);
		// Keep the globe centered vertically; only animate rotation
		this.root.globe.position.y = 0;
		var rotation = new tsunami.TimeTween(0, time, this.root.globe, {latitude:[this.root.globe.latitude, latDiff], longitude:[this.root.globe.longitude, lngDiff]}, null, tsunami.easing.Cubic.easeInOut);
		var timeline = new tsunami.Timeline();
		timeline.addTween(rotation);
		timeline.addEventListener(tsunami.Timeline.CHANGE, this.render.bind(this));
		var promise = timeline.start();
		var promise2 = promise.then(this.selectCountry.bind(this));
		return promise2;
	};

	p.selectCountry = function() {
		this.root.globe.selectCountry(this.country.name);
		this.root.render();
		return tsunami.promise.timeout(1);
	};

	p.render = function() {
		this.root.render();
	};

	p.hide = function() {
		this.root.scene.remove(this.root.pin);
	};

}());
