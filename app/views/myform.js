import Ember from 'ember';

export default Ember.View.extend({
	focusOut: function(event){
		var currentTargetId = event.target.id;
		var controller = this.get('controller');
		if(currentTargetId === 'username'){
			controller.set('usernameFocusOut', true);
		}else if(currentTargetId === 'password'){
			controller.set('passwordFocusOut', true);
		}
	}
});
