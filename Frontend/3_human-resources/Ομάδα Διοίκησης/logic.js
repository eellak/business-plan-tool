var app = new Vue({
    el: 'main',
    data: {
      managers: [],
    },
    methods: {
      create() {
        var newManager = { name: '', surName: '', job: '', linkedIn: '' }
        this.managers.push(newManager)
      },
      insert() {
          console.log('Οι managers που αποθηκεύτηκαν είναι:')
          console.log(this.managers)
      }
    }
})


// { name: 'Γιώργος', surName: 'Ασσι', job: 'CEO', linkedIn: 'χαχα' },
// { name: 'Δημήτρης', surName: 'Βόγας', job: 'Προγραμματιστής', linkedIn: 'χαχα' },
// { name: 'Γιάννης', surName: 'Λιάγκος', job: 'Μαρκετίστας', linkedIn: 'χαχα' }