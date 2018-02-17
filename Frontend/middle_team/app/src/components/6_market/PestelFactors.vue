<template>
	<div class="pestel-factors">
		<h1>ΑΝΑΛΥΣΗ PESTEL</h1>
		<!-- ΠΟΛΙΤΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->
		<FIELDSET class="set">
			<LEGEND class="factors"><strong>ΠΟΛΙΤΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset">
				<TR>
					<TD class="labels">
						<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Παράγοντες που καθορίζουν το μέγεθος στο οποίο επηρεάζεται η δραστηριότητα της επιχείρησης από πολιτικούς παράγοντες." class="desctextclass" id="description1" v-model="descriptions[0]">descriptions[0]</textarea>
					</TD>

					<TD class="labels">
						<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Φορολογία, δασμολογία, ..." class="examtextclass" id="examples1" v-model="examples[0]">examples[0]</textarea>
					</TD>
					<TD>
						<div class="text_container">
							<button id="btn1" class="button" v-on:click='setAdvice(0)'>Συμβουλή!</button>
							<div v-if="showAdvice[0]">
								<p>Ποια είναι η πολιτική κατάσταση της χώρας και πως αυτή μπορεί να επηρεάσει τον κλάδο;</p>
							</div>
						</div>
					</TD>					
				</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<br>
		<!-- ΟΙΚΟΝΟΜΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->
		<FIELDSET class="set">
			<LEGEND class="factors" ><strong>ΟΙΚΟΝΟΜΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset">
			<TR>
				<TD class="labels">
					<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
				</TD>	
				<TD>
					<textarea placeholder="Παράγοντες που καθορίζουν κατά πόσο η οικονομική κατάσταση έχει άμεσο αντίκτυπο στην δραστηριότητα της επιχείρησης." class="desctextclass" id="description2" v-model="descriptions[1]">descriptions[1]</textarea>
				</TD>
				<TD class="labels">
					<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
				</TD>
				<TD>
					<textarea placeholder="Πληθωρισμός, νομισματική πολιτική, άμεσες ξένες επενδύσεις, ..." class="examtextclass" id="examples2" v-model="examples[1]">examples[1]</textarea>
				</TD>
				<TD>
					<div class="text_container">
					<button id="btn1" class="button" v-on:click='setAdvice(1)'>Συμβουλή!</button>
						<div v-if="showAdvice[1]">
							<p>Ποιοι είναι οι επικρατέστεροι οικονομικοί παράγοντες;</p>
						</div>
					</div>
				</TD>
			</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<br>
		<!-- ΚΟΙΝΩΝΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->
		<FIELDSET class="set">
			<LEGEND class="factors" ><strong>ΚΟΙΝΩΝΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset" >
				<TR>
					<TD class="labels">
						<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Παράγοντες που αφορούν το κοινωνικό περιβάλλον της αγοράς στην οποία δραστηριοποιείται η επιχείρηση." class="desctextclass" id="description3" v-model="descriptions[2]">descriptions[2]</textarea>
					</TD>
					<TD class="labels">
						<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Τάσεις της μόδας, δημογραφικά χαρακτηριστικά, ..." class="examtextclass" id="examples3" v-model="examples[2]">examples[2]</textarea>
					</TD>
					<TD>
						<div class="text_container">
							<button id="btn3" class="button" @click="setAdvice(2)">Συμβουλή!</button>
							<div v-if="showAdvice[2]">
								<p> Πόση σημασία έχει η κουλτούρα στον συγκεκριμένο κλάδο και ποιοι παράγοντες καθορίζουν την κουλτούρα αυτή;</p>
							</div>
						</div>
					</TD>
				</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<br>
		<!-- ΤΕΧΝΟΛΟΓΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->
		<FIELDSET class="set">
			<LEGEND class="factors"><strong>ΤΕΧΝΟΛΟΓΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset">
				<TR>
					<TD class="labels">
						<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Παράγοντες που μπορεί να δώσουν τεχνολογικές λύσεις και αλλαγές στον τρόπο που λειτουργεί ο κλάδος της επιχείρησης. Επηρεάζουν είτε θετικά είτε αρνητικά." class="desctextclass" id="description4" v-model="descriptions[3]">descriptions[3]</textarea>
					</TD>
					<TD class="labels">
						<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Aυτοματισμοί, έρευνα και ανάπτυξη, επίγνωση του κόσμου σχετικά με τις τεχνολογικές εξελίξεις, ..." class="examtextclass" id="examples4" v-model="examples[3]">examples[3]</textarea>
					</TD>
					<TD>
						<div class="text_container">
							<button id="btn4" class="button" @click="setAdvice(3)">Συμβουλή!</button>
							<div v-if="showAdvice[3]">
								<p>Ποιες τεχνολογικές καινοτομίες προβλέπεται ότι θα εμφανιστούν και πως αυτές μπορούν να επηρεάσουν τον κλάδο;</p>
							</div>
						</div>
					</TD>
				</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<br>
		<!-- ΝΟΜΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->
		<FIELDSET class="set">
			<LEGEND class="factors" ><strong>ΝΟΜΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset" >
				<TR>
					<TD class="labels">
						<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Παράγοντες που έχουν να κάνουν με το εξωτερικό νομοθετικό πλαίσιο και με τον εσωτερικό κανονισμό της επιχείρησης" class="desctextclass" id="description5" v-model="descriptions[4]">descriptions[4]</textarea>
					</TD>
					<TD class="labels">
						<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Εργασιακή νομοθεσία, προστασία καταναλωτή, προδιαγραφές ποιότητας και ασφάλειας, ..." class="examtextclass" id="examples5" v-model="examples[4]">examples[4]</textarea>
					</TD>
					<TD>
						<div class="text_container" @click="setAdvice(4)">
							<button id="btn5" class="button">Συμβουλή!</button>
							<div v-if="showAdvice[4]">
								<p>Ποια είναι η σχετική νομοθεσία με τον κλάδο;</p>
							</div>
						</div>
					</TD>
				</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<br>
		<!-- ΠΕΡΙΒΑΛΛΟΝΤΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ-->

		<FIELDSET class="set">
			<LEGEND class="factors" ><strong>ΠΕΡΙΒΑΛΛΟΝΤΙΚΟΙ ΠΑΡΑΓΟΝΤΕΣ</strong></LEGEND>
			<TABLE class="contentset" >
				<TR>
					<TD class="labels">
						<LABEL class="contenttitles" for="description">ΠΕΡΙΓΡΑΦΗ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Παράγοντες που καθορίζονται από το περιβάλλον" class="desctextclass" id="description6" v-model="descriptions[5]">descriptions[5]</textarea>
					</TD>
					<TD class="labels">
						<LABEL class="contenttitles" for="examples">ΠΑΡΑΔΕΙΓΜΑΤΑ</LABEL>
					</TD>
					<TD>
						<textarea placeholder="Κλίμα/Καιρός, γεωγραφική θέση, κλιματική αλλαγή, ..." class="examtextclass" id="examples6" v-model="examples[5]">examples[5]</textarea>
					</TD>
					<TD>
						<div class="text_container">
							<button id="btn6" class="button" @click="setAdvice(5)">Συμβουλή!</button>
							<div v-if="showAdvice[5]">
								<p>Ποιες είναι οι περιβαλλοντικές ανησυχίες για τον κλάδο;</p>
							</div>
						</div>
					</TD>
				</TR>
			</TABLE>
		</FIELDSET>
		<br>
		<button id="confirm" class="button" v-on:click="saveData">ΕΠΙΒΕΒΑΙΩΣΗ</button>
		<br>
		<br>
	</div>
