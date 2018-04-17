<template>
        <div class= "my-table" v-if="show_div">
            <table>
                <tr>
                    <td>
                        <div class="column1">
                        <div v-if="show_select">
                            <h5 id="a"> Διαλέξτε προιόν</h5> <br/>
                            <select class="productSelection" v-model="pick" key="kcounter">
                            <option  v-for="a in actions" v-bind:value="a" :key="a.productID">
                                {{ a.deadSpot }}
                            </option>
                            </select>
                        </div>
                        <div class="userSelection">
                            <label id="selectionTableLabel" v-if="!show_select">{{pick.deadSpot}}</label>
                            <span>{{ emitare(pick,kcounter)}}</span>
                        </div>
                        </div>
                        <!-- <my-select></my-select></div> -->
                    </td>
                    <td>
                    <div class="column2">
                        <button id="minusTableButton" @click="test($event)">-</button>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="column1">
                            <h5> Ποιο είναι το κόστος?</h5><br/>
                            <input class="userSelection" v-model.number="inputDSpot.cost" @change="checkInput(0)" placeholder="ΚΟΣΤΟΣ ΠΑΡΑΓΩΓΗΣ"><br/>
                            <span class="number-notice" v-if="inputWarnings[0]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>
                        </div>
                    </td>
                    <td>
                        <div class="column2">
                            <h5> Ποια είναι η τιμή πώλησης?</h5> <br/>
                            <input class="userSelection" v-model.number="inputDSpot.saleAmount" @change="checkInput(1)" placeholder="ΤΙΜΗ ΠΩΛΗΣΗΣ"><br>
                            <span class="number-notice" v-if="inputWarnings[1]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="column1">
                            <h5> Ποιο είναι το ετήσιο σταθερό κόστος?</h5> <br/>
                            <input class="userSelection" v-model.number="inputDSpot.yearCost" @change="checkInput(2)" placeholder="ΕΤΗΣΙΟ ΣΤΑΘΕΡΟ ΚΟΣΤΟΣ"><br>
                            <span class="number-notice" v-if="inputWarnings[2]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>
                        </div>
                    </td>
                    <td>
                        <div class="column2">
                            <h5> Ποιος είναι ο αριθμός πωλήσεων?</h5> <br/>
                            <input class="userSelection" v-model.number="inputDSpot.salesNumber" @change="checkInput(3)" placeholder="ΑΡΙΘΜΟΣ ΠΩΛΗΣΕΩΝ"><br>
                            <span class="number-notice" v-if="inputWarnings[3]">Προσοχή: Μόνο ακέραιους αριθμούς!</span>
                        </div>
                    </td>
                </tr>
            </table>
            <div>
            <button id="calculateButton" @click="calculate($event)">ΥΠΟΛΟΓΙΣΕ</button>
            <label id="result">{{ result }}</label>
            </div>
        </div>
</template>

<script>
//import MySelect from './MySelect.vue'
export default {
	name: 'MyTable',
	components:{
		//MySelect
	},
	data() {
		return {
            show_div: true, //false: patontas to button afairesis gia na fygei to tab
            pick: '', //epilogi tou select
            actions: window.deadSpotData.dsList,
            kcounter: window.deadSpotData.counter++,
            show_select:true, //false: otan ginei epilogh tou deadspot
            result: '---', //arxiko calculate
            inputDSpot: {}, //ta input tou kathe shmeiou
            propInput: ['cost','saleAmount','yearCost','salesNumber'], //ta properties tou inputDSpot: {}
            inputWarnings: [false,false,false,false] //to array me ta flag gia ta notifications
		}
	},
	mounted() {
		
	},
	methods: {
         test: function(event){//afairei to tab kai gyrnaei to pick stis diathesimes epiloges
              if(this.pick!=''){
                  window.deadSpotData.dsList.push(this.pick)
                  for(var i = 0; i < window.deadSpotData.picker.length ; i++){
                    if(window.deadSpotData.picker[i] == this.pick){
                      window.deadSpotData.picker.splice(i,1)
                    }
                  }
                }
                this.show_div = false;
                window.deadSpotData.counter--
            },
            emitare: function(a,k){ //epilegei nekro shmeio kai to afairei ap tis diathesimes epiloges
              //a: h energia
                if(parseInt(a.productID)>=0){
                  //oti epilegete svinete apo to select
                  for(var i=0;i<window.deadSpotData.dsList.length;i++){
                    if(window.deadSpotData.dsList[i] == a){
                      this.show_select = false
                      window.deadSpotData.dsList.splice(i,1)
                    }
                  }
                  var flag=false;
                  for(var i=0;i<window.deadSpotData.picker.length;i++){
                    if(window.deadSpotData.picker[i]== a){
                      window.deadSpotData.picker.splice(i,1)
                      window.deadSpotData.picker.push(a)
                      flag = true
                    }
                  }         
                  if(flag==false){
                    window.deadSpotData.picker.push(a)
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
                  window.deadSpotData.inputDSpots.push(this.inputDSpot)
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
	},
}
</script>

<style scoped>
/* BUTTONS */
button{
	font-family:"Source Sans Pro";
	position:fixed;
	position:relative;
	width:217px;
	height:65px;
	background-color:#299858 ; 
	font-size: 25px;
    color:#fff;
}
#minusTableButton{
    position: relative;
    text-align: center;
    width: 50px;
    height: 50px;
    margin-left:150px;
}
#calculateButton{
	position:relative;
    margin-top:50px;
    margin-left: 50px;
    margin-bottom:50px;
}
#result{
	position:relative;
    margin-left:100px;
	text-align: center;
	font-size:25px;
}

/* TABLE */
.column1{
    position: relative;
    margin-right: 10px;
}	
.column2{
	position: relative;
    margin-left: 10px;
}
h5{
	position:relative;
	top:20px;
	left:83px;
	font-size:20px;
}

.userSelection{
    position:relative;
	background-color: #fff;
	top:10px;
	left:px;

	top:0px;
	left:83px;

	width:393px;
	height:66px;
	text-align: left;
	text-indent: 20px;
	font-size:25px;
}
#selectionTableLabel{
    position:relative;
    margin-bottom: 20px;
    
    margin-right: 5px;
    word-wrap: unset;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 50px;
    text-shadow:2px 2px 12px grey;

}
.productSelection{
    position:relative;
    margin-left:83px;
    margin-right: 5px;
	
    
    width:393px;
    height:66px;
    
    text-align: left;
    text-indent: 20px;
	font-size:25px;
    background-color: #fff; 
}
.number-notice{
    position: relative;
    margin-top:0px;
    margin-bottom: 0px;
    margin-left:80px;
    padding: 0%;
    font-size: 10px;
    color: red;
}
</style>