Vue.component('modal', {//shoModal:false,
  template: ` <transition> 
                <div class="modal-mask">
                  <div class="modal-wrapper">
                  <div class="modal-container">

                      <div class="modal-header">
                          <h3>ΝΕΚΡΟ ΣΗΜΕΙΟ</h3>
                      </div>

                      <div class="modal-body">
                          <p>Σε αυτή την ενότητα υπολογίζεται το Νεκρό Σημείο των προιόντων.Δηλαδή, το σημείο στο 
                          οποίο το ύψος των πωλήσεων έχει συνολικά έσοδα ίσα με τα συνολικά έξοδα.
                          Συμπληρώστε τα απαραίτητα πεδία και πατήστε το πλήκτρο για τον υπολογισμό του Νεκρού Σημείου. 
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
        dsList: [
                {"productID": 1 , "deadSpot":"Νεκρο σημειο1"},
                {"productID": 2 , "deadSpot":"Νεκρο σημειο2"},
                {"productID": 3 , "deadSpot":"Νεκρο σημειο3"}
              ],
        inputDSpots: [],
  }
  
  Vue.component('my-table',{
        template: '<div v-if="show_div">\
                    <table>\
                      <tr>\
                          <td>\
                              <div class="column1">\
                                <div  v-if="show_select">\
                                  <h5 id="a"> Διαλέξτε προιόν</h5> <br/>\
                                  <select class="userSelection" v-model:value="pick" key="kcounter">\
                                    <option  v-for="a in actions" v-bind:value="a">\
                                        {{ a.deadSpot }}\
                                    </option>\
                                  </select>\
                                </div>\
                                <label id="selectionTableLabel" v-if="!show_select">{{pick.deadSpot}}</label>\
                                <span>{{ emitare(pick,kcounter)}}</span>\
                              </div>\
                          </td>\
                          <td>\
                            <div class="column2">\
                              <button id="minusTableButton" @click="test($event)">-</button>\
                            </div>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td>\
                              <div class="column1">\
                                  <h5> Ποιο είναι το κόστος?</h5><br/>\
                                  <input class="userSelection" v-model.number="inputDSpot.cost" @change="checkInput(0)" placeholder="ΚΟΣΤΟΣ ΠΑΡΑΓΩΓΗΣ"><br/>\
                                  <span class="number-notice" v-if="inputWarnings[0]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>\
                              </div>\
                          </td>\
                          <td>\
                              <div class="column2">\
                                  <h5> Ποια είναι η τιμή πώλησης?</h5> <br/>\
                                  <input class="userSelection" v-model.number="inputDSpot.saleAmount" @change="checkInput(1)" placeholder="ΤΙΜΗ ΠΩΛΗΣΗΣ"><br>\
                                  <span class="number-notice" v-if="inputWarnings[1]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>\
                              </div>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td>\
                              <div class="column1">\
                                  <h5> Ποιο είναι το ετήσιο σταθερό κόστος?</h5> <br/>\
                                  <input class="userSelection" v-model.number="inputDSpot.yearCost" @change="checkInput(2)" placeholder="ΕΤΗΣΙΟ ΣΤΑΘΕΡΟ ΚΟΣΤΟΣ"><br>\
                                  <span class="number-notice" v-if="inputWarnings[2]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>\
                              </div>\
                          </td>\
                          <td>\
                              <div class="column2">\
                                  <h5> Ποιος είναι ο αριθμός πωλήσεων?</h5> <br/>\
                                  <input class="userSelection" v-model.number="inputDSpot.salesNumber" @change="checkInput(3)" placeholder="ΑΡΙΘΜΟΣ ΠΩΛΗΣΕΩΝ"><br>\
                                  <span class="number-notice" v-if="inputWarnings[3]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>\
                              </div>\
                          </td>\
                      </tr>\
                  </table>\
                  <div>\
                    <button id="calculateButton" @click="calculate($event)">ΥΠΟΛΟΓΙΣΕ</button>\
                    <label id="result">{{ result }}</label>\
                  </div>\
                </div>',
        data: function(){
                return {
                  show_div: true, //false: patontas to button afairesis gia na fygei to tab
                  pick: '', //epilogi tou select
                  actions: temp.dsList,
                  kcounter: temp.counter++,
                  show_select:true, //false: otan ginei epilogh tou deadspot
                  result: '---', //arxiko calculate
                  inputDSpot: {}, //ta input tou kathe shmeiou
                  propInput: ['cost','saleAmount','yearCost','salesNumber'], //ta properties tou inputDSpot: {}
                  inputWarnings: [false,false,false,false] //to array me ta flag gia ta notifications
                }
          },
        methods:{
            test: function(event){//afairei to tab kai gyrnaei to pick stis diathesimes epiloges
              if(this.pick!=''){
                  temp.dsList.push(this.pick)
                  for(var i = 0; i < temp.picker.length ; i++){
                    if(temp.picker[i] == this.pick){
                      temp.picker.splice(i,1)
                    }
                  }
                }
                this.show_div = false;
                temp.counter--
            },
            emitare: function(a,k){ //epilegei nekro shmeio kai to afairei ap tis diathesimes epiloges
              //a: h energia
                if(parseInt(a.productID)>=0){
                  //oti epilegete svinete apo to select
                  for(var i=0;i<temp.dsList.length;i++){
                    if(temp.dsList[i] == a){
                      this.show_select = false
                      temp.dsList.splice(i,1)
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
            calculate: function(event){ //ypologismos nekrou shmeiou
              var oLength = Object.keys(this.inputDSpot).length;

              try{
                if(this.pick == '') throw "Επιλέξτε νεκρό σημείο."
                if(this.inputDSpot.saleAmount - this.inputDSpot.cost == 0) throw "Λάθος τιμές εισαγωγής."
                if(this.inputDSpot.yearCost<0) throw "Λάθος ετήσιο κόστος."
                if( oLength == 4){
                  temp.inputDSpots.push(this.inputDSpot)
                  var calcDeadPoint = this.inputDSpot.yearCost/(this.inputDSpot.saleAmount - this.inputDSpot.cost)//calculate nekro shmeio
                  this.result = calcDeadPoint.toFixed(1) //mexri ena dekadiko psifio
                }
                if(oLength <4 && oLength > 0) throw "Συμπληρώστε και τα υπόλοιπα πεδία."
                if(oLength==0) throw "---"
              }catch(err){
                this.result = err
              }
            },
            checkInput : function(field){ //elexei tis isagwges twn input
              var prop = this.propInput[field]
              var inputValue = this.inputDSpot[prop]
              
              if(!isNaN(inputValue)){
                this.inputWarnings[field] = false
              }else{
                //var prop = Object.keys(this.inputDSpot)[field]
                delete this.inputDSpot[prop] //delete to prop apo to object otan den einai num
                this.inputWarnings[field] = true //vgazei warning 
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
        },
        methods: {
            create() {
              var length = temp.dsList.length + temp.picker.length
              if(temp.counter < (length)){
                this.selections.push(this.now)
                this.showCalculate = true;
              }
            },
        }
  })
  

// "eightDeadSpot": {
//   "dsList": [
//     {"productID": 1 , "deadSpot":"Νεκρο σημειο1"},
//     {"productID": 2 , "deadSpot":"Νεκρο σημειο2"},
//     {"productID": 3 , "deadSpot":"Νεκρο σημειο3"}
//   ]
// }