</template>

<script>
export default {
	name: 'PestelFactors',
	url: 'http://play-trinity.com/theo/bplantool',
	data() {
		return {
			businessPlanId: 1,
			descriptions: [],
			examples: [],
			myObj: [],
			numberOfFactors: 6,
			url: this.$options.url,
			showAdvice: []
		}
	},
	beforeMount() {
      for(var i=0; i<this.numberOfFactors; i++){
        this.descriptions.push("");
        this.examples.push("");
		this.myObj.push(null);
		this.showAdvice.push(false);
      }
    },
	mounted() {
		var that = this;
      	axios.get(this.url +"/api/factor/" + this.businessPlanId)
      	.then(function (response) {
          	var obj = response.data;
         	for(var i=0; i<obj.length; i++){
            	var id = obj[i].ID;
				if(id <= that.numberOfFactors){
					that.$set(that.myObj,id-1,obj[i]);
					that.$set(that.descriptions, id-1, obj[i].Description);
					that.$set(that.examples, id-1, obj[i].Example);
				}
          	}
          	console.log(response)
      	})
      	.catch(function (error) {
          console.log(error)
      	})
	},
	methods: {
		saveData: function() {
			var saved = false;
			for(var i=0; i<this.numberOfFactors; i++){
				 var tempObj = {
					"ID": i+1,
					"BusinessPlanId": this.businessPlanId,
					"Description": this.descriptions[i],
					"Example": this.examples[i]
				}
				if(!this.equals(tempObj,this.myObj[i])){
					saved = true;
					if (this.myObj[i] == null) {
						axios.post(this.url +"/api/factor", tempObj)
						.then(function (response) {
							console.log(response);
						})
						.catch(function (error) {
							console.log(error);
						});
						}
						else {
						axios.put(this.url +"/api/factor/" + this.businessPlanId, tempObj)
						.then(function (response) {
							console.log(response);
						})
						.catch(function (error) {
							console.log(error);
						});
					}
					this.myObj[i] = tempObj;
				}
			}
			if(saved){
				alert("Αποθηκεύτηκε Επιτυχώς!");
			}
			else {
				alert("Δεν έγινε καμία αλλαγή!");
			}
		},
		equals: function (objectA, objectB) {
			if(JSON.stringify(objectA) === JSON.stringify(objectB)){
				return true;
			}
			return false;
		},
		setAdvice: function(index) {
			this.$set(this.showAdvice,index,!this.showAdvice[index])
			
		}
	}
}
</script>

