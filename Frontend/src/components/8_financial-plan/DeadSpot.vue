<template>
	<div class="dead-spot">
		<!-- INSTRUCTIONS -->
		<div id="instr">

			<button id="show-modal" @click="showModal = !showModal">ΟΔΗΓΙΕΣ</button>
			<modal v-if="showModal" @close="showModal = !showModal" v-bind:instr-num="2"></modal>
    
		</div>

		 <!-- MAIN BODY -->
		<div id="userArea">
			<h1 id="pageHeader">ΝΕΚΡΟ ΣΗΜΕΙΟ</h1>
			<br/>
			<div v-for="s in selections" :key="s.productID">
				<my-table></my-table> 
			</div>
			<button id="addButton" @click="create()" >+</button> <br/>
		</div>
	</div>
</template>

<script>
import Modal from './Modal.vue'
import MyTable from './MyTable.vue'

 window.deadSpotData= {
        counter:0, 
        picker: [],
        dsList: [
                {"productID": 1 , "deadSpot":"Νεκρο σημειο1"},
                {"productID": 2 , "deadSpot":"Νεκρο σημειο2"},
                {"productID": 3 , "deadSpot":"Νεκρο σημειο3"}
              ],
        inputDSpots: [],
  }
export default {
	name: 'DeadSpot',
	components:{
		Modal,MyTable
	},
	data() {
		return {
			showModal:false,
            now: '',
            selections: [],
		}
	},
	mounted() {
	},
	methods: {
		create() {
              var length = window.deadSpotData.dsList.length + window.deadSpotData.picker.length
              if(window.deadSpotData.counter < (length)){
                this.selections.push(this.now)
                this.showCalculate = true;
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

	background-color:#fff;
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
	background-color:#fff;
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
