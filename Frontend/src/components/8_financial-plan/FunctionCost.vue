<template>
	<div class="function-cost">

		<!-- INSTRUCTIONS -->
		<div id="instr">
			<button id="show-modal" @click="showModal = !showModal">ΟΔΗΓΙΕΣ</button>
			<modal v-if="showModal" @close="showModal = !showModal" v-bind:instr-num="1"></modal>
		</div>

		<!-- MAIN BODY -->
		<div id="userArea">
			<h1 id="pageHeader">ΚΟΣΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ</h1>
			<br/>
			<div v-for="s in selections" :key="s.functionID">
				<my-select-func></my-select-func> 
			</div>
			<button id="addButton" @click="create()" >+</button> <br/>
			<div v-if="showCalculate">
				<button id="calculateButton" @click="calculate()">ΥΠΟΛΟΓΙΣΕ</button>
				<label id="result">{{ result }}</label>
			</div>
        </div>

	</div>
</template>

<script>
import Modal from './Modal.vue'
import MySelectFunc from './MySelectFunc.vue'

window.MySelectDataFunc = {
					counter:0, 
					picker: [],
					actions: [
							{functionID: '1', title: 'Ενεργεια1', value: '60'},
							{functionID: '2', title: 'Ενεργεια2', value: '80'},
							{functionID: '3', title: 'Ενεργεια3', value: '90'},
							{functionID: '4', title: 'Ενεργεια4', value: '100'}
							]}

export default {
	name: 'FunctionCost',
	components:{
		Modal,MySelectFunc
	},
	data() {
		return {
			showModal:false,
			now: '',
			selections: [],
			result: '---',
			showCalculate: false,
		}
	},
	mounted() {
		// Here you can write code you want to run,
		// when this component is loaded.
	},
	methods: {
		create : function() {
            var length = window.MySelectDataFunc.actions.length + window.MySelectDataFunc.picker.length
            if(window.MySelectDataFunc.counter < (length)){
              this.selections.push(this.now)
              this.showCalculate = true;
            }
          },
          calculate : function() {
            var sum = 0
            for(var i = 0 ; i < window.MySelectDataFunc.picker.length;i++){
              sum = sum + parseInt(window.MySelectDataFunc.picker[i].value)
            }
            if(sum!=0){
              this.result = sum
            }else{
              this.result = '---'
            }
          },
	}
}
</script>

<style scoped>

/* MODAL */
.basic_button {
            background-color: rgb(24, 146, 105);
            width: 100px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
}
#show-modal{
	height:68px;
	width:172px;
	position:absolute;
	top:45px;
	left:1081px;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: stretch;
    min-height: 100vh;
}

/*---QUESTIONS---*/
#userArea{

	backround-color:#fff;
    overflow-y: scroll;
    /* padding: 10px; */
    /* margin: 10px; */

}
h5{
	position:relative;
	top:20px;
	font-size:20px;
	}

h4{
	font-size: 40px;
	color: #cbcaca;
	overflow-y: hidden;
	font-family: "Open Sans";
	color:#1e2133;
	backround-color:#fff;
	position:absolute;
	top:102px;
	left:568px;
	height:866px;
	width:1334px;
	bottom:100px;
}

h5{
	
	position:relative;
	top:20px;
	left:83px;
	font-size:20px;
	}


.column1{
    position: relative;
    margin-right: 10px;
}	
.column2{
	position: relative;
    margin-left: 10px;
}


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

/* MAIN */
#pageHeader{
    position:relative;
    margin-left:50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 50px;
}
#instructions{
	height:68px;
	width:172px;
	position:absolute;
	top:45px;
	left:1081px;
}
#addButton{
    position: relative;
    width: 50px;
    height: 50px;
    margin-top:25px;
    margin-left:50px;
    margin-bottom:20px;
}
#selectionLabel{
    position:relative;
    margin-top:10px;
    margin-left:50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;

}
#valueLabel{
    position: relative;
    margin-left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
}
#userInput{
	
	position:relative;
	background-color: #fff;

    margin-top:50px;
    margin-left:50px;

	width:200px;
	height:50px;
	text-align: center;
	text-indent: 20px;
	font-size:25px;
	
}

#calculateButton{
	position:relative;
    margin-top:50px;
    margin-left: 50px;
}
#result{
	position:relative;
    margin-left:100px;
	text-align: center;
	font-size:25px;
}

#product{
	color:#1e2133
}

placeholder{
	color:#cbcaca
}


#hdeadCenter{
    position: relative;
    margin-top: 20px;
    margin-left: 80px;
    font-size: 30px;
    font-weight: bold;
}

#add{

	position:relative;
	top:30px;
	
}
</style>
