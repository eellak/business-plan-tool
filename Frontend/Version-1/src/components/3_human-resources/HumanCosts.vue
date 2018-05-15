<template>
	<div class="humancosts">
			<button class="Instructions humancosts__instructions" @click="showInstructions()">ΟΔΗΓΙΕΣ</button>
            <div id="modal__instructions" class="humancosts__modal">
                <div class="modal-content">
                 <span class="close">&times;</span>
                    <p>Αρχικά πατήστε στο εικονίδιο με δεικτή + έτσι ώστε να εμφανιστεί ο εργαζόμενος και η θέση του. 
                                    Μετά συμπληρώνετε στα αντίστοιχα πεδία την καθαρή αμοιβή και το Bonus. 
                                    Στη συνέχεια επιλέγετε τον τύπο μίσθωσης (Ημερομίσθιο/Μισθός) και απασχόλησης (Πλήρης/Μερική). Επαναλάβετε τα προηγούμενα βήματα μέχρις ότου να συμπληρωθούν οι εργαζόμενοι που υπάρχουν στο Οργανόγραμμα. Τέλος πατήστε υπολογισμό ώστε να εμφανιστεί το συνολικό κόστος.</p>
                </div>
            </div>
            <span class="add__member">
              <div class="add__member-row" v-for="c in costs" v-bind:key="c.id"> 
                <label class="nameLabel">{{ nameLabel }} </label>
                <label class="occupationLabel" >{{ occupationLabel }} </label><br>
                            <div class="same__line">
                  <form class="payment">
                      <input type="text" name="payment" placeholder="ΠΟΣΟ ΑΜΟΙΒΗΣ" v-model="c.payment">
                  </form>
              </div>
              <div class="same__line">
                <form class="bonus">
                  <input type="text" name="bonus" placeholder="BONUS" v-model="c.bonus">
              </form>                    
          </div>


          
          <br><br>

          <form class="typeofpay" action="">
            <label class="radios" for="daypay" style="margin: 150px">
                <input type="radio" class="radio" name="typeofpay" value="daypay" id="daypay" v-model="c.paymentType">Ημερομίσθιο
            </label>



            <label class="radios" for="monthpay" style="margin: 100px">
                <input type="radio" class="radio" name="typeofpay" value="monthpay" id="monthpay" v-model="c.paymentType">Μισθός
            </label>

        </form>

        <hr>


        <form class="xtime" action="" >
            <label class="radios" for="fulltime" style="margin: 150px">
                <input type="radio" class="radio" name="xtime" value="fulltime" id="fulltime" v-model="c.workType">Πλήρης Απασχόληση
            </label>



            <label class="radios" for="partime" style="margin: 20px">
                <input type="radio" class="radio" name="xtime" value="partime" id="partime" v-model = "c.workType">Μερική Απασχόληση
            </label>

        </form>
    </div>
    <div class="yearlycost"><label>ΕΤΗΣΙΟ ΚΟΣΤΟΣ</label></div>
    <label class="calculatedcost">{{ calculatedCostLabel }} </label>
    <button class="Calculate" @click="calculate()">ΥΠΟΛΟΓΙΣΕ</button>

    <br>
    <button name="plus__member" id="plus__member" style="margin-top: -40px" @click="create()"><img src="../../assets/plus-button.png" alt="plus"></button>

</span>
	</div>
</template>

<script>
export default {
	name: 'HumanCosts',
	data() {
		return {
			costs: [],
			/*Workers is the table formed by the orgChart.*/
			workers: [],
			calculatedCostLabel: null,
			nameLabel: null,
			occupationLabel: null,
			workersCounter: -1,
		}
  	},
	methods: {
		create() {
			this.workersCounter++;
			var newCost = { payment:'', bonus:'' , paymentType:'', workType:''};
			this.costs.push(newCost);
			//Test mockups. Will be replaced by names-occupations in workers table.
			this.nameLabel='Workers.name' + ' -'
			this.occupationLabel='Workers.occupation'
			
			/*----Desired functionallity below----*/
			
			/*this.nameLabel = this.workers[this.workersCounter].name + ' -';
			this.occupationLabel = this.workers[this.workersCounter].occupation;*/
			
			/*If the workers table gets empty, hide and disable the "plus__member" button.*/
			/*if (this.workersCounter + 1 === this.workers.length) {
				document.getElementById('plus__member').style.visibility('hidden');
				document.getElementById('plus__member').disabled = true;
			}*/
		},
		showInstructions() {
            // Get the button that opens the modal
			var btn = document.getElementsByClassName("humancosts__instructions");
			var modal = document.getElementById("modal__instructions");
			// Get the <span> element that closes the modal		
			var span = document.getElementsByClassName("close")[0];
			// When the user clicks the button, open the modal 
			modal.style.display = "block"
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
		calculate() {
			var totalCost = 0;
			for (var i=0 ; i < this.costs.length ; i++ ) {

				if (this.costs[i].paymentType === "monthpay")
					totalCost += parseInt(this.costs[i].payment) * 14 + parseInt(this.costs[i].bonus);
				else if (this.costs[i].paymentType === "daypay")
					if (this.costs[i].workType === "fulltime")
						totalCost += parseInt(this.costs[i].payment) * 300 + parseInt(this.costs[i].bonus);
				    else{
					    totalCost += parseInt(this.costs[i].payment) * 150 + parseInt(this.costs[i].bonus);
				}
			this.calculatedCostLabel = totalCost + '€';
			console.log(totalCost);
			}
        }
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
    .humancosts__instructions {
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
    .Instructions {
        margin-left: 75%;
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
    .add__member {
        font-family: "Open Sans";
        margin-left: 40px;
        font-size: 20px;
        color: rgb(61, 65, 90);
    }
    .same__line{
        width: 180px;
        height: 30px;
        margin-left: 160px;
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
    #plus__member{
        margin:20px;
        padding:0px;
        white-space:nowrap;
        width:auto;
        overflow:visible;
        border: 0;
        background: transparent;
    }
    hr{
        margin-top: -4px;
        margin-left: 120px;
        background-color: #f0f0f0;
        width: 600px;
        float: center;
        border-top: 1px solid #8c8b8b; 
    }
    .Calculate{
        margin-left: 75%;
        margin-top: 20px;
        background-color: #299858 ;
        color: white;
        width: 150px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: none;
    }
    .humancosts__modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1; 
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: scroll; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .typeofpay{
    margin-bottom: 15px;
    margin-top: 10px;
    }
    .xtime{
    margin-bottom: 70px;
    margin-top: 0px;
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
    .yearlycost{
        margin-left: 75%;
        margin-top: 100px;
    }
    .calculatedcost {
        margin-left: 79%;
        margin-bottom: -50px;
    }
    .occupationLabel {
        margin-left:0;
        margin-top: -100px;
    }
    .nameLabel{
        margin-left: 20px;
    }
    ::placeholder {
   color:#cbcaca ;
};
</style>