<style scoped>
	th, td {

		padding: 10px;
	}

	textarea {
		resize: none;
		border-color: rgb(40, 150, 90);
	}

	.hidden>div {
		display:none;
	}

	.visible>div {
		display:block;
	}

	/* APP */

	.set{
		margin-left:7px;
		margin-right:7px;
	}

	div.text_container {
		width: 300px;
		height:200px;
		margin-left: 5px;
		font-size: 1.1em;
	}

	.button {
		margin-right:50%;
		background-color: rgb(40, 150, 90);
		font-style: italic;
		font-weight: bold;
		font-size: 1.2em;
		padding: 0.4em;
		cursor: pointer;
		margin-bottom: 1%;
	}

	main p{
		font-style: italic;
	}

	h1 {
		text-align: center;
		font-style: italic;
		font-size: 2.7em;
		font-weight: bold;
	}

	.factors{
		font-weight: bold;
		font-size: 1.4em;
	}

	.contenttitles{
		font-style: italic;
		font-size: 1.2em;
		font-weight: bold;
	}

	.examtextclass{
		font-size: 1.5em;
		text-align: justify;
		height: 200px;
		width: 400px;
		}

	.desctextclass{
		font-size: 1.5em;
		height: 200px;
		width: 400px;
		text-align: justify;
	}

	#confirm {
		margin-right: 20px;
		float: right;
		background-color: rgb(40, 150, 90);
		font-style: italic;
		font-weight: bold;
	}

	.labels {
		vertical-align: top;
	}

	.text_container p {
		font-size: 1.3em;
	} 
</style>
