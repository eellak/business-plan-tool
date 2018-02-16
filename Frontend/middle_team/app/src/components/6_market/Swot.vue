<template>
	<div class="swot">
		<h1> SWOT ANALYSIS </h1>
    <button id="instructions" class="button" @click="showΙnstructions = !showΙnstructions">ΟΔΗΓΙΕΣ</button>
    <div id="hidden_div" class="hiddenDiv" v-if="showΙnstructions">
      <div>
        <p class="first"><strong>Οδηγίες για σωστό σχέδιο Swot Analysis:</strong></p>
        <p>1. Να είναι ρεαλιστικό, σύντομο αλλά και απλό</p>
        <p>2. Να γίνεται σαφής διαχωρισμός της υφιστάμενης και της επιθυμητής κατάστασης για την επιχείρηση</p>
        <p>3. Να είναι συγκεκριμένο</p>
        <p>4. Η ανάλυση πρέπει διαρκώς να έχει ως γνώμονα τον ανταγωνισμό</p>
      </div>
    </div>
    <div class="stef">
      <tr>
        <td>
          <label>
            <strong>Δυνατά Σημεία</strong>
          </label>
          <div class="icons">
            <div class="leftIcon" v-if="adviceIndex[0] > 0">
              <img src="../../assets/previous-button.png" v-on:click="decreaseIndex(0)">
            </div>
            <div class="rightIcon" v-if="adviceIndex[0] < advices[0].length -1">
              <img src="../../assets/next-button.png" v-on:click="increaseIndex(0)">
            </div>
          </div>
          <h4 class="advices" >{{adviceIndex[0]+1}}. {{advices[0][adviceIndex[0]]}}</h4>
          <textarea  v-for="i in spots[0].length" v-bind:key="i" v-model="spots[0][i-1]">spots[0][i-1]</textarea>
          <div class="icons">
            <div class="leftIcon">
              <img  src="../../assets/plus-button.png" v-on:click="addSpot(0)">
            </div>
            <div class="rightIcon">
              <img src="../../assets/minus-button.png" v-on:click="removeSpot(0)">
            </div>
          </div>
        </td>
        <td>
          <label>
            <strong>Αδύνατα Σημεία</strong>
          </label>
          <div class="icons">
            <div class="leftIcon" v-if="adviceIndex[1] > 0">
              <img src="../../assets/previous-button.png" v-on:click="decreaseIndex(1)">
            </div>
            <div class="rightIcon" v-if="adviceIndex[1] < advices[1].length -1">
              <img src="../../assets/next-button.png" v-on:click="increaseIndex(1)">
            </div>
          </div>
          <h4 class="advices" >{{adviceIndex[1]+1}}. {{advices[1][adviceIndex[1]]}}</h4>
          <textarea  v-for="i in spots[1].length" v-bind:key="i" v-model="spots[1][i-1]">spots[1][i-1]</textarea>
          <div class="icons">
            <div class="leftIcon">
              <img  src="../../assets/plus-button.png" v-on:click="addSpot(1)">
            </div>
            <div class="rightIcon">
              <img src="../../assets/minus-button.png" v-on:click="removeSpot(1)">
            </div>
          </div>
        </td>
      </tr>
      <tr class="space"></tr>
      <tr>
        <td>
          <label>
            <strong>Ευκαιρίες</strong>
          </label>
          <div class="icons">
            <div class="leftIcon" v-if="adviceIndex[2] > 0">
              <img src="../../assets/previous-button.png" v-on:click="decreaseIndex(2)">
            </div>
            <div class="rightIcon" v-if="adviceIndex[2] < advices[2].length -1">
              <img src="../../assets/next-button.png" v-on:click="increaseIndex(2)">
            </div>
          </div>
          <h4 class="advices" >{{adviceIndex[2]+1}}. {{advices[2][adviceIndex[2]]}}</h4>
          <textarea  v-for="i in spots[2].length" v-bind:key="i" v-model="spots[2][i-1]">spots[2][i-1]</textarea>
          <div class="icons">
            <div class="leftIcon">
              <img  src="../../assets/plus-button.png" v-on:click="addSpot(2)">
            </div>
            <div class="rightIcon">
              <img src="../../assets/minus-button.png" v-on:click="removeSpot(2)">
            </div>
          </div>
        </td>
        <td>
          <label>
            <strong>Απειλές</strong>
          </label>
          <div class="icons">
            <div class="leftIcon" v-if="adviceIndex[3] > 0">
              <img src="../../assets/previous-button.png" v-on:click="decreaseIndex(3)">
            </div>
            <div class="rightIcon" v-if="adviceIndex[3] < advices[3].length -1">
              <img src="../../assets/next-button.png" v-on:click="increaseIndex(3)">
            </div>
          </div>
          <h4 class="advices" >{{adviceIndex[3]+1}}. {{advices[3][adviceIndex[3]]}}</h4>
          <textarea  v-for="i in spots[3].length" v-bind:key="i" v-model="spots[3][i-1]">spots[3][i-1]</textarea>
          <div class="icons">
            <div class="leftIcon">
              <img  src="../../assets/plus-button.png" v-on:click="addSpot(3)">
            </div>
            <div class="rightIcon">
              <img src="../../assets/minus-button.png" v-on:click="removeSpot(3)">
            </div>
          </div>
        </td>
      </tr>
    </div>
    <button id="confirm" class="button" v-on:click="saveData">ΕΠΙΒΕΒΑΙΩΣΗ</button>
	</div>
