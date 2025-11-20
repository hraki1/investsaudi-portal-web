(function() {

	SaudiArabia = function() {};

	var p = SaudiArabia.prototype;

	p.show = function() {
		this.root.highlighCountries();
		this.renderBind = this.render.bind(this);
		tsunami.clock.addEventListener("tick", this.renderBind);
		
		// Get Saudi Arabia country data
		var saudiArabia = this.root.getCountryById("SA");
		
		if (saudiArabia) {
			// Set camera to view Saudi Arabia
			this.root.orbitalCamera.radius = 1.2;
			this.root.globe.latitude = saudiArabia.latlng[0];
			this.root.globe.longitude = saudiArabia.latlng[1];
			
			// Highlight Saudi Arabia
			this.root.globe.selectCountry(saudiArabia.name);
			
			// Add pin marker
			this.root.pin.position.x = 0.51;
			this.root.pin.position.y = 0.032;
			this.root.pin.rotation.y = Math.PI / 2;
			this.root.scene.add(this.root.pin);
		}
		
		this.root.globe.position.x = 0;
		this.root.globe.position.y = 0;
		this.root.globe.position.z = 0;
		this.render();
	};

	p.render = function() {
		// Optional: slow rotation while viewing Saudi Arabia
		// this.root.globe.longitude -= 0.05;
		this.root.render();
	};

	p.hide = function() {
		tsunami.clock.removeEventListener("tick", this.renderBind);
		// Remove pin when leaving this section
		if (this.root.pin && this.root.scene) {
			this.root.scene.remove(this.root.pin);
		}
	};

}());

