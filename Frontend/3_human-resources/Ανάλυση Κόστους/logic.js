var app = new Vue({
	el: 'main',
	data: {
		costs: [],
		/*Workers is the table formed by the orgChart.*/
		workers: [],
		calculatedCostLabel: null,
		nameLabel: null,
		occupationLabel: null,
		workersCounter: -1,
		
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

			   var modal = document.getElementById("myInstructions1");

             // Get the button that opens the modal
				var btn = document.getElementById("Instructions");

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
				    else //if workType is partTime{
					    totalCost += parseInt(this.costs[i].payment) * 150 + parseInt(this.costs[i].bonus);
				}
			this.calculatedCostLabel = totalCost + '€';
			console.log(totalCost);	
			},
		}
	})
