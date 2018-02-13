<template>
	<div class="market-note">
		<h1> ΓΕΝΙΚΕΣ ΠΑΡΑΤΗΡΗΣΕΙΣ</h1>
		<button id="instructions" class="button" v-on:click='show = !show'>ΟΔΗΓΙΕΣ</button>
		<br>
		<div id="hidden_div" class="hiddenDiv" v-if="show">
			<div>
				<p class="first"><strong>Οδηγίες</strong></p>
				<p>1. Δημογραφικά και τμηματοποίηση αγοράς</p>
				<p>2. Περιγραφή αγοράς στόχου</p>
				<p>3. Ανάγκη της αγοράς και περιγραφή καινοτόμου ιδέας που δεν καλύπτεται σήμερα</p>
				<p>4. Ανταγωνισμός</p>
				<p>5. Δυσκολίες εισόδου στην αγορά</p>
				<p>6. Νομοθετικές διατάξεις</p>
			</div>
		</div>
		<textarea class="general" placeholder="Συμπλήρωσε..." v-model="notes"></textarea>
		<br>
		<br>
		<br>
		<button id="confirm" class="button" v-on:click="saveData">ΕΠΙΒΕΒΑΙΩΣΗ</button>
	</div>
</template>

<script>
	export default {
		url: 'http://play-trinity.com/theo/bplantool',
		data() {
			return {
				businessPlanId: 1,
				url: this.$options.url,
        		notes: "",
        		myObj: null,
				show: false
			}
		},
		mounted() {
			var that = this;
            axios.get(this.url +"/api/note/" + this.businessPlanId)
            .then(function (response) {
                var obj =response.data;
                that.myObj = obj;
                if (obj != null) {
                	that.notes = obj.Text;
                }
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
		},
		methods: {
			saveData: function() {
			var tempObj = {
				"BusinessPlanId": this.businessPlanId,
				"Text": this.notes
			}
			if(!this.equals(tempObj,this.myObj)){
				if (this.myObj == null) {
					axios.post(this.url +"/api/note",tempObj)
					.then(function (response) {
						console.log(response);
						alert("Αποθηκεύτηκε Επιτυχώς!");
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				else {
					axios.put(this.url +"/api/note/" + this.businessPlanId,tempObj)
					.then(function (response) {
						console.log(response);
						alert("Αποθηκεύτηκε Επιτυχώς!");
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				this.myObj = tempObj;
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
			}
		}
	}
</script>

<style scoped>
	.market-note {
		padding-bottom: 5%;
	}
	
	.general {
		width: 800px;
		min-height: 400px;
		margin: auto;
		display: block;
		margin-top: 50px;
		font-size: 1.5em;
	}

	.button {
		float: right;
		margin-right: 2%;
		background-color: rgb(40, 150, 90);
		font-style: italic;
		font-weight: bold;
		font-size: 1em;
		padding: 0.6em;
		cursor: pointer;
	}

	h1 {
		text-align: center;
		font-style: italic;
		font-size: 2.5em;
		font-weight: bold;
	}

	.hiddenDiv div {
		text-align: left;
		border: 2px solid black;
		width: 600px;
		margin: auto;
		font-size: 1em;
	}

	.first {
		text-align: center;
	}

	.hiddenDiv div p{
		padding-left: 3%;
		padding-right: 3%;
	}
</style>