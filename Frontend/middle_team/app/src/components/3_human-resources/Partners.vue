<template>
	<div class="partners">
		<button class="partners__instructions" @click="showInstructions()">ΟΔΗΓΙΕΣ</button>
		<div id="modal__instructions" class="partners__modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<p>Αρχικά, κλικάρετε το συμβολο + για να εμφανιστούν τα πεδία για τον πρώτο εξωτερικό συνεργάτη. Συμπληρώνετε τα απαραίτητα όνομα και επίθετο στα αντίστοιχα πεδία,
				ενώ στο τρίτο συμπληρώνετε την ειδίκευση του συνεργάτη. Χρησιμοποιείτε το συμβολάκι της αλυσίδας ώστε να προσθέσετε το LinkedIn του. Έπειτα, προσθέτετε το διάστημα (από-έως) για το οποίο αυτός θα απασχολείται.
				Τελος συμπληρώνετε επιγραμματικά τα καθήκοντα του στο τελευταίο πεδίο. Επαναλαμβάνετε τα προηγούμενα βήματα μέχρι να συμπληρώσετε όλους τους εξ. συνεργάτες και τέλος πατάτε το κουμπί αποθήκευσης ώστε να αποθηκευτούν όλες οι αλλαγές σας.</p>
			</div>
		</div>
		<div class="partners__block">
			<label>1. Προσθέστε Συνεργάτη</label><br>
			<div class="partners__row" v-for="p in externalPartners" v-bind:key="p.id">
				<div class="partners__details">
					<input type="text" placeholder="ΟΝΟΜΑ" v-model="p.name">
				</div>
				<div class="partners__details">
					<input type="text" placeholder="ΕΠΙΘΕΤΟ" v-model="p.surName">
				</div>
				<div class="partners__details">
						<input type="text" placeholder="ΕΞΕΙΔΙΚΕΥΣΗ" v-model="p.expertise">
				</div>
				<div class="partners__details">
					<img src="../../assets/link-button.png" alt="link">
				</div><br>
				<div class="partners__details">
					<label class="from" style="margin: 70px;font-size: 20px">ΑΠΟ</label>
				</div>
				<div class="partners__details">
					<form class="monthstart" style="margin-left: 20px">
						<input type="text" placeholder="ΗΜΕΡΟΜΗΝΙΑ" v-model="p.from">
					</form>
				</div><br>
				<div class="partners__details">
					<label class="until" style="margin: 70px;font-size: 20px">ΕΩΣ</label>
				</div>
				<div class="partners__details">
					<form class="monthend" style="margin-left: 20px">
						<input type="text" placeholder="ΗΜΕΡΟΜΗΝΙΑ" v-model="p.until">
					</form>
				</div><br>
				<div class="duty">
					<form class="dutyof" > 
						<input type="text" placeholder="ΚΑΘΗΚΟΝΤΑ" v-model="p.duties">
					</form>
				</div>
			</div>
			<button class="partners__add" @click="create()">
                <img src="../../assets/plus-button.png" alt="plus">
            </button>
		</div>
        <div class="partners__bottomlayout">
        <button class="partners__save" @click="save()">ΑΠΟΘΗΚΕΥΣΗ</button>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Partners',
	data() {
		return {
			externalPartners: []
		}
  	},
	methods: {
	  create() {
        var newPartner = { name: '', surName: '', expertise: '', linkedIn: '', from: '', until: '', duties: '' }
        this.externalPartners.push(newPartner)
      },
      save() {
        console.log('Οι εξωτερικοί συνεργάτες που αποθηκεύτηκαν είναι:')
        console.log(this.externalPartners)
      },
      showInstructions() {
        // Get the button that opens the modal
        var btn = document.getElementsByClassName("partners__instructions");

        // Get the modal
        var modal = document.getElementById("modal__instructions");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
      
            modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    	},
	}
}
</script>

<style scoped>
        /* BASIC ELEMENTS */
.basic_button {
    background-color: rgb(24, 146, 105);
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.partners__instructions {
    margin-left: 850px;
    margin-top: 20px;
    background-color: rgb(41, 152, 88);
    color: white;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    }
.partners__save {
	margin-left: 850px;
	margin-top: 20px;
	background-color: rgb(41, 152, 88);
	color: white;
	width: 100px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-style: none;
}
.partners__row{
    -webkit-margin-after: 50px;
}
.partners__bottomlayout{
	margin-top: 525px;
	background-color:rgb(70, 70, 70);
}
.partners__block {
    font-family: "Open Sans";
     margin-left: 40px;
    font-size: 30px;
     color: rgb(61, 65, 90);      
}
.partners__details{
            
    width: 180px;
    height: 30px;
    margin: 10px;
    border: 1px solid transparent;
    display: inline-block;
}
        
input[type=text], select {
    width: 110%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;        
}
.partners__add{
    margin:20px;
    padding:0px;
    white-space:nowrap;
    width:auto;
    overflow:visible;
    border: 0;
    background: transparent;
}
.dutyof{
    text-align: center;
    margin-left: 60px;
    width:500px;
    height: 20px;
}
    ::placeholder { 
   color:    #cbcaca;
}

    .partners__modal {
    display: none;
    position: fixed;
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: scroll;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

/* The Close Button */
.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

</style>