</template>

<script>
export default {
	name: 'Swot',
	data() {
		return {
			businessPlanId: 1,
			spots: [[],[],[],[]],
			adviceIndex: [0,0,0,0],
			myObj: null,
			url: 'http://play-trinity.com/theo/bplantool',
      showΙnstructions: false,
      advices: [
				[
					"Ποια είναι τα πλεονεκτήματα?",
					"Ποιο είναι το πλέον ανταγωνιστικό προϊόν υπηρεσία?",
					"Ποιοι είναι οι διαθέσιμοι πόροι που είναι μοναδικοί ή έχουν το μικρότερο συγκριτικά κόστος?",
					"Τι θεωρούν οι τοπικοί οικονομικοί παράγοντες ως ενδογενής δύναμη της περιοχής?"
				],
				  [	
					"Τι θα μπορούσε να βελτιωθεί?",
					"Τι θα έπρεπε να αποφευχθεί?",
					"Τι θεωρούν οι τοπικοί οικονιμικοί παράγοντες ως ενδογενής αδυναμία?"
				],
				[
					"Ποιες είναι οι καλές ευκαιρίες που προβάλλουν?",
					"Ποιες είναι οι ενδιαφέρουσες τάσεις που αφορούν την περιοχή?",
					"Αλλαγές στην τεχνολογία και τις αγορές σε μικρή ή μεγάλη κλίμακα..",
					"Αλλαγές στην κρατική πολιτική στο πεδίο ενδιαφέροντος..",
					"Αλλαγές σε κοινωνικά μοτίβα, πληθυσμιακά προφίλ, αλλαγές τρόπου ζωής.."
				],
				[
					"Ποια εμπόδια εμφανίζονται συνήθως?",
					"Τι κάνουν οι ανταγωνιστές?",
					"Εμφανίζονται αλλαγές στις προδιαγραφές για τα ήδη παρεχόμενα προϊόντα ή υπηρεσίες?",
					"Οι τεχνολογικές αλλαγές απειλούν ή ακυρώνουν τη υφιστάμενη οικονομία της περιοχής?",
					"Υπάρχουν χρηματοδοτικά ή χρηματοοικονομικά προβλήματα?"
				]
			],
		}
	},
	mounted() {
		var that = this;
      	axios.get(this.url +"/api/swot/" + this.businessPlanId)
      	.then(function (response) {
        	var obj = response.data;
			that.myObj = obj;
			if (obj != null) {
				that.$set(that.spots, 0, obj.Strong);
				that.$set(that.spots, 1, obj.Weak);
				that.$set(that.spots, 2, obj.Opportunities);
				that.$set(that.spots, 3, obj.Threats);
			}
          	console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
	},
	methods: {
		saveData: function() {
          if (this.myObj == null) {
            this.myObj = {
              "Strong": this.spots[0],
              "Weak": this.spots[1],
              "Opportunities": this.spots[2],
              "Threats": this.spots[3],
              "BusinessPlanId": this.businessPlanId
            }
            axios.post(this.url +"/api/swot",this.myObj)
            .then(function (response) {
              console.log(response);
              alert("Αποθηκεύτηκε Επιτυχώς!");
            })
            .catch(function (error) {
              console.log(error);
            });
          }
          else {
            axios.put(this.url +"/api/swot/" + this.businessPlanId,this.myObj)
            .then(function (response) {
              console.log(response);
              alert("Αποθηκεύτηκε Επιτυχώς!");
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        },
        equals: function (objectA, objectB) {
          if(JSON.stringify(objectA) === JSON.stringify(objectB)){
            return true;
          }
          return false;
        },
        addSpot: function (index) {
            this.spots[index].push("");
        },
        removeSpot: function (index) {
            this.spots[index].pop();
        },
        increaseIndex: function(x) {
            if (this.advices[x].length > this.adviceIndex[x] + 1) {
                this.$set( this.adviceIndex, x, this.adviceIndex[x] +1);
            }
        },
        decreaseIndex: function(x) {
          if (this.adviceIndex[x] > 0) {
            this.$set( this.adviceIndex, x, this.adviceIndex[x] - 1);
          }
        }
	}
}
</script>

<style scoped>
	.set {
		margin-left: 7px;
		margin-right: 7px;
	}

	.wrapper {
		text-align: center;
	}

	.button {
		float: right;
		margin-right: 20px;
		background-color: rgb(40, 150, 90);
		font-style: italic;
		font-weight: bold;
		font-size: 1em;
		padding: 0.6em;
		cursor: pointer;
		margin-bottom: 1%;
    display: inline;
	}

	h1 {
		text-align: center;
		font-style: italic;
		font-size: 2.5em;
		font-weight: bold;
	}

	strong {
		font-size: 2em;
	}

	.factors {
		font-weight: bold;
		font-size: 1.2em;
	}

	.contenttitles {
		font-style: italic;
		font-size: 1em;
		font-weight: bold;
	}

	.stef {
    width:1300px;
		border-collapse: separate;
		border-spacing: 10px 5px;
    margin: auto;
	}

	.stef tr {
		width: 80%;
	}

	.stef tr td {
		width: 40%;
		margin-left: 10%;
		margin-right: 10%;
		text-align: center;
		padding: 3%;
	}

	.stef tr td label {
		width: 100%;
	}

	.stef tr td textarea {
		width: 100%;
		height: 50px;
	}

	.space {
		height: 50px;
	}

	.hiddenDiv {
		text-align: center;
		margin: 40px;
	}

	.hiddenDiv div {
		text-align: left;
		border: 2px solid black;
		width: 600px;
		margin: auto;
	}

	.first {
		padding-left: 0%;
		text-align: center;
		margin: auto;
	}

	.hiddenDiv div p{
		padding-left: 5%;
	}

	.icons {
		margin-top: 1%;
		width: 100%;
		cursor: pointer;
	}

	.rightIcon {
		display:inline-flex;
		float: right;
	}

	.leftIcon {
		display:inline-block;
		float: left;
	}

	.advices {
		text-align: center;
		margin-top: -1%;
		padding-bottom: 2%;
    height: 30px;
    vertical-align:middle;
    padding-top: 3%;
	}
</style>
