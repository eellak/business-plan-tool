<template>
	<div class="running-cost">
		<h1>{{ title }}</h1>
		<div id="userArea"> 
            <div class="container_main">
				<div class="row1">
						<div class="row5">
						ΕΓΚΑΤΑΣΤΑΣΕΙΣ
						</div>
						<div class="row5">
						ΕΞΟΠΛΙΣΜΟΣ
						</div>
				</div>
				<div class="row5_1" id="left" style="    padding-right: 5%;float:left;">
                            <div class="row1">
                                <div class="row5">
                                 Εγκατάσταση
                                </div>
                                <div class="row5">
                                <textarea class="input_1_left"  placeholder="ΚΟΣΤΟΣ" ></textarea>
                                </div>
                            </div>
                            
                            <!-- <my-form2 v-for="x in range2"></my-form2> -->
							<button class="btn_right" id="addButton" v-on:click="addForm2()">+</button>
							<button class="btn_right" id="addButton" v-on:click="removeForm2()">-</button>
		
                </div>
                <div class="row5_1" id="right" style="padding-left: 5%;float:right;border-right:none;"> 
                    <div class="row1">
                        <div class="row5">
                            Εξοπλισμός
                        </div>
                        <div class="row5">
                            <textarea class="input_1_right" placeholder="ΚΟΣΤΟΣ" ></textarea>
                        </div>
                    </div>
                    <div id="app">
                        <!-- <my-form v-for="n in range"></my-form> -->
                        <button class="btn_right" id="addButton" v-on:click="addForm()">+</button>
                        <button class="btn_right" id="addButton" v-on:click="removeForm()">-</button>
                      </div>  
                
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RunningCost',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name
		}
	},
	mounted() {
		// Here you can write code you want to run,
		// when this component is loaded.
	},
	methods: {
		// Here you can write your functions.
		foo() {
		},
	}
}
</script>

<style scoped>
*---QUESTIONS---*/
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
    float:left;
}#addButton2{
    position: relative;
    width: 50px;
    height: 50px;
    margin-top:25px;
    margin-left:50px;
    margin-bottom:20px;
    float:left;
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

#minusButton{
    position: relative;
    width: 50px;
    height: 50px;
    margin-top:25px;
    margin-left:50px;
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
/* --- MODAL --- */
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 94%;
    margin: 0px auto;
    padding: 20px 30px;
    padding-bottom: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
    width: 10%;
    height: 10%;
    margin-bottom: 10px;

}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

#show-modal{
	height:68px;
	width:172px;
	
}
  
/* deadCenter */

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

.number-notice{
    position: relative;
    margin-top:0px;
    margin-bottom: 0px;
    margin-left:80px;
    padding: 0%;
    font-size: 10px;
    color: red;

}

#minusTableButton{
    position: relative;
    width: 50px;
    height: 50px;
    margin-top:25px;
    float:right;
}

#selectionTableLabel{
    position:absolute;
    margin-top:40px;
    margin-bottom: 0px;
    margin-left:80px;
    margin-right: 5px;
    word-wrap: unset;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 50px;
    text-shadow:2px 2px 12px grey;

}

.row1 {
    width: 100%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    margin-top: 30px;
    height:auto;
}
.row2 {
    width: 70%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: left;
    height: auto;
}
.row3 {
    width: 30%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row4 {
    width: 40%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row5_1 {
    border-right: 1px solid #000000;
    width: 50%;
    
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row5 {
    width: 50%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row6 {
    width: 20%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}

.btn_modal{
    color: #fff;
    background-color: #299858;
    border-color: #299858;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: visible;
    box-sizing: border-box;
    font-family: source-sans-pro;
}
.input_1{
    text-align: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
}
.input_1_left{
    text-align: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
}
.input_1_right{
    text-align: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
}
.container_main{
    height: 100%;
    margin-right: 15%;
    margin-left: 15%;
    text-align: center;
    display: block;
    box-sizing: border-box;
    width: 70%;
}

.btn_right{
    color: #fff;
    background-color: #299858;
    border-color:   #299858;
    display: inline-block;
    padding: 6px 12px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: visible;
    box-sizing: border-box; 
    font-family: source-sans-pro;
}

#Submitbtn {
    background-color: #299858;
    border: #299858;
    padding: 1%;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    width: 15%;
  }

  #btn_calc{
      position: relative;
      width: 160px;
      height: 50px;
      float: left;
  }
</style>
