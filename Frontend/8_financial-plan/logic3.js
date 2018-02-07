Vue.component('modal', {
  template: '#modal-template' //shoModal:false,
  })
  
  var temp = {
        counter:0, 
        picker: [],
        dsList: [
                {"productID": 1 , "deadSpot":"Νεκρο σημειο1"},
                {"productID": 2 , "deadSpot":"Νεκρο σημειο2"},
                {"productID": 3 , "deadSpot":"Νεκρο σημειο3"}
              ]
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
                                  <input class="userSelection"    type="text" name="productCost" placeholder="ΚΟΣΤΟΣ ΠΑΡΑΓΩΓΗΣ"><br>\
                              </div>\
                          </td>\
                          <td>\
                              <div class="column2">\
                                  <h5> Ποια είναι η τιμή πώλησης?</h5> <br/>\
                                  <input class="userSelection" id="inputC"  type="text" name="salesPrice" placeholder="ΤΙΜΗ ΠΩΛΗΣΗΣ"><br>\
                              </div>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td>\
                              <div class="column1">\
                                  <h5> Ποιο είναι το ετήσιο σταθερό κόστος?</h5> <br/>\
                                  <input class="userSelection" id="inputE"  type="text" name="salesCount" placeholder="ΕΤΗΣΙΟ ΣΤΑΘΕΡΟ ΚΟΣΤΟΣ"><br>\
                              </div>\
                          </td>\
                          <td>\
                              <div class="column2">\
                                  <h5> Ποιος είναι ο αριθμός πωλήσεων?</h5> <br/>\
                                  <input class="userSelection" id="inputE"  type="text" name="salesCount" placeholder="ΑΡΙΘΜΟΣ ΠΩΛΗΣΕΩΝ"><br>\
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
                  show_div: true,
                  pick: '',
                  actions: temp.dsList,
                  kcounter: temp.counter++,
                  show_select:true,
                  result: '---'
                }
          },
        methods:{
            test: function(event){
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
            emitare: function(a,k){ //a: h energia
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
            calculate: function(event){
              var sum = 0
              for(var i = 0 ; i < temp.picker.length;i++){
                // sum = sum + parseInt(temp.picker[i].value)
              }
              if(sum!=0){
                this.result = sum
              }else{
                this.result = '---'
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