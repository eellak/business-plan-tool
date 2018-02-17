Vue.component('modal', {//shoModal:false,
  template: ` <transition> 
                <div class="modal-mask">
                  <div class="modal-wrapper">
                  <div class="modal-container">

                      <div class="modal-header">
                          <h3>ΚΟΣΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ</h3>
                      </div>

                      <div class="modal-body">
                          <p> Σε αυτή την ενότητα καταγράφονται όλες οι δαπάνες οι οποίες θα γίνονται σε ετήσια βάση απο την 
                          επιχείρηση με σκοπό την εξασφάλιση της βιωσημότητας της.
                          Συμπληρώστε τα πλαίσια με τις δαπάνες που επιθυμείτε καθώς και το ετήσιο κόστος της κάθε μίας.
                          Έπειτα πιέστε το πλήκτρο υπολογισμού για να δείτε το Συνολικό Κόστος Λειτουργίας.
                          Στη συνέχεια επιλέξτε το πλήκτρο "ΕΜΠΡΟΣ" για να προχωρήσετε παρακάτω.
                          </p>
                      </div>

                      <div class="modal-footer">
                          <button class="modal-default-button" @click="$emit('close')">OK</button>
                      </div>
                  </div>
                  </div>
              </div>
            </transition>`
})
    
    var temp = {
          counter:0, 
          picker: [],
          actions: [
                  {functionID: '1', name: 'Ενεργεια1', functionCost: '56'},
                  {functionID: '2', name: 'Ενεργεια2', functionCost: '54'},
                  {functionID: '3', name: 'Ενεργεια3', functionCost: '7'},
                ]
    }
    
    Vue.component('my-select',{
          template: '<div v-if="showdiv">\
                      <select id="userInput" v-model:value="pick" key="kcounter"s v-if="f">\
                        <option v-for="a in actions" v-bind:value="a" >{{ a.name}}</option>\
                      </select>\
                      <label id="selectionLabel" v-if="!f">{{pick.name}}</label>\
                      <label id="valueLabel">Τιμή : {{ pick.functionCost ,emitare(pick,kcounter)}}</label>\
                      <button id="minusButton" @click="test($event)">-</button>\
                    </div>',
          data: function(){
                  return {
                    showdiv: true,
                    pick: '',
                    actions: temp.actions,
                    kcounter: temp.counter++,
                    f:true
                  }
            },
          methods:{
              test: function(event){
                if(this.pick!=''){
                    temp.actions.push(this.pick)
                    for(var i = 0; i < temp.picker.length ; i++){
                      if(temp.picker[i] == this.pick){
                        temp.picker.splice(i,1)
                      }
                    }
                  }
                  this.showdiv = false;
                  temp.counter--
              },
            emitare: function(a,k){ //a: h energia
                if(parseInt(a.functionCost)>=0){
                  //oti epilegete svinete apo to select
                  for(var i=0;i<temp.actions.length;i++){
                    if(temp.actions[i] == a){
                      this.f = false
                      temp.actions.splice(i,1)
                    }
                  }
                  flag=false;
                  for(var i=0;i<temp.picker.length;i++){
                    if(temp.picker[i]== a){
                      temp.picker.splice(i,1)
                      temp.picker.push(a)
                      flag = true
                    }
                  }         
                  if(flag==false){
                    temp.picker.push(a)
                    flag=false
                  }
                }
            },
          }
    })
    
    var app = new Vue({
          el: 'main',
          data: {
              showModal:false,
              now: '',
              selections: [],
              result: '---',
              showCalculate: false,
          },
          methods: {
              create() {
                var length = temp.actions.length + temp.picker.length
                if(temp.counter < (length)){
                  this.selections.push(this.now)
                  this.showCalculate = true;
                }
              },
              calculate() {
                var sum = 0
                for(var i = 0 ; i < temp.picker.length;i++){
                  sum = sum + parseInt(temp.picker[i].functionCost)
                }
                if(sum!=0){
                  this.result = sum
                }else{
                  this.result = '---'
                }
              },
          }
    })
    

    // "eightFunction": {
    //     "startFunctions": [
    //       {"functionID": 1 , "name": "Ενεργεια1", "functionCost": 56},
    //       {"functionID": 2 , "name": "Ενεργεια2", "functionCost": 54},
    //       {"functionID": 3 , "name": "Ενεργεια3", "functionCost": 7}
    //     ],
    //     "functionsTotalCost": 6000
    //   }