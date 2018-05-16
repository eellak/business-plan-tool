<template>
	<div class="main__container">


		<div class="main__body">
		<div class="main__header">
            <h1>ΠΕΡΙΓΡΑΦΗ</h1>
        </div>


        <div style="height:500px;"><el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea2">
</el-input></div>





		
<div class="main__footer">

			
			<div class="footer__buttons">
            <button class="button" @click="validateForm()">BACK</button>
            <button class="button" @click="validateForm()">NEXT</button>
			</div>
		</div>


    	</div>
		
		<div class="right_column">
        			<div class="button" style="margin:20px 20px 100px 60px;">SAVE</div>
			<div class="instructions_title">ΟΔΗΓΙΕΣ</div>
			<div class="instructions_body">Αρχικά κλικάρετε το συμβολο + για να εμφανιστούν τα πεδία για το πρώτο διοικητικό μέλος. Συμπληρώνετε τα απαραίτητα όνομα και επίθετο στα αντίστοιχα πεδία, ενώ στο τρίτο πεδίο επιλέγετε την θέση που κατέχει το άτομο στην εταιρεία (οι επιλογές θα εμπλουτιστούν). Χρησιμοποιείτε το συμβολάκι της αλυσίδας ώστε να προσθέσετε, εάν επιθυμείτε, το LinkedIn του κάθε μέλους (to be implemented). Επαναλαμβάνετε τα προηγούμενα βήματα μέχρι να συμπληρώσετε όλες τις θέσεις διοίκησης και τέλος πατάτε το κουμπί αποθήκευσης ώστε να αποθηκευτούν όλες οι αλλαγές σας. </div>
		</div>
	 </div>

	 
</template>

<script>
export default {
	name: 'Description',
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
		myFunction() {
            var x = document.getElementById("myDIV");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          },
		validateForm() {
		var x = document.forms["Perigrafi_Form"]["perigrafi_text"].value;
		if (x == "") {
			alert("Name must be filled out");
        return false;
		}
		else{
			alert(x);
		}
	}

	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css.css"
</style>
