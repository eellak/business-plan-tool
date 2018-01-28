var app = new Vue({
    el: 'main',
    data: {
      selected: {id: '', title: '', value: ''},
      actions: [ 
        {id: '1', title: 'Ενεργεια1', value: '60'},
        {id: '2', title: 'Ενεργεια2', value: '80'},
        {id: '3', title: 'Ενεργεια3', value: '90'},
        {id: '4', title: 'Ενεργεια4', value: '100'}
      ],
      actionsSelected: [],
    },
    methods: {
      create() {
        
        var pickAction = {id: '', title: '', value: ''}
        this.actionsSelected.push(pickAction)
        console.log("pickAction", pickAction)
        console.log("selected",this.selected)
        console.log("actionsSelected",this.actionsSelected)
        /* this.actions.pop(pickAction) */
      },
      save() {
          console.log('Οι actions που αποθηκεύτηκαν είναι:')
          console.log(this.actions)
      },
      check(){
        congole.log("selected",selected)
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

/* add(){
  action = `<div class="actions-container">
                  <br/>
                  <select class="userInput" v-model="a">
                      <option v-for="a in actions" v-bind:value="a.title" > 
                      {{ a.title }}
                      </option>s
                  </select>
                  <p class="userInput" id="B"  type="text" name="cost" placeholder="COST">
              </div>
              `; 
    this.actions.push(action) 
    $(".actions").append(action) 
   /* this.acions.push(".actions") }*/