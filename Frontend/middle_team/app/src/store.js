import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
		//Team 2.1 
		identity: [{
			"Id": 1,
			"BusinessPlanId": 1,
			"Name": "ΑΠΘ",
			"Date": 20180108,
			"LegalForm": "Α.Ε.",
			"OrderOfBusiness": "Πανεπιστημιο",
		}],
		
		clients: [
			{"ID": 1, "IdentityId": 1, "Name": "client 1"},
			{"ID": 2, "IdentityId": 1, "Name": "client 2"},
			{"ID": 3, "IdentityId": 1, "Name": "client 3"}
		],
		
		//Team 2.2
		description: [{
				"ID": 1,
				"IdentityId": 1,
				"Text": "Μεγαλο κειμενο για την περιγραφη της επιχειρησης. Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit. Sed gravida eget diam nec rhoncus. Phasellus luctus \
						 aliquam arcu, eget finibus tellus blandit eget. Nunc porta orci dolor, eu placerat \
						 quam consequat ut. Sed nibh mauris, dictum et feugiat vitae, facilisis elementum \
						 leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent \
						 taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \
						 Maecenas sodales scelerisque tristique."
		}],
		
		//Team 3.1
		managers: [
			{"ID": 1, "BusinessPlanId": 1, "Name": "manager name1", "Surname": "manager surname 1", "Job": "job 1", "LinkedIn": "linked 1"},
			{"ID": 2, "BusinessPlanId": 1, "Name": "manager name2", "Surname": "manager surname 2", "Job": "job 1", "LinkedIn": "linked 2"},
			{"ID": 3, "BusinessPlanId": 1, "Name": "manager name3", "Surname": "manager surname 3", "Job": "job 2", "LinkedIn": "linked 3"}
		],

		//Team 3.2
		employees: [
			{"ID": 1, "BusinessPlanId": 1, "Job": "job 3"},
			{"ID": 2, "BusinessPlanId": 1, "Job": "job 3"},
			{"ID": 3, "BusinessPlanId": 1, "Job": "job 4"},
			{"ID": 4, "BusinessPlanId": 1, "Job": "job 5"},
			{"ID": 5, "BusinessPlanId": 1, "Job": "job 5"}
		],

		//Team 3.3
		partners: [
			{"ID": 1, "BusinessPlanId": 1, "Name": "partner name 1", "SurName": "partner surname 1", "Expertise": "expertise 1", "LinkedIn": "linked 1", "From": 20181101, "Until": 20180120, "Duties": "duty 1"},
			{"ID": 2, "BusinessPlanId": 1, "Name": "partner name 2", "SurName": "partner surname 1", "Expertise": "expertise 2", "LinkedIn": "linked 2", "From": 20180329, "Until": 20180815, "Duties": "duty 2"}
		],	

		//Team 3.4
		employeeSalaries: [
			{"EmployeeID": 1, "Salary": 1500, "Bonus": 100, "Employment_type": "employ type 1"},
			{"EmployeeID": 2, "Salary": 1500, "Bonus": 100, "Employment_type": "employ type 1"},
			{"EmployeeID": 3, "Salary": 3000, "Bonus": 200, "Employment_type": "employ type 2"},
			{"EmployeeID": 4, "Salary": 5000, "Bonus": 300, "Employment_type": "employ type 1"},
			{"EmployeeID": 5, "Salary": 5000, "Bonus": 300, "Employment_type": "employ type 1"},
		],

		//Team 4.1
		faculties: [
			{"ID": 1, "BusinessPlanId": 1, "Adress": "address 1", "Usage": "usage 1", "M2": 200, "Ownership_type": "type 1", "Start_date": 20180203},
			{"ID": 2, "BusinessPlanId": 1, "Adress": "address 2", "Usage": "usage 2", "M2": 3000, "Ownership_type": "type 1", "Start_date": 20180110},
			{"ID": 3, "BusinessPlanId": 1, "Adress": "address 3", "Usage": "usage 3", "M2": 1500, "Ownership_type": "type 2", "Start_date": 20180310},
		],

		//Team 4.2
		equipment: [ // Firsthand is flag, 0:false, 1:true
			{"ID": 1, "BusinessPlanId": 1, "EquipType": "equipment type 1", "Address": "address 1", "Division": "div 1", "Firsthand": 1, "Acquisition_date": 20180110},
			{"ID": 2, "BusinessPlanId": 1, "EquipType": "equipment type 1", "Address": "address 1", "Division": "div 1", "Firsthand": 0, "Acquisition_date": 20180201},
			{"ID": 3, "BusinessPlanId": 1, "EquipType": "equipment type 2", "Address": "address 2", "Division": "div 2", "Firsthand": 0, "Acquisition_date": 20180315}
		],

		//Team 4.3
		runningCost: [{
				"FacultyCosts": [{"FacultyId": 1, "Cost": 55252},
								 {"FacultyId": 2, "Cost": 321354},
								 {"FacultyId": 3, "Cost": 654321}],
				"EquipmentCosts": [{"EquipmentId": 1, "Cost": 321321},
								   {"EquipmentId": 2, "Cost": 123456},
								   {"EquipmentId": 3, "Cost": 3321}],
				"FacultyExpenses": 1030927,
				"EquipmentExpenses": 448098
		}], 

		//Team 5.1, 5.2, 5.3 (for teams wanting only some attributes, appropriate consumers must be made)
		products: [ //ProductType: 0=false=service, 1=true=product
			{"ID": 1, "BusinessPlanId": 1, "ProductType": false, "Name": "service 1", "Directed_to": "dir1", "Innovation_factor": "fac1", "Technology": "tec1", "License": "lic1", "Competition": "comp1", "Price": 100, "Description": "desc1", "Copyright": "cpr1", "Certificate": null, "ProductCost": 30, "NumProduct": 1, "PercentageIncome": 50},
			{"ID": 2, "BusinessPlanId": 1, "ProductType": true, "Name": "product 1", "Directed_to": "dir1", "Innovation_factor": "fac2", "Technology": "tec1", "License": "lic2", "Competition": "comp2", "Price": 200, "Description": "desc2", "Copyright": "cpr2", "Certificate": null, "ProductCost": 60, "NumProduct": 2, "PercentageIncome": 50},
			{"ID": 3, "BusinessPlanId": 1, "ProductType": true, "Name": "product 2", "Directed_to": "dir2", "Innovation_factor": "fac1", "Technology": "tec2", "License": "lic3", "Competition": "comp3", "Price": 150, "Description": "desc3", "Copyright": "cpr3", "Certificate": null, "ProductCost": 50, "NumProduct": 3, "PercentageIncome": 50}
		],

		//Team 6.1
		swot: [{"Strong": ["strong 1", "strong 2", "strong 3"],
				 "Weak": ["weak 1", "weak 2", "weak 3"],
				 "Opportunities": ["opportunity 1", "opportunity 2", "opportunity 3"],
				 "Threats": ["threat 1", "threat 2", "threat 3"],
				 "BusinessPlanId": 1
		}],

		//Team 6.2, PESTEL
		factors: [
			{"ID": 1, "BusinessPlanId": 1, "Description": "pestel desc 1", "Example": "example 1"},
			{"ID": 2, "BusinessPlanId": 1, "Description": "pestel desc 2", "Example": "example 2"},
			{"ID": 3, "BusinessPlanId": 1, "Description": "pestel desc 3", "Example": "example 3"}
		],

		//Team 6.3
		note: [{ 
			"BusinessPlanId": 1,
			"Text": "note 1 Lorem ipsum dolor sit amet, \
					 consectetur adipiscing elit. Sed gravida eget diam nec rhoncus. Phasellus luctus \
					 aliquam arcu, eget finibus tellus blandit eget. Nunc porta orci dolor, eu placerat \
					 quam consequat ut. Sed nibh mauris, dictum et feugiat vitae, facilisis elementum \
					 leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent \
					 taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \
					 Maecenas sodales scelerisque tristique."
		}],

		//Team 7.1
		strategy: [{
			"BusinessPlanId": 1,
			"Promotion": "promo 1",
			"Contribution": "contribution 1",
			"MarketEntry": "entry 1",
			"PublicRelations": "relation 1",
			"Avoid": "avoidance 1"
		}],

		//Team 7.2
		marketingActions: [
			{"ID": 1, "BusinessPlanId": 1, "Title": "marketing action 1", "ImplementationTime": 12351, "Frequency": 32, "ImplementationCost": 15000, "TotalCost": 30000},
			{"ID": 2, "BusinessPlanId": 1, "Title": "marketing action 2", "ImplementationTime": 4634, "Frequency": 10, "ImplementationCost": 5000, "TotalCost": 20000},
			{"ID": 3, "BusinessPlanId": 1, "Title": "marketing action 3", "ImplementationTime": 876, "Frequency": 2, "ImplementationCost": 1000, "TotalCost": 3000}
		],

		//Team 8.1
		startActions: [
			{"ID": 1, "BusinessPlanId": 1, "Name": "action 1", "ActionCost": 100},    
			{"ID": 2, "BusinessPlanId": 1, "Name": "action 2", "ActionCost": 200},
			{"ID": 3, "BusinessPlanId": 1, "Name": "action 3", "ActionCost": 300},
		],

		//Team 8.2
		functionCost: [{
			"Functions": [
				{"ID": 1, "BusinessPlanId": 1, "Name": "start function 1", "FunctionCost": 59592},
				{"ID": 2, "BusinessPlanId": 3, "Name": "start function 2", "FunctionCost": 292},
				{"ID": 3, "BusinessPlanId": 2, "Name": "start function 3", "FunctionCost": 59}
			],
			"FunctionsTotalCost": 59943
		}],

		//Team 8.3
		deadspots: [
			{"ProductID": 1, "BusinessPlanId": 1, "Spot": "dead1"},
			{"ProductID": 2, "BusinessPlanId": 1, "Spot": "dead2"},
			{"ProductID": 3, "BusinessPlanId": 1, "Spot": "dead3"},
		],

		// Team 9 Gantt chart ???

		// Appendix: Upload functionality
		links: [
			{"ID": 1, "BusinessPlanId": 1, "URL": "url 1", "Title": "title 1", "Section": "section 1"},
			{"ID": 2, "BusinessPlanId": 1, "URL": "url 2", "Title": "title 2", "Section": "section 2"},
			{"ID": 3, "BusinessPlanId": 1, "URL": "url 3", "Title": "title 3", "Section": "section 3"},
		],

		//Team 1.1
		conclusion: [{
				"BussinesPlanId": 1,
				"Text": "conclusion 1 Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit. Sed gravida eget diam nec rhoncus. Phasellus luctus \
						 aliquam arcu, eget finibus tellus blandit eget. Nunc porta orci dolor, eu placerat \
						 quam consequat ut. Sed nibh mauris, dictum et feugiat vitae, facilisis elementum \
						 leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent \
						 taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. \
						 Maecenas sodales scelerisque tristique."
		}]
	},
	actions: {
	},

	mutations:{
	},

	getters:{
	}
})
