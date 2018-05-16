<template>
			<div class="main__body">

			<div class="main__header">
				<h1>Εσωτερική Ανάλυση</h1>
			</div>




			<div class="group">
				<div class="title_of_group">Μέτοχοι της επιχείρησης</div>
                <div id="input" style="flex-grow:1;margin-right:40px;margin-top:10px;">
					<el-input class="group-input" placeholder="Βαλαωρίτου 15" v-model="shareholder"></el-input>
				</div>
                <button class="red_inside_information" @click="addShareholder()">+Προσθέστε μέτοχο</button>
			</div>
			




		<div class="main__footer">
			
				
				<div class="footer__buttons">
				<!-- <button class="button">BACK</button> -->
				<!-- <button class="button">NEXT</button> -->
				</div>
			</div>


			</div>
			
</template>
<script>
export default {
	name: 'InternalAnalysis',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name,
			shareholder: ''
		}
	},
	mounted() {
		// Here you can write code you want to run,
        // when this component is loaded.
        
				  
	},
	methods: {
		// Here you can write your functions.
		addShareholder() { 
			var shareholderInput = document.getElementsByClassName("group-input")[0];

			var divClone = shareholderInput.cloneNode(true); // the true is for deep cloning

			shareholderInput.appendChild(divClone);
			// divClone = shareholderInput.cloneNode(true);
		}
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

.group{
	margin-top:10px;
	margin-bottom:10px;
	display:flex;

    flex-direction: column;
	margin-left:20px;
	margin-right:20px;
}

.input_group:hover { 
	padding: 10px 10px 10px 10px;
    background-color: rgb(238,238,238);
	border-radius:10px;
	
}

.title{
	font-size:18px;
	text-align: center;
	margin-right:50px;
	margin-left:20px;
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








.title_of_group{
    margin-left:35px;
    margin-top:10px;
    font-size:18px;
}

.group:hover{
	padding: 10px 10px 10px 10px;
    background-color: rgb(238,238,238);
	border-radius:10px;
}

.red_inside_information{
    margin-top:35px;
    margin-bottom: 20px;
    text-align: center;
    font-size:16px;
    color:red;
}


</style>
