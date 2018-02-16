Vue.component('my-form2', {
	template: '#my-form2'
});

new Vue({
	el: '#left',
  data: {
  	range2:0
  },
  
  methods: {
  	addForm2: function() {
    	this.range2 += 1;
    },
    removeForm2: function(range2){
    this.range2 -=1;    
    }
  }
})