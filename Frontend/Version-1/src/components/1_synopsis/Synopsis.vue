<template>
	<div class="synopsis">
		

		<section class="top_card synopsis__instructions">
            <button class="foot__back" @click="myFunction()">ΟΔΗΓΙΕΣ</button>
        </section>

        <div id="myDIV">
          <p>Η σύνοψη αποτελεί την πρώτη επαφή με το προτεινόμενο σχέδιο, γι' αυτό είναι ένα από τα σημαντικότερα μέρη του επιχειρηματικού σχεδίου. Προτείνεται να αποτελείται από μικρές και απλές προτάσεις και να ακολουθεί τη δομή που έχει συνολικά το επιχειρηματικό σχέδιο. Το μέγεθος της σύνοψης πρέπει να είναι περίπου στο 5-10% του συνολικού σχεδίου και σε καμία περίπτωση να μην ξεπερνάει τη μία σελίδα. Η συγκεκριμένη ενότητα συμπληρώνεται στο τέλος</p>
        </div>

        <form name="Sinopsis_Form synopsis__block">
          <section class="my_card">
            <div class="my_card_head"><p> Σύνοψη του επιχειρηματικού σχεδίου:</p></div>
            <textarea id="location" name="sinopsis_text" cols="120" rows="30"></textarea>
		  </section>
        </form>

	
	<section class="top_card synopsis__save">
            <button class="foot__back" @click="validateForm()">Αποθήκευση</button>
    </section>
	</div>
</template>

<script>
export default {
	name: 'Synopsis',
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
		var x = document.forms["Sinopsis_Form"]["sinopsis_text"].value;
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


<style scoped>
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
        #myDIV {
            width: 94%;
            padding: 50px 0;
            text-align: center;
            background-color: rgb(217, 217, 217);
            margin-top: 20px;
            margin-left:25px;
            display: none;
            font-color:rgb(40, 44, 63);
          }
</style>
