Vue.component('water-page', {
	template: `
	<div>
		<p>
			Water is distributed across Earth. 
			Most water comes from saline seawater, while freshwater accounts for only 2.5% of the total.
		</p>

		<p>
			Because the oceans that cover roughly 78% of the area of the Earth reflect blue light, 
			the Earth appears blue from space, and is often referred to as the blue planet.
		</p>

		<p>
			The planet's fresh water exists in the form of ice, snow, groundwater and soil moisture. 
			Of the liquid surface fresh water, 87% is contained in lakes, 11% in swamps, and only 2% in rivers. 
			Small quantities of water also exist in the atmosphere and in living beings.
		</p>

		<p>
			Since the low density rocks of the continental crust contain large quantities of easily eroded 
			salts of earth metals, salt has, over billions of years, accumulated in the oceans as a result of 
			evaporation returning the fresh water to land as rain and snow.
		</p>

		<p>
			The water cycle describes the continuous movement of water on, above and below the surface 
			of the Earth. The water cycle involves the exchange of energy, which leads to temperature changes. 
			hen water evaporates, it takes up energy from its surroundings and cools the environment. 
			When it condenses, it releases energy and warms the environment. 
			These heat exchanges influence climate.
		</p>

		<p>
			The sun, which drives the water cycle, heats water in oceans and seas. 
			Water evaporates as water vapor into the air. 
			Some ice and snow sublimates directly into water vapor.
		</p>

		<p>
			The evaporative phase of the cycle purifies water which then replenishes the land with freshwater. 
			The flow of liquid water and ice transports minerals across the globe. 
			The water cycle is also essential for the maintenance of most life and ecosystems on the planet.
		</p>

		<p>
			Atmospheric circulation moves water vapor around the globe, cloud particles collide, grow, 
			and fall out of the upper atmospheric layers as precipitation. Some precipitation falls as snow or hail, 
			sleet, and can accumulate as ice caps and glaciers, which can store frozen water for thousands of years. 
			Over time, the water returns to the ocean, to continue the water cycle.
		</p>
	</div>`,
});

Vue.component('earth-page', {
	template: `
	<div>
		<p>
			The lithosphere, the rigid outermost shell of a planet, is broken into tectonic plates. 
			The Earth's lithosphere is composed of seven or eight major plates and many minor plates. 
			Tectonic motion is believed to have begun around 3 to 3.5 billion years ago.
		</p>

		<p>
			The movement of plates has caused the formation and break-up of continents over time, 
			including occasional formation of a supercontinent that contains most or all of the continents.
		</p>

		<p>
			Plate motions range up to a typical 10–40 mm/year (Mid-Atlantic Ridge; about as fast as 
			fingernails grow), to about 160 mm/year (Nazca Plate; about as fast as hair grows).
		</p>

		<p>
			The location where two plates meet is called a plate boundary. Plate boundaries are commonly 
			associated with earthquakes and the creation of mountains, volcanoes, mid-ocean ridges, and 
			oceanic trenches. 
		</p>

		<p>
			The majority of the world's active volcanoes occur along plate boundaries, with the 
			Pacific Plate's Ring of Fire being the most active and widely known today.
		</p>

		<p>
			When plates collide or undergo subduction (that is – ride one over another), the plates tend to 
			buckle and fold, forming mountains. 
		</p>

		<p>
			The Himalayas, the world's tallest mountain range, are assumed to have been formed by the 
			collision of two major plates. Before uplift, they were covered by the Tethys Ocean.
		</p>

		<p>
			The current motion of the tectonic plates is today determined by remote sensing satellite data 
			sets, calibrated with ground station measurements.
		</p>
	</div>`
});

Vue.component('air-page', {
	template: `<div></div>`,
});

Vue.component('fire-page', {
	template: `<div></div>`,
});

new Vue({
	el: "#app"
});
