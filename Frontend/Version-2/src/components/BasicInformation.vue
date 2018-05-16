<template>
			<div class="main__body">

			<div class="main__header">
				<h1>ΤΑΥΤΟΤΗΤΑ</h1>
			</div>




			<div class="input_group">
				<div class="title">ΕΠΩΝΥΜΙΑ ΕΤΑΙΡΙΑΣ</div>

				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Fashion4u" v-model="input"></el-input></div>
			</div>
			<div class="input_group">
				<div class="title">ΔΙΕΥΘΥΝΣΗ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Βαλαωρίτου 15" v-model="input"></el-input></div>
			</div>		
			<div class="input_group">
				<div class="title">ΤΗΛΕΦΩΝΑ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="231025344" v-model="input"></el-input></div>
			</div>
			<div class="input_group">
				<div class="title">EMAIL</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="fashion4u@gmail.com" v-model="input"></el-input></div>
			</div>	
			<div class="input_group">
				<div class="title">WEBSITE</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="www.fashion4u.gr" v-model="input"></el-input></div>
			</div>		
			<div class="input_group">
				<div class="title">ΕΡΓΑΣΙΑΚΗ ΦΥΣΗ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="e-shop προϊόντων ένδυσης" v-model="input"></el-input></div>
			</div>
			<div class="input_group">
				<div class="title">ΙΔΙΟ ΚΕΦΑΛΑΙΟ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="€25.000" v-model="input"></el-input></div>
			</div>
			<div class="input_group">
				<div class="title">ΕΤΟΣ ΙΔΡΥΣΗΣ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="2013" v-model="input"></el-input></div>
			</div>
			<div class="input_group">
				<div class="title">ΣΤΕΛΕΧΗ</div>
				<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
			</div>


		<div class="main__footer">
			
				
				<div class="footer__buttons">
				<button class="button" @click="validateForm()">BACK</button>
				<button class="button" @click="validateForm()">NEXT</button>
				</div>
			</div>


			</div>
			
</template>
<script>
export default {
	name: 'BasicInformation',
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

	}
}
</script>

<style lang="scss" scoped>
.button{
	background-color: #299858;
    color: #fff;
    border: #299858;
    padding: 15px;
    text-align: center;
    font-size: 20px;
    width: 160px;
	border-radius:5px;
}

.instructions_button{
    float: right;
}

.main__container{
	display:flex;
	flex-grow: 1;
	overflow-y:auto;
}

.main__header{
	margin-right:20px;
	margin-left:20px;
	text-align:center;
}

.main__body{
	margin-top:20px;
	margin-bottom:20px;
	display:flex;
	flex-direction: column;
	flex-grow:1;
	overflow-y:auto;	
}

.main__body_header{
	text-size:20px;
}

.main__footer{
	margin-top:20px;
	margin-right:20px;
    margin-left:20px;	
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
}

.input_group{
	margin-top:10px;
	margin-bottom:10px;
	display:flex;
	align-items: center;
 	justify-content: center;
	margin-left:20px;
	margin-right:20px;
}

.input_group:hover { 
	padding: 10px 10px 10px 10px;
    background-color: rgb(192, 192, 192);
	border-radius:10px;
	
}

.title{
	font-size:18px;
	text-align: center;
	margin-right:50px;
	margin-left:20px;
	text-transform: uppercase;
	width:300px;
	display:flex;
	justify-content:flex-end;
}

.steps{
	border-style: solid;
    border-width: 0px;
	padding:20px 20px 20px 20px;
	border-radius:10px;
	border-color:gray;
	margin:20px 20px 20px 20px;
}

.footer__buttons{
	display:flex;
	justify-content:space-between;
	margin:20px 20px 20px 20px;
}

.right_column{
    width:300px;
    background-color: rgb(192, 192, 192);
}

.instructions_title{
	font-size:24px;
	border-bottom: 2px solid rgb(220,220,220);
	padding-bottom:10px;
	padding-top:10px;
	padding-left:10px;
	font-color:rgb(30, 33, 51);
}

.instructions_body{
	padding:15px 15px 15px 15px;
	font-color:rgb(30, 33, 51);
	font-size:20px;
}

.save_big_button{
    bottom:0;
    position:fixed;
    width:0;
}
</style>
