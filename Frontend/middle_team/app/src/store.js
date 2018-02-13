import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const serverUrl = 'http://localhost:3000'
const serverUrl = 'http://play-trinity.com/theo/bplantool/api'

export const store = new Vuex.Store({
	state: {
			//Team 2.1 
			identity: [],
			
			clients: [],
			
			//Team 2.2
			description: [],
			
			//Team 3.1
			managers: [],

			//Team 3.2
			employees: [],

			//Team 3.3
			partners: [],	

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
		// Identity 2.1,  Categories based on FinalJsons.js
		getIdentity: function ({ commit }) {
			axios.get(serverUrl + "/identity")
				.then(function (response)
				{
					commit('GET_IDENTITY', response.data)
				})
				.catch(function (err) {
					console.log("Couldn't fetch identity from the /identity endpoint. ", err)
				})
		},
		createIdentity: function ({ commit }, payload) {
			axios.post(serverUrl + "/identity", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_IDENTITY', payload)
				})
				.catch(function (err) {
					console.log("Couldn't create identity from the /identity endpoint. \n", err)
				})
		},
		editIdentity: function ({ commit }, payload) {
			axios.put(serverUrl + "/identity" + payload.id, payload.identity)
				.then(function (response)
				{
					commit('EDIT_IDENTITY', payload.identity)
				})
				.catch(function (err) {
					console.log("Couldn't edit identity from the /identity endpoint. \n", err)
				})
		},
		deleteIdentity: function ({ commit }, payload) {
			axios.delete(serverUrl + "/identity/" + payload)
				.then(function (response)
				{
					commit('DELETE_IDENTITY', payload)
				})
				.catch(function (err) {
					console.log("Couldn't delete " + payload + " identity from the /identity endpoint. ", err)
				})
		},
		// Clients 2.1
		getClients: function ({ commit }) {
			axios.get(serverUrl + "/client")
				.then(function (response)
				{
					commit('GET_CLIENTS', response.data)
				})
				.catch(function (err) {
					console.log("Couldn't fetch clients from the /client endpoint. ", err)
				})
		},
		createClient: function ({ commit }, payload) {
			axios.post(serverUrl + "/client", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_CLIENT', payload)
				})
				.catch(function (err) {
					console.log("Couldn't create client from the /client endpoint. \n", err)
				})
		},
		editClient: function ({ commit }, payload) {
			axios.put(serverUrl + "/client" + payload.id, payload.client)
				.then(function (response)
				{
					commit('EDIT_CLIENT', payload.client)
				})
				.catch(function (err) {
					console.log("Couldn't edit client from the /client endpoint. \n", err)
				})
		},
		deleteClient: function ({ commit }, payload) {
			axios.delete(serverUrl + "/client/" + payload)
				.then(function (response)
				{
					commit('DELETE_CLIENT', payload)
				})
				.catch(function (err) {
					console.log("Couldn't delete " + payload + " client from the /client endpoint. ", err)
				})
		},
		// Description 2.2
		getDescription: function ({ commit }) {
			axios.get(serverUrl + "/description")
				.then(function (response)
				{
					commit('GET_DESCRIPTION', response.data)
				})
				.catch(function (err) {
					console.log("Couldn't fetch description from the /description endpoint. ", err)
				})
		},
		createDescription: function ({ commit }, payload) {
			axios.post(serverUrl + "/description", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_DESCRIPTION', payload)
				})
				.catch(function (err) {
					console.log("Couldn't create description from the /description endpoint. \n", err)
				})
		},
		editDescription: function ({ commit }, payload) {
			axios.put(serverUrl + "/description" + payload.id, payload.description)
				.then(function (response)
				{
					commit('EDIT_DESCRIPTION', payload.description)
				})
				.catch(function (err) {
					console.log("Couldn't edit description from the /description endpoint. \n", err)
				})
		},
		deleteDescription: function ({ commit }, payload) {
			axios.delete(serverUrl + "/description/" + payload)
				.then(function (response)
				{
					commit('DELETE_DESCRIPTION', payload)
				})
				.catch(function (err) {
					console.log("Couldn't delete " + payload + " description from the /description endpoint. ", err)
				})
		},
		// Managers 3.1
		getManagers: function ({ commit }) {
			axios.get(serverUrl + "/manager")
				.then(function (response)
				{
					commit('GET_MANAGERS', response.data)
				})
				.catch(function (err) {
					console.log("Couldn't fetch managers from the /manager endpoint. ", err)
				})
		},
		createManager: function ({ commit }, payload) {
			axios.post(serverUrl + "/manager", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_MANAGER', payload)
				})
				.catch(function (err) {
					console.log("Couldn't create manager from the /manager endpoint. \n", err)
				})
		},
		editManager: function ({ commit }, payload) {
			axios.put(serverUrl + "/manager" + payload.id, payload.manager)
				.then(function (response)
				{
					commit('EDIT_MANAGER', payload.manager)
				})
				.catch(function (err) {
					console.log("Couldn't edit manager from the /manager endpoint. \n", err)
				})
		},
		deleteManager: function ({ commit }, payload) {
			axios.delete(serverUrl + "/manager/" + payload)
				.then(function (response)
				{
					commit('DELETE_MANAGER', payload)
				})
				.catch(function (err) {
					console.log("Couldn't delete " + payload + " manager from the /manager endpoint. ", err)
				})
		},
		// Employees 3.2
		// Partners 3.3	
		getPartners: function ({ commit }) {
			axios.get(serverUrl + "/partner")
				.then(function (response)
				{
					commit('GET_PARTNERS', response.data)
				})
				.catch(function (err) {
					console.log("Couldn't fetch partners from the /partner endpoint. ", err)
				})
		},
		createPartner: function ({ commit }, payload) {
			axios.post(serverUrl + "/partner", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_PARTNER', payload)
				})
				.catch(function (err) {
					console.log("Couldn't create partner from the /partner endpoint. \n", err)
				})
		},
		editPartner: function ({ commit }, payload) {
			axios.put(serverUrl + "/partner" + payload.id, payload.partner)
				.then(function (response)
				{
					commit('EDIT_PARTNER', payload.partner)
				})
				.catch(function (err) {
					console.log("Couldn't edit partner from the /partner endpoint. \n", err)
				})
		},
		deletePartner: function ({ commit }, payload) {
			axios.delete(serverUrl + "/partner/" + payload)
				.then(function (response)
				{
					commit('DELETE_PARTNER', payload)
				})
				.catch(function (err) {
					console.log("Couldn't delete " + payload + " partner from the /partner endpoint. ", err)
				})
		},
		// Employee Salaries 3.4
		// Faculties 4.1
		// Equipment 4.2
		// RunningCost 4.3
		// RunningCost - FacultyCosts 4.3
		// RunningCost - EquipmentCosts 4.3
		// Products 5
		// SWOT 6.1
		// PESTEL - Factors 6.2
		// Notes 6.3
		// Strategy 7.1
		// MarketingActions 7.2
		// StartActions 8.1
		// FunctionCost 8.2
		// FunctionCost - Functions 8.2
		// Deadspots 8.3
		// Links 9
		// Conclusion 1.1
	},

	mutations:{

		// Identity 2.1,  Categories based on FinalJsons.js
		GET_IDENTITY: (state, payload) => {
			state.identity = payload
		},		
		CREATE_IDENTITY: (state, payload) => {
			state.identity.pop()
			state.identity.push(payload)
		},
		EDIT_IDENTITY: (state, payload) => {
			state.identity.push(payload)
		},
		DELETE_IDENTITY: (state, payload) => {
			console.log("payload: ", payload)
			console.log('state.identity: ', state.identity)
			for (var i=0, l = state.identity.length; i < l; i++) {
				if (state.identity[i].ID === payload) {
					console.log("id: ", ID)
					state.identity.splice(i, 1)
				}
			}
		},

		// Clients 2.1
		GET_CLIENTS: (state, payload) => {
			state.clients = payload
		},		
		CREATE_CLIENT: (state, payload) => {
			state.clients.pop()
			state.clients.push(payload)
		},
		EDIT_CLIENT: (state, payload) => {
			state.clients.push(payload)
		},
		DELETE_CLIENT: (state, payload) => {
			console.log("payload: ", payload)
			console.log('state.clients: ', state.clients)
			for (var i=0, l = state.clients.length; i < l; i++) {
				if (state.clients[i].ID === payload) {
					console.log("id: ", ID)
					state.clients.splice(i, 1)
				}
			}
		},

		// Description 2.2
		GET_DESCRIPTION: (state, payload) => {
			state.description = payload
		},		
		CREATE_DESCRIPTION: (state, payload) => {
			state.description.pop()
			state.description.push(payload)
		},
		EDIT_DESCRIPTION: (state, payload) => {
			state.description.push(payload)
		},
		DELETE_DESCRIPTION: (state, payload) => {
			console.log("payload: ", payload)
			console.log('state.description: ', state.description)
			for (var i=0, l = state.description.length; i < l; i++) {
				if (state.description[i].ID === payload) {
					console.log("id: ", ID)
					state.description.splice(i, 1)
				}
			}
		},

		// Managers 3.1
		GET_MANAGERS: (state, payload) => {
			state.managers = payload
		},		
		CREATE_MANAGER: (state, payload) => {
			state.managers.pop()
			state.managers.push(payload)
		},
		EDIT_MANAGER: (state, payload) => {
			state.managers.push(payload)
		},
		DELETE_MANAGER: (state, payload) => {
			console.log("payload: ", payload)
			console.log('state.managers: ', state.managers)
			for (var i=0, l = state.managers.length; i < l; i++) {
				if (state.managers[i].ID === payload) {
					console.log("id: ", ID)
					state.managers.splice(i, 1)
				}
			}
		},

		// Employees 3.2

		// Partners 3.3	
		GET_PARTNERS: (state, payload) => {
			state.partners = payload
		},		
		CREATE_PARTNER: (state, payload) => {
			state.partners.pop()
			state.partners.push(payload)
		},
		EDIT_PARTNER: (state, payload) => {
			state.partners.push(payload)
		},
		DELETE_PARTNER: (state, payload) => {
			console.log("payload: ", payload)
			console.log('state.partners: ', state.partners)
			for (var i=0, l = state.partners.length; i < l; i++) {
				if (state.partners[i].ID === payload) {
					console.log("id: ", ID)
					state.partners.splice(i, 1)
				}
			}
		},
		// Employee Salaries 3.4
		// Faculties 4.1
		// Equipment 4.2
		// RunningCost 4.3
		// RunningCost - FacultyCosts 4.3
		// RunningCost - EquipmentCosts 4.3
		// Products 5
		// SWOT 6.1
		// PESTEL - Factors 6.2
		// Notes 6.3
		// Strategy 7.1
		// MarketingActions 7.2
		// StartActions 8.1
		// FunctionCost 8.2
		// FunctionCost - Functions 8.2
		// Deadspots 8.3
		// Links 9
		// Conclusion 1.1
	},

	getters:{
		// Identity 2.1,  Categories based on FinalJsons.js
		identity: state => {
			return state.identity
		},
		// Clients 2.1
		clients: state => {
			return state.clients
		},
		// Description 2.2
		description: state => {
			return state.description
		},
		// Managers 3.1
		managers: state => {
			return state.managers
		},
		// Employees 3.2
		employees: state => {
			return state.employees
		},
		// Partners 3.3	
		partners: state => {
			return state.partners
		},
		// Employee Salaries 3.4
		// Faculties 4.1
		// Equipment 4.2
		// RunningCost 4.3
		// RunningCost - FacultyCosts 4.3
		// RunningCost - EquipmentCosts 4.3
		// Products 5
		// SWOT 6.1
		// PESTEL - Factors 6.2
		// Notes 6.3
		// Strategy 7.1
		// MarketingActions 7.2
		// StartActions 8.1
		// FunctionCost 8.2
		// FunctionCost - Functions 8.2
		// Deadspots 8.3
		// Links 9
		// Conclusion 1.1
	}
})
