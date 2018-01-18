var app = new Vue({
    el: 'main',
    data: {
      externalPartners: []
    },
    methods: {
      create() {
        var newPartner = { name: '', surName: '', expertise: '', linkedIn: '', from: '', until: '', duties: '' }
        this.externalPartners.push(newPartner)
      },
      save() {
        console.log('Οι εξωτερικοί συνεργάτες που αποθηκεύτηκαν είναι:')
        console.log(this.externalPartners)
      }
    }
})


// "externalPArtners": [
//   {"id": 1, "name": "Partner1", "surName": "hisSurname1", "expertise": "Exp1", "linkedIn": "www1", "from": 20171115, "until": 20190920, "duties": "Περιγραφη καθηκοντων 1"},
//   {"id": 2, "name": "Partner2", "surName": "hisSurname2", "expertise": "Exp2", "linkedIn": "www2", "from": 20171114, "until": 20190910, "duties": "Περιγραφη καθηκοντων 2"},
//   {"id": 3, "name": "Partner3", "surName": "hisSurname3", "expertise": "Exp3", "linkedIn": "www3", "from": 20121115, "until": 20290920, "duties": "Περιγραφη καθηκοντων 3"}
// ]