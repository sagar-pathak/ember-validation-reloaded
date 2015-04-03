import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
	needs: ['application'],
	showError: false,
	errors: [],
	actions: {
		login: function(){
			this.setValidatableOpen();
			this.validate().then(function(){

			}, function(){
				
			});
		},
		cancel: function() {
            this.transitionToRoute('application');
        }
	},

	setValidatableOpen: function(){
		this.setProperties({
			'usernameFocusOut': true,
			'passwordFocusOut': true
		});
	},

	resetFields: function(){
		this.setProperties({
			'errors': [],
			'usernameFocusOut': false,
			'passwordFocusOut': false,
			'username': '',
			'password': ''
		});
	},

	observeError: function(){
		if(this.get('errors.username.length') || this.get('errors.password.length')){
			this.set('showError', true);
		}else{
			this.set('showError', false);
		}
	}.observes('username', 'password'),

	observeValidationTrigger: function(){
		if(this.get('usernameFocusOut') || this.get('passwordFocusOut')){
			this.validate();
		}
		this.observeError();
	}.observes('usernameFocusOut', 'passwordFocusOut'),

	validations: {
		username:{	
			presence: { 'if': 'usernameFocusOut', message: "Username field cannot be blank." }
		},

		password: {
			presence: {  'if': 'passwordFocusOut', message: "Password field cannot be blank." }
		}
	}
});
