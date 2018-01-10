var app = new Vue({
    el: '#app',
    data: {
      managers: [],
    },
    methods: {
      addManager: function() {
        var newManager = { name: '', surName: '', job: '', linkedIn: '' }
        this.managers.push(newManager)
      },
      removeManager: function(theManager, event) {
        for (var i = 0, l = this.managers.length; i < l; i++) {
            if (this.managers[i].surName === theManager.surName) {
                this.managers.splice(i)
            }
        }
        $(event.currentTarget.parentElement).remove()
      },
      preSave: function() {
        console.log(this.managers)
      },
      saveManagers: function() {

        // It needs delete all first
        var that = this
        for (var i=0, l = this.managers.length; i < l; i++) {
            axios.post('http://localhost:3000/manager', {
                name: that.managers[i].name,
                surName: that.managers[i].surName,
                job: that.managers[i].job,
                linkedIn: that.managers[i].linkedIn
            })
            .then(function (response) {
                console.log("saving manager...")
            }) 
            .catch(function (error) {
                console.log(error)
            })
        }
      },
    },
    // watch: {
    //     age: function(val) {
    //         var newAge = { age: }
    //     }
    // }
  })


//   { name: 'Γιώργος', surName: 'Ασσι', job: 'CEO', linkedIn: 'χαχα' },
// { name: 'Δημήτρης', surName: 'Βόγας', job: 'Προγραμματιστής', linkedIn: 'χαχα' },
// { name: 'Γιάννης', surName: 'Λιάγκος', job: 'Μαρκετίστας', linkedIn: 'χαχα' }