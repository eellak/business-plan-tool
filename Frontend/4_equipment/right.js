Vue.component('my-form', {
	template: '#my-form'
});

new Vue({
	el: '#right',
  data: {
  	range:0
  },
  
  methods: {
  	addForm: function() {
    	this.range += 1
    },
    removeForm: function(range){
    this.range -=1;    
    }
  }
})
