<template>
	 <div class="strategy">

							<button id="button1" class="button1" v-on:click="instr">ΟΔΗΓΙΕΣ</button>

									<div id="hidden_div" class="hiddenDiv">
												<div id="odigies">
															<p class="first">Βοηθητικές οδηγίες για τη σωστή περιγραφή ενεργειών marketing:</p>
															<p>1. Αναλυτική περιγραφή την ενέργειας marketing.</p>
															<p>2. Σωστός και σαφής υπολογισμός του κόστους κάθε ενέργειας.</p>
															<p>3. Σε περίπτωση επανάληψης, αναφέρετε αναλυτικά κάθε πότε θα συμβαίνει η ενέργεια. </p>
															<p>4. Το συνολικό κόστος υπάρχει σε περίπτωση επανάληψης. Τότε πρέπει να γίνει υπολογισμός του συνολικού κόστους της ενέργειας ανάλογα με την εκάστοτε επανάληψη.</p>
												</div>
									</div>

							<form class="strategy_form">
									<label>1. Ποιά ενέργεια θα πράξετε για την προώθηση του προιόντος/υπηρεσίας σας;<br>
											<input id="input" type="text" name="energeia" placeholder="ΕΝΕΡΓΕΙΑ" v-model="mytitle"></label>
									<br><br>
								 <div class="half">
										 <label>2. Ποίος έιναι ο αναμενόμενος χρόνος υλοποίησής;
												 <input id="input" type="text" name="xronos_ulipoihshs" placeholder="ΧΡΟΝΟΣ ΥΛΟΠΟΙΗΣΗΣ" v-model="myimplementationTime">
										</label>
											<br><br>
													<label>4. Ποιό είναι το προβλεπόμενο κόστος υλοποίησης;
												 <input  id="input" type="text" name="kostos_ulopoisis" placeholder="ΚΟΣΤΟΣ ΥΛΟΠΟΙΗΣΗΣ" v-model="myimplementationCost">
											</label>

										 </div>


									<div class="half">
											<label>3. Πόσο συχνά θα επαναλμβάνεται αυτή η ενέργεια;
															<input id="input" type="text" name="syxnotita" placeholder="ΣΥΧΝΟΤΗΤΑ" v-model="myfrequency">
															</label>
											<br><br>
											<label>5. Ποιό είναι το προβλεπόμενο συνολικό κόστος;
													<input  id="input" type="text" name="sunoliko_kostos" placeholder="ΣΥΝΟΛΙΚΟ ΚΟΣΤΟΣ(επανάληψη)" v-model="mytotalCost">
											</label>

									</div>
									<button id="Submitbtn" v-on:click="postData">Save Data</button>


							</form>

					</main>
			</div>
</template>

<script>
 import { mapGetters } from 'vuex'
 import { mapMutations } from 'vuex'
 export default {
	name: 'Strategy',
	data() {
		return {
        mypromotion: '',
        mycontribution: '',
        mymarketEntry: '',
        mypublicRelations: '',
        myavoid: '',
        mytitle:'',
        myimplementationTime:'',
        myfrequency: '',
        myimplementationCost: '',
        mytotalCost:''
      }
			// title: this.$options.name
		},

   mounted(){
    var y = document.getElementById("hidden_div");
    y.style.display='none';
   },
   methods: {
    saveData(){
      axios.post(`http://play-trinity.com/theo/bplantool/api/strategy`,{
                            Promotion: this.mypromotion,
                            Contribution: this.mycontribution,
                            MarketEntry: this.mymarketEntry,
                            PublicRelations: this.mypublicRelations,
                            Avoid: this.myavoid })
                  .then(function (response) {
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                    });
      },

    postData(){
          axios.post(`http://play-trinity.com/theo/bplantool/api/marketingaction`, {
                              Title: this.title,
                              ImplementationTime: this.myimplementationTime,
                              Frequency: this.myfrequency,
                              ImplementationCost: this.myimplementationCost,
                              TotalCost: this.mytotalCost })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
      },

   instr(){
    var x = document.getElementById("hidden_div");
    var w = document.getElementById("button1");
    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.backgroundColor ='#12492a';
    } else {
        x.style.display = "none";
        w.style.backgroundColor ='#299858';
    }
    },


  },
 }
