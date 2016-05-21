import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		searchWeather(zip) {
			console.log(zip);
		}
	}
});
