<template>
	<div class="managers">
		<button class="managers__instructions" @click="showInstructions()">ΟΔΗΓΙΕΣ</button>
		<div id="modal__instructions" class="managers__modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<p>Αρχικά κλικάρετε το συμβολο + για να εμφανιστούν τα πεδία για το πρώτο διοικητικό μέλος. Συμπληρώνετε τα απαραίτητα όνομα και επίθετο στα αντίστοιχα πεδία,
				ενώ στο τρίτο πεδίο επιλέγετε την θέση που κατέχει το άτομο στην εταιρεία (οι επιλογές θα εμπλουτιστούν). Χρησιμοποιείτε το συμβολάκι της αλυσίδας ώστε να προσθέσετε, εάν επιθυμείτε, το LinkedIn του κάθε μέλους (to be implemented).
				Επαναλαμβάνετε τα προηγούμενα βήματα μέχρι να συμπληρώσετε όλες τις θέσεις διοίκησης και τέλος πατάτε το κουμπί αποθήκευσης ώστε να αποθηκευτούν όλες οι αλλαγές σας.</p>
			</div>
		</div>
		<div class="managers__block">
			<label>Προσθέστε Μέλος</label><br>
			<div class="managers__row" v-for="m in managers" v-bind:key="m.id">
				<div class="managers__information">
						<input type="text" name="fname" placeholder="ΟΝΟΜΑ" v-model="m.Name">
				</div>
				<div class="managers__information">
						<input type="text" name="sname" placeholder="ΕΠΙΘΕΤΟ" v-model="m.Surname">
				</div>
				<div class="managers__information">
						<!-- <input type="text" name="sname" placeholder="ΘΕΣΗ ΕΡΓΑΣΙΑΣ" > -->
						<select v-model="m.Job">
							<option v-for="o in jobOptions" v-bind:key="o"> {{ o }} </option>
						</select>
				</div>
				<div class="managers__information">
					<img src="../../assets/link-button.png" alt="link">
				</div><br>
			</div>
			<button class="managers__add" @click="create()">
				<img src="../../assets/plus-button.png" alt="plus">
			</button>
		</div>
		<div class="managers__bottomlayout">
		<button class="managers__save" @click="save()">ΑΠΟΘΗΚΕΥΣΗ</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Managers',
	data() {
		return {
			managers: this.$store.getters.managers,
			jobOptions: ['CEO', 'CTO', 'CFO'],
		}
  	},
	methods: {
		create() {
			var newManager = { name: '', surName: '', job: '', linkedIn: '' }
			this.managers.push(newManager)
		},
		save() {
			console.log('Οι managers που αποθηκεύτηκαν είναι:')
			console.log(this.managers)
			this.$store.commit('')
		},
		showInstructions() {
			var btn = document.getElementsByClassName("managers__instructions");
			var modal = document.getElementById("modal__instructions");
			var span = document.getElementsByClassName("close")[0];

			modal.style.display = "block";
			
			span.onclick = function() {
				modal.style.display = "none";
			}

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
.managers__instructions {
	margin-left: 1400px;
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
.managers__save {
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
.managers__block {
	font-family: "Open Sans";
	margin-left: 40px;
	font-size: 30px;
	color: rgb(61, 65, 90);
	
}
.managers__information{
	width: 180px;
	height: 30px;
	margin: 20px;
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
	
}
.managers__add{
	margin:20px;
	padding:0px;
	white-space:nowrap;
	width:auto;
	overflow:visible;
	border: 0;
	background: transparent;
}
.managers__bottomlayout{
	margin-top: 525px;
	background-color:rgb(70, 70, 70);
}


::placeholder { 
	color:    #cbcaca;
}

.managers__modal {
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
