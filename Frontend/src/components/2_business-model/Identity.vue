<template>
	<div class="identity">
		<section class="top_card tautotita__instructions">
            <button class="foot__back" @click="myFunction()">ΟΔΗΓΙΕΣ</button>
        </section>

  			<div id="myDIV">
          <p>Συμπληρώστε τα χαρακτηριστικά ταυτότητας του επιχειρηματικού μοντέλου.</p>
  			</div>	
		<form id="form" name="Tautotita_form" class="tautotita__block">
			<section class="my_card">
        <div class="my_card_head"> 1.Τόπος Εγκατάστασης </div>
				<div class="my_card_body"> <input type="text" name="location" id="location" value="" placeholder="Θεσσαλονίκη" style="width: 80%; font-size:15pt;"></div>
			</section>

			<section class="my_card">
				<div class="my_card_head">2.Περίοδος έναρξης δραστηριότητας για νέες επιχειρήσεις/ έτος ίδρυσης για υφιστάμενες επιχειρήσεις<br></div>
				<div class="styled-select slate">
				<select name="month" id="month">
					<option value="January">Ιανουάριος</option>
					<option value="February">Φεβρουάριος</option>
					<option value="March">Μάρτιος</option>
					<option value="April">Απρίλιος</option>
					<option value="May">Μάιος</option>
					<option value="June">Ιούνιος</option>
					<option value="July">Ιούλιος</option>
					<option value="August">Αύγουστος</option>
					<option value="September">Σεπτέμβριος</option>
					<option value="October">Οκτώβριος</option>
					<option value="November">Νοέμβριος</option>
					<option value="December">Δεκέμβριος</option>
				</select>
        </div>

        <div class="styled-select slate">
				<select id="year" name="year"></select></div>

			</section>

			<section class="my_card">
				<div class="my_card_head">3.Νομική Μορφή<br></div>
					<div class="my_card_body">
						<div class="styled-select slate" name="legal_type">
							<select name="legal type" id="legal type">
							<option value="Single">Ατομική</option>
							<option value="ΟΕ">ΟΕ</option>
							<option value="Cooperative">Συνεταιριστική</option>
							<option value="Anonimus">Ανώνυμη</option>
							</select>
						</div>
					</div>
			</section>

			<section class="my_card" name="bus_type">
					<div class="my_card_head"><legend>4. Τύπος Επιχείρησης</legend></div>

						<div>
							<input type="checkbox" id="productive" name="productive" value="productive">
							<label for="productive">Παραγωγική</label>
						</div>
						<div>
							<input type="checkbox" id="retail" name="retail" value="retail">
							<label for="retail">Εμπορική επιχειρήση λιανικής</label>
						</div>
						<div>
							<input type="checkbox" id="wholesale" name="wholesale" value="wholesale">
							<label for="wholesale">Εμπορική επιχειρήση χονδρικής</label>
						</div>
						<div>
							<input type="checkbox" id="service" name="service" value="service">
							<label for="service">Παροχή υπηρεσιών</label>
						</div>
						<div>
							<input type="checkbox" id="franchise" name="franchise" value="franchise">
							<label for="franchise">Franchise</label>
						</div>
						<div>
							<input type="checkbox" id="distributor" name="distributor" value="distributor">
							<label for="distributor">Εμπορικός Αντιπρόσωπος</label>
						</div>
						<div>
							<input type="checkbox" id="other1" name="other1" value="other1">
							<label for="other1">Άλλο</label>
							<input type="text" id="otherValue1" name="otherVal1">
						</div>

			</section>

			<section class="my_card" name="customers">
				<div class="my_card_head"><legend>5.Πελάτες</legend></div>

						<div>
							<input type="checkbox" id="private individual" name="private individual" value="private individual">
							<label for="private individual">Ιδιώτες</label>
						</div>
						<div>
							<input type="checkbox" id="companies" name="companies" value="companies">
							<label for="companies">Επιχειρήσεις</label>
						</div>
						<div>
							  <input type="checkbox" id="other2" name="other2" value="other2">
							  <label for="other2">Άλλο</label>
							  <input type="text" id="otherValue2" name="otherVal2">
						</div>

			</section>

		</form>

		<section class="top_card tautotita__save">
            <button class="foot__back" @click="validateForm()">Αποθήκευση</button>
    	</section>
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

<style scoped>
          #myDIV {
            width: 94%;
            padding: 50px 0;
            text-align: center;
            background-color: rgb(217, 217, 217);
            margin-top: 20px;
			margin-left: 25px;
            display: none;
            font-color:rgb(40, 44, 63);
          }
/*.................new...............*/
.top_card{
    border-radius: 5px;
    padding: 20px;
    margin-left: 800px;
}

.my_card{
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}

.my_card_head {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    font-size: 15pt;
}		
/*.................new...............*/
.welcome{
  display: flex;
  align-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15pt;
  padding-left: 150px;
  padding-top: 200px;
}


.top_card{
    border-radius: 5px;
    padding: 5px;
    margin-left: 80%;
    margin-right: 20%;
}

.my_card{
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    margin-left: 50px;
}

.my_card_head {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    font-size: 15pt;
}


.my_card_body {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
}


.my_card p {
    text-align: justify;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5em;
    color: rgb(40, 44, 63);
}

.my_card_body {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
}


.styled-select {
   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
   height: 29px;
   overflow: hidden;
   width: 240px;
}

.styled-select select {
   background: transparent;
   border: none;
   font-size: 14px;
   height: 29px;
   padding: 5px; /* If you add too much padding here, the options won't show in IE */
   width: 268px;
}

.styled-select.slate {
   background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;
   height: 34px;
   width: 240px;
}

.styled-select.slate select {
   border: 1px solid #ccc;
   font-size: 16px;
   height: 34px;
   width: 268px;
}  
</style>
