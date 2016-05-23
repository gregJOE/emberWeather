import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		searchWeather(zip) {
			if (zip === undefined || zip === '') {
				alert('Please enter a zipcode');
				return;
			}
			console.log(zip);
		}
	}
});
