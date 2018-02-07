<template>
    <div class="six-general">
        <button id="instructions" class="button" onclick="foo()">ΟΔΗΓΙΕΣ</button>
        <div id="hidden_div" class="hiddenDiv">
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
        <textarea class="general" placeholder="Συμπλήρωσε . . ." v-model="notes"></textarea>
        <button id="confirm" class="button" @click="fetchData">FETCH</button>
    </div>
</template>

<script>
export default {
	name: 'Six-General',
	data() {
		return {
			url: 'localhost:52800',
			businessPlanId: 1,
			notes: "",
			myObj: null,
			test: 'pretty!'
		}
	},
	mounted() {
		var that = this;
        
	},
	methods: {
		fetchData() {
			axios.get(this.url +"/api/note/" + this.businessPlanId)
			.then(function (response) {
				console.log('pretty: ', response)
				var obj =response.data;
				that.myObj = obj;
				if (obj != null) {
				that.notes = obj.Text;
				}
			})
			.catch(function (error) {
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>


.general {
	width: 800px;
	height: 400px;
	margin: auto;
	display: block;
	margin-top: 50px;
}


/* APP */

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
}

h1 {

	text-align: center;
	font-style: italic;
	font-size: 2.5em;
	font-weight: bold;
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


.examtextclass {
	font-size: 0.875em;
	text-align: justify;
	height: 200px;
	width: 400px;
}

.desctextclass {
	font-size: 0.875em;
	height: 200px;
	width: 400px;
	text-align: justify;
}

.hiddenDiv {
	display: none; 
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


</style>