</script>

<style scoped>
 body {
		display: flex;
		flex-direction: column;
		justify-content: initial;
		align-items: stretch;
		min-height: 100vh;
 }


 /* HEADER */

 .head {
		background-color: rgb(30, 33, 51);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		;
 }

 .head__logo {
		margin-left: 20px;
 }

 .head__export {
		color: #fff;
		display: flex;
		margin-right: 100px;
		align-items: center;
 }


 .head__avatar {
		height: 70px;
		width: 70px;
		border-radius: 50%;
		margin-right: 20px;
 }

 .head__export p {
		margin-left: 5px;
		font-size: 20px;
 }

 .head__export i {}


 /* FOOTER */

 footer {
		background-color: rgb(203, 202, 202);
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
 }

 .foot__back {
		margin-right: 30px;
		background-color: rgb(41, 152, 88);
		color: white;
		width: 100px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-style: none;
 }

 .foot__next {
		margin-left: 30px;
		background-color: rgb(41, 152, 88);
		color: white;
		width: 100px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-style: none;
 }

 .foot__pagination {
		font-size: 20px;
		font-weight: 600;
		color: black;
 }


 main {
		flex-grow: 1;
 }

 .main_container {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		align-items: stretch;
 }

 nav {
		background-color: rgb(30, 33, 51);
		width: 350px;
 }


 /* SECTIONS MENU */

 .sections-menu {}

 .sections-menu ul {
		list-style: none;
		margin: 0;
 }

 .sections-menu ul li {
		padding: 15px;
		position: relative;
		width: 350px;
		border-top: 1px solid black;
		background-color: rgb(30, 33, 51);
 }

 .sections-menu ul li {
		border-right: 5px solid rgb(61, 65, 90);
 }

 .sections-menu ul ul {
		opacity: 0;
		position: absolute;
		visibility: hidden;
		left: 100%;
		top: -2%;
		background-color: rgb(40, 44, 63);
 }

 .sections-menu ul ul li {
		background-color: rgb(79, 84, 115);
		width: 250px;
 }

 .sections-menu ul li:hover ul {
		opacity: 1;
		visibility: visible;
 }

 .sections-menu ul li a {
		color: white;
 }
 /* QUESTIONS */

 /* @font-face {
		font-family: OpenSans;
		/* src: url(sansation_bold.woff);
		font-weight: bold;
 } */
 .basic_button {
						background-color: rgb(24, 146, 105);
						width: 100px;
						height: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
				}

 .strategy_form {
				width: 90%;
				float: left;
				margin: auto;
				padding-left: 50px;
				padding-top: 10px;
				color : #1e2133;
 }

 input[type=text] {
		width: 70%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
 }


 .half {
		width :45%;
		float: left;
	margin: 0;

 }
 .button1 {
		background-color: #299858;
		float: right;
		color: white;
		border: #299858;
		margin-top: 30px;
		margin-right: 50px;
		padding: 15px;
		text-align: center;
		font-size: 20px;
		width: 15%;

 }


 .hiddenDiv div {
		padding: 10px;
		margin: 50px;
		margin-bottom: 25px;
	border: 2px solid black;
	width: 600px;
 }

 .first {
		padding-left: 0%;
		text-decoration-line: underline;
	text-align: center;
	margin: auto;
 }

 .odigies {
		text-align: left;
		padding-left: 5%;
 }

 #Submitbtn {
	background-color: #299858;
	border: #299858;
	padding: 1%;
	color: white;
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 20px;
	width: 15%;

 }
</style>
