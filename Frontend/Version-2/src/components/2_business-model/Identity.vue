<template>
	<div class="main__container">

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


		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
			<div class="title">ΣΤΕΛΕΧΗ</div>
			<div style="flex-grow:1;margin-right:40px;"><el-input placeholder="Κοιλαρίδου Όλγα" v-model="input"></el-input></div>
    	</div>		<div class="input_group">
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
		
	

	 </div>

	 
</template>
<script>
export default {
	name: 'Identity',
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
				
					var start = 1900;
					var end = new Date().getFullYear();
					var options = "";
					for(var year = start ; year <=end; year++){
					  options += "<option>"+ year +"</option>";
					}
					document.getElementById("year").innerHTML = options;
				  
	},
	methods: {
		// Here you can write your functions.
		foo() {
		},
		myFunction() {
  					var x = document.getElementById("myDIV");
  					if (x.style.display === "block") {
  						x.style.display = "none";
  					} else {
  						x.style.display = "block";
  					}
  				},
		validateForm() {
		var loc = document.forms["Tautotita_form"]["location"].value;
		var m = document.getElementById("month");
		var mon = e.options[m.selectedIndex].value;
		var y = document.getElementById("year");
		var year = e.options[m.selectedIndex].value;
		var l = document.getElementById("legal type");
		var leg = e.options[m.selectedIndex].value;
		var typ = document.forms["Tautotita_form"]["bus_type"].value;
		var cus = document.forms["Tautotita_form"]["customers"].value;
		if (loc == "") {
			alert("Name must be filled out");
        return false;
		}
		else{
			alert(mon);
		}
	}

	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css.css"
</style>
