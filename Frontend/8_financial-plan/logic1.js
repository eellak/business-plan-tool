var app = new Vue({
    el: 'main',
    data: {
      actions: [ 
        {id: '1', title: 'Ενεργεια1', implementationCost: 60},
        {id: '2', title: 'Ενεργεια2', implementationCost: 60},
        {id: '3', title: 'Ενεργεια3', implementationCost: 60},
        {id: '4', title: 'Ενεργεια4', implementationCost: 60}
      ],
    },
    methods: {
      add(){
          var action = `<div class="actions-container">
                          <br/>
                          <select class="userInput">
                              <option>` 
                              + a.title + 
                              `</option>
                          </select>
                          <p class="userInput" id="B"  type="text" name="cost" placeholder="COST">
                      </div>
                      `;
          $(".actions").append(action)
      },
      create() {
        var newAction = { id: '1', title: 'Ενεργεια1', implementationCost: 60}
        this.actions.push(newAction)
      },
      save() {
          console.log('Οι actions που αποθηκεύτηκαν είναι:')
          console.log(this.actions)
      }
    }
})

//{"actionID": 1 , "name": "Ενεργεια1", "actionCost": 56},

/*
//6.2
"sixMarketing": {
  "marketingActions":[
    {"id": 1, "title":"Ενεργεια1", "implementationTime": 54, "frequency": 2, "implementationCost": 60, "totalCost":"Συνολικο Κοστος 1"},
    {"id": 2, "title":"Ενεργεια2", "implementationTime": 4, "frequency": 6, "implementationCost": 560, "totalCost":"Συνολικο Κοστος 2"},
    {"id": 3, "title":"Ενεργεια3", "implementationTime": 67, "frequency": 9, "implementationCost": 8960, "totalCost":"Συνολικο Κοστος 3"}
  ]
}
*/

/*“Ομάδα υλοποίησης”, “Τόπος εγκατάστασης & εξοπλισμός”,
“Στρατηγική marketing & πωλήσεων” “Προϊόντα/Υπηρεσίες”*/


// TASKS
// 1. Add + button
// 2. Validation of two actions checked
// 3. Calculations