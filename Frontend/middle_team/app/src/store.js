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
			employeeSalaries: [],

			//Team 4.1
			faculties: [],

			//Team 4.2
			equipment: [],

			//Team 4.3
			runningCost: [], 

			//Team 5.1, 5.2, 5.3 (for teams wanting only some attributes, appropriate consumers must be made)
			products: [],

			//Team 6.1
			swot: [],

			//Team 6.2, PESTEL
			factors: [],

			//Team 6.3
			note: [],

			//Team 7.1
			strategy: [],

			//Team 7.2
			marketingActions: [],

			//Team 8.1
			startActions: [],

			//Team 8.2
			functionCost: [],

			//Team 8.3
			deadspots: [],

			// Team 9 Gantt chart ???

			// Appendix: Upload functionality
			links: [],

			//Team 1.1
			conclusion: []
	},

	actions: {
		// Identity 2.1,  Categories based on FinalJsons.js
		getIdentities: function ({ commit }) {
			axios.get(serverUrl + "/identity")
				.then(function (response)
				{
					commit('GET_IDENTITIES', response.data)
				})
				.catch(function (err) {
					console.log(err)
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
					console.log(err)
				})
		},	
		deleteIdentity: function ({ commit }, payload) {
			axios.delete(serverUrl + "/identity/" + payload)
			.then(function (response)
			{
				commit('DELETE_IDENTITY', payload)
			})
			.catch(function (err) {
				console.log(err)
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
					console.log(err)
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
					console.log(err)
				})
		},	
		deleteClient: function ({ commit }, payload) {
			axios.delete(serverUrl + "/client/" + payload)
			.then(function (response)
			{
				commit('DELETE_CLIENT', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Description 2.2
		getDescriptions: function ({ commit }) {
			axios.get(serverUrl + "/description")
				.then(function (response)
				{
					commit('GET_DESCRIPTIONS', response.data)
				})
				.catch(function (err) {
					console.log(err)
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
					console.log(err)
				})
		},	
		deleteDescription: function ({ commit }, payload) {
			axios.delete(serverUrl + "/description/" + payload)
			.then(function (response)
			{
				commit('DELETE_DESCRIPTION', payload)
			})
			.catch(function (err) {
				console.log(err)
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
					console.log(err)
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
					console.log(err)
				})
		},	
		deleteManager: function ({ commit }, payload) {
			axios.delete(serverUrl + "/manager/" + payload)
			.then(function (response)
			{
				commit('DELETE_MANAGER', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Employees 3.2
		getEmployees: function ({ commit }) {
			axios.get(serverUrl + "/employee")
				.then(function (response)
				{
					commit('GET_EMPLOYEES', response.data)
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		createEmployee: function ({ commit }, payload) {
			axios.post(serverUrl + "/employee", payload)
			.then(function (response)
			{
				console.log("payload of create: ", payload)
				commit('CREATE_EMPLOYEE', payload)
				})
				.catch(function (err) {
					console.log(err)
				})
		},	
		deleteEmployee: function ({ commit }, payload) {
			axios.delete(serverUrl + "/employee/" + payload)
			.then(function (response)
			{
				commit('DELETE_EMPLOYEE', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Partners 3.3	
		getPartners: function ({ commit }) {
			axios.get(serverUrl + "/partner")
			.then(function (response)
			{
				commit('GET_PARTNERS', response.data)
			})
			.catch(function (err) {
				console.log(err)
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
					console.log(err)					
				})
		},
		deletePartner: function ({ commit }, payload) {
			axios.delete(serverUrl + "/partner/" + payload)
			.then(function (response)
			{
				commit('DELETE_PARTNER', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Employee Salaries 3.4
		getEmployeeSalaries: function ({ commit }) {
			axios.get(serverUrl + "/employeeSalary")
			.then(function (response)
			{
				commit('GET_EMPLOYEE_SALARIES', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createEmployeeSalary: function ({ commit }, payload) {
			axios.post(serverUrl + "/employeeSalary", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_EMPLOYEE_SALARY', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteEmployeeSalary: function ({ commit }, payload) {
			axios.delete(serverUrl + "/employeeSalary/" + payload)
			.then(function (response)
			{
				commit('DELETE_EMPLOYEE_SALARY', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Faculties 4.1
		getFaculties: function ({ commit }) {
			axios.get(serverUrl + "/faculty")
			.then(function (response)
			{
				commit('GET_FACULTIES', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createFaculty: function ({ commit }, payload) {
			axios.post(serverUrl + "/faculty", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_FACULTY', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteFaculty: function ({ commit }, payload) {
			axios.delete(serverUrl + "/faculty/" + payload)
			.then(function (response)
			{
				commit('DELETE_FACULTY', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Equipment 4.2
		getEquipment: function ({ commit }) {
			axios.get(serverUrl + "/equipment")
			.then(function (response)
			{
				commit('GET_EQUIPMENT', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createEquipment: function ({ commit }, payload) {
			axios.post(serverUrl + "/equipment", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_EQUIPMENT', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteEquipment: function ({ commit }, payload) {
			axios.delete(serverUrl + "/equipment/" + payload)
			.then(function (response)
			{
				commit('DELETE_EQUIPMENT', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// RunningCost 4.3
		getRunningCosts: function ({ commit }) {
			axios.get(serverUrl + "/runningCost")
			.then(function (response)
			{
				commit('GET_RUNNING_COSTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createRunningCost: function ({ commit }, payload) {
			axios.post(serverUrl + "/runningCost", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_RUNNING_COST', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteRunningCost: function ({ commit }, payload) {
			axios.delete(serverUrl + "/runningCost/" + payload)
			.then(function (response)
			{
				commit('DELETE_RUNNING_COST', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// RunningCost - FacultyCosts 4.3
		getFacultyCosts: function ({ commit }) {
			axios.get(serverUrl + "/facultyCost")
			.then(function (response)
			{
				commit('GET_FACULTY_COSTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createFacultyCost: function ({ commit }, payload) {
			axios.post(serverUrl + "/facultyCost", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_FACULTY_COST', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteFacultyCost: function ({ commit }, payload) {
			axios.delete(serverUrl + "/facultyCost/" + payload)
			.then(function (response)
			{
				commit('DELETE_FACULTY_COST', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// RunningCost - EquipmentCosts 4.3
		getEquipmentCosts: function ({ commit }) {
			axios.get(serverUrl + "/equipmentCost")
			.then(function (response)
			{
				commit('GET_EQUIPMENT_COSTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createEquipmentCost: function ({ commit }, payload) {
			axios.post(serverUrl + "/equipmentCost", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_EQUIPMENT_COST', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteEquipmentCost: function ({ commit }, payload) {
			axios.delete(serverUrl + "/equipmentCost/" + payload)
			.then(function (response)
			{
				commit('DELETE_EQUIPMENT_COST', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Products 5
		getProducts: function ({ commit }) {
			axios.get(serverUrl + "/product")
			.then(function (response)
			{
				commit('GET_PRODUCTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createProduct: function ({ commit }, payload) {
			axios.post(serverUrl + "/product", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_PRODUCT', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteProduct: function ({ commit }, payload) {
			axios.delete(serverUrl + "/product/" + payload)
			.then(function (response)
			{
				commit('DELETE_PRODUCT', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},


		// SWOT 6.1
		getSWOTS: function ({ commit }) {
			axios.get(serverUrl + "/swot")
			.then(function (response)
			{
				commit('GET_SWOTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createSWOT: function ({ commit }, payload) {
			axios.post(serverUrl + "/swot", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_SWOT', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		putSWOT: function ({ commit }, payload) {
			axios.put(serverUrl + "/swot/1", payload)
			.then(function (response)
			{
					console.log("payload of put: ", payload)
					commit('PUT_SWOT', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteSWOT: function ({ commit }, payload) {
			axios.delete(serverUrl + "/swot/" + payload)
			.then(function (response)
			{
				commit('DELETE_SWOT', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// PESTEL - Factors 6.2
		getFactors: function ({ commit }) {
			axios.get(serverUrl + "/factor")
			.then(function (response)
			{
				commit('GET_FACTORS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createFactor: function ({ commit }, payload) {
			axios.post(serverUrl + "/factor", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_FACTOR', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteFactor: function ({ commit }, payload) {
			axios.delete(serverUrl + "/factor/" + payload)
			.then(function (response)
			{
				commit('DELETE_FACTOR', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Note 6.3
		getNotes: function ({ commit }) {
			axios.get(serverUrl + "/note")
			.then(function (response)
			{
				commit('GET_NOTES', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createNote: function ({ commit }, payload) {
			axios.post(serverUrl + "/note", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_NOTE', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteNote: function ({ commit }, payload) {
			axios.delete(serverUrl + "/note/" + payload)
			.then(function (response)
			{
				commit('DELETE_NOTE', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Strategy 7.1
		getStrategies: function ({ commit }) {
			axios.get(serverUrl + "/strategy")
			.then(function (response)
			{
				commit('GET_STRATEGIES', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createStrategy: function ({ commit }, payload) {
			axios.post(serverUrl + "/strategy", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_STRATEGY', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteStrategy: function ({ commit }, payload) {
			axios.delete(serverUrl + "/strategy/" + payload)
			.then(function (response)
			{
				commit('DELETE_STRATEGY', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// MarketingActions 7.2
		getMarketingActions: function ({ commit }) {
			axios.get(serverUrl + "/marketingAction")
			.then(function (response)
			{
				commit('GET_MARKETING_ACTIONS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createMarketingAction: function ({ commit }, payload) {
			axios.post(serverUrl + "/marketingAction", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_MARKETING_ACTION', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteMarketingAction: function ({ commit }, payload) {
			axios.delete(serverUrl + "/marketingAction/" + payload)
			.then(function (response)
			{
				commit('DELETE_MARKETING_ACTION', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// StartActions 8.1
		getStartActions: function ({ commit }) {
			axios.get(serverUrl + "/startAction")
			.then(function (response)
			{
				commit('GET_START_ACTIONS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createStartAction: function ({ commit }, payload) {
			axios.post(serverUrl + "/startAction", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_START_ACTION', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteStartAction: function ({ commit }, payload) {
			axios.delete(serverUrl + "/startAction/" + payload)
			.then(function (response)
			{
				commit('DELETE_START_ACTION', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// FunctionCost 8.2
		getFunctionCosts: function ({ commit }) {
			axios.get(serverUrl + "/functionCost")
			.then(function (response)
			{
				commit('GET_FUNCTION_COSTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createFunctionCost: function ({ commit }, payload) {
			axios.post(serverUrl + "/functionCost", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_FUNCTION_COST', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteFunctionCost: function ({ commit }, payload) {
			axios.delete(serverUrl + "/functionCost/" + payload)
			.then(function (response)
			{
				commit('DELETE_FUNCTION_COST', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// FunctionCost - Functions 8.2
		getFunctions: function ({ commit }) {
			axios.get(serverUrl + "/function")
			.then(function (response)
			{
				commit('GET_FUNCTIONS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createFunction: function ({ commit }, payload) {
			axios.post(serverUrl + "/function", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_FUNCTION', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteFunction: function ({ commit }, payload) {
			axios.delete(serverUrl + "/function/" + payload)
			.then(function (response)
			{
				commit('DELETE_FUNCTION', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Deadspots 8.3
		getDeadspots: function ({ commit }) {
			axios.get(serverUrl + "/deadspot")
			.then(function (response)
			{
				commit('GET_DEADSPOTS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createDeadspot: function ({ commit }, payload) {
			axios.post(serverUrl + "/deadspot", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_DEADSPOT', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteDeadspot: function ({ commit }, payload) {
			axios.delete(serverUrl + "/deadspot/" + payload)
			.then(function (response)
			{
				commit('DELETE_DEADSPOT', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Links 9
		getLinks: function ({ commit }) {
			axios.get(serverUrl + "/link")
			.then(function (response)
			{
				commit('GET_LINKS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createLink: function ({ commit }, payload) {
			axios.post(serverUrl + "/link", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_LINK', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteLink: function ({ commit }, payload) {
			axios.delete(serverUrl + "/link/" + payload)
			.then(function (response)
			{
				commit('DELETE_LINK', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},

		// Conclusion 1.1
		getConclusions: function ({ commit }) {
			axios.get(serverUrl + "/conclusion")
			.then(function (response)
			{
				commit('GET_CONCLUSIONS', response.data)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
		createConclusion: function ({ commit }, payload) {
			axios.post(serverUrl + "/conclusion", payload)
			.then(function (response)
			{
					console.log("payload of create: ", payload)
					commit('CREATE_CONCLUSION', payload)
				})
				.catch(function (err) {
					console.log(err)					
				})
		},
		deleteConclusion: function ({ commit }, payload) {
			axios.delete(serverUrl + "/conclusion/" + payload)
			.then(function (response)
			{
				commit('DELETE_CONCLUSION', payload)
			})
			.catch(function (err) {
				console.log(err)
			})
		},
	},

	mutations:{
		// Identity 2.1,  Categories based on FinalJsons.js
		GET_IDENTITIES: (state, payload) => {
			state.identity = payload
		},		
		CREATE_IDENTITY: (state, payload) => {
			state.identity.push(payload)
		},
		DELETE_IDENTITY: (state, payload) => {
			for (var i=0, l = state.identity.length; i < l; i++) {
				if (state.identity[i].ID === payload) {
					state.identity.splice(i, 1)
				}
			}
		},
		
		// Clients 2.1
		GET_CLIENTS: (state, payload) => {
			state.clients = payload
		},		
		CREATE_CLIENT: (state, payload) => {
			state.clients.push(payload)
		},
		DELETE_CLIENT: (state, payload) => {
			for (var i=0, l = state.clients.length; i < l; i++) {
				if (state.clients[i].ID === payload) {
					state.clients.splice(i, 1)
				}
			}
		},

		// Description 2.2
		GET_DESCRIPTIONS: (state, payload) => {
			state.description = payload
		},		
		CREATE_DESCRIPTION: (state, payload) => {
			state.description.push(payload)
		},
		DELETE_DESCRIPTION: (state, payload) => {
			for (var i=0, l = state.description.length; i < l; i++) {
				if (state.description[i].ID === payload) {
					state.description.splice(i, 1)
				}
			}
		},

		// Managers 3.1
		GET_MANAGERS: (state, payload) => {
			state.managers = payload
		},		
		CREATE_MANAGER: (state, payload) => {
			// state.managers.pop()
			state.managers.push(payload)
		},
		DELETE_MANAGER: (state, payload) => {
			//console.log("payload: ", payload)
			//console.log('state.managers: ', state.managers)
			for (var i=0, l = state.managers.length; i < l; i++) {
				if (state.managers[i].ID === payload) {
					//console.log("id: ", state.managers[i].ID)
					state.managers.splice(i, 1)
				}
			}
		},

		// Employees 3.2
		GET_EMPLOYEES: (state, payload) => {
			state.employees = payload
		},		
		CREATE_EMPLOYEE: (state, payload) => {
			state.employees.push(payload)
		},
		DELETE_EMPLOYEE: (state, payload) => {
			for (var i=0, l = state.employees.length; i < l; i++) {
				if (state.employees[i].ID === payload) {
					state.employees.splice(i, 1)
				}
			}
		},

		// Partners 3.3	
		GET_PARTNERS: (state, payload) => {
			state.partners = payload
		},		
		CREATE_PARTNER: (state, payload) => {
			state.partners.push(payload)
		},
		DELETE_PARTNER: (state, payload) => {
			for (var i=0, l = state.partners.length; i < l; i++) {
				if (state.partners[i].ID === payload) {
					state.partners.splice(i, 1)
				}
			}
		},

		// Employee Salaries 3.4
		GET_EMPLOYEE_SALARIES: (state, payload) => {
			state.employeeSalaries = payload
		},		
		CREATE_EMPLOYEE_SALARY: (state, payload) => {
			state.employeeSalaries.push(payload)
		},
		DELETE_EMPLOYEE_SALARY: (state, payload) => {
			for (var i=0, l = state.employeeSalaries.length; i < l; i++) {
				if (state.employeeSalaries[i].ID === payload) {
					state.employeeSalaries.splice(i, 1)
				}
			}
		},

		// Faculties 4.1
		GET_FACULTIES: (state, payload) => {
			state.faculties = payload
		},		
		CREATE_FACULTY: (state, payload) => {
			state.faculties.push(payload)
		},
		DELETE_FACULTY: (state, payload) => {
			for (var i=0, l = state.faculties.length; i < l; i++) {
				if (state.faculties[i].ID === payload) {
					state.faculties.splice(i, 1)
				}
			}
		},

		// Equipment 4.2
		GET_EQUIPMENT: (state, payload) => {
			state.equipment = payload
		},		
		CREATE_EQUIPMENT: (state, payload) => {
			state.equipment.push(payload)
		},
		DELETE_EQUIPMENT: (state, payload) => {
			for (var i=0, l = state.equipment.length; i < l; i++) {
				if (state.equipment[i].ID === payload) {
					state.equipment.splice(i, 1)
				}
			}
		},

		// RunningCost 4.3
		GET_RUNNING_COSTS: (state, payload) => {
			state.runningCost = payload
		},		
		CREATE_RUNNING_COST: (state, payload) => {
			state.runningCost.push(payload)
		},
		DELETE_RUNNING_COST: (state, payload) => {
			for (var i=0, l = state.runningCost.length; i < l; i++) {
				if (state.runningCost[i].ID === payload) {
					state.runningCost.splice(i, 1)
				}
			}
		},

		// RunningCost - FacultyCosts 4.3
		GET_FACULTY_COSTS: (state, payload) => {
			state.runningCost[0].FacultyCosts = payload
		},		
		CREATE_FACULTY_COST: (state, payload) => {
			state.runningCost[0].FacultyCosts.push(payload)
		},
		DELETE_FACULTY_COST: (state, payload) => {
			for (var i=0, l = state.runningCost[0].FacultyCosts.length; i < l; i++) {
				if (state.runningCost[0].FacultyCosts[i].ID === payload) {
					state.runningCost[0].FacultyCosts.splice(i, 1)
				}
			}
		},

		// RunningCost - EquipmentCosts 4.3
		GET_EQUIPMENT_COSTS: (state, payload) => {
			state.runningCost[0].EquipmentCosts = payload
		},		
		CREATE_EQUIPMENT_COST: (state, payload) => {
			state.runningCost[0].EquipmentCosts.push(payload)
		},
		DELETE_EQUIPMENT_COST: (state, payload) => {
			for (var i=0, l = state.runningCost[0].EquipmentCosts.length; i < l; i++) {
				if (state.runningCost[0].EquipmentCosts[i].ID === payload) {
					state.runningCost[0].EquipmentCosts.splice(i, 1)
				}
			}
		},

		// Products 5
		GET_PRODUCTS: (state, payload) => {
			state.products = payload
		},		
		CREATE_PRODUCT: (state, payload) => {
			state.products.push(payload)
		},
		DELETE_PRODUCT: (state, payload) => {
			for (var i=0, l = state.products.length; i < l; i++) {
				if (state.products[i].ID === payload) {
					state.products.splice(i, 1)
				}
			}
		},

		// SWOT 6.1
		GET_SWOTS: (state, payload) => {
			state.swot = payload
		},		
		CREATE_SWOT: (state, payload) => {
			state.swot.push(payload)
		},
		PUT_SWOT: (state, payload) => {
			state.swot[0].Strong = payload.Strong
			state.swot[0].Weak = payload.Weak
			state.swot[0].Opportunities = payload.Opportunities
			state.swot[0].Threats = payload.Threats
		},
		DELETE_SWOT: (state, payload) => {
			for (var i=0, l = state.swot.length; i < l; i++) {
				if (state.swot[i].ID === payload) {
					state.swot.splice(i, 1)
				}
			}
		},

		// PESTEL - Factors 6.2
		GET_FACTORS: (state, payload) => {
			state.factors = payload
		},		
		CREATE_FACTOR: (state, payload) => {
			state.factors.push(payload)
		},
		DELETE_FACTOR: (state, payload) => {
			for (var i=0, l = state.factors.length; i < l; i++) {
				if (state.factors[i].ID === payload) {
					state.factors.splice(i, 1)
				}
			}
		},

		// Notes 6.3
		GET_NOTES: (state, payload) => {
			state.note = payload
		},		
		CREATE_NOTE: (state, payload) => {
			state.note.push(payload)
		},
		DELETE_NOTE: (state, payload) => {
			for (var i=0, l = state.note.length; i < l; i++) {
				if (state.note[i].ID === payload) {
					state.note.splice(i, 1)
				}
			}
		},

		// Strategy 7.1
		GET_STRATEGIES: (state, payload) => {
			state.strategy = payload
		},		
		CREATE_STRATEGY: (state, payload) => {
			state.strategy.push(payload)
		},
		DELETE_STRATEGY: (state, payload) => {
			for (var i=0, l = state.strategy.length; i < l; i++) {
				if (state.strategy[i].ID === payload) {
					state.strategy.splice(i, 1)
				}
			}
		},

		// MarketingActions 7.2
		GET_MARKETING_ACTIONS: (state, payload) => {
			state.marketingActions = payload
		},		
		CREATE_MARKETING_ACTION: (state, payload) => {
			state.marketingActions.push(payload)
		},
		DELETE_MARKETING_ACTION: (state, payload) => {
			for (var i=0, l = state.marketingActions.length; i < l; i++) {
				if (state.marketingActions[i].ID === payload) {
					state.marketingActions.splice(i, 1)
				}
			}
		},

		// StartActions 8.1
		GET_START_ACTIONS: (state, payload) => {
			state.startActions = payload
		},		
		CREATE_START_ACTION: (state, payload) => {
			state.startActions.push(payload)
		},
		DELETE_START_ACTION: (state, payload) => {
			for (var i=0, l = state.startActions.length; i < l; i++) {
				if (state.startActions[i].ID === payload) {
					state.startActions.splice(i, 1)
				}
			}
		},

		// FunctionCost 8.2
		GET_FUNCTION_COSTS: (state, payload) => {
			state.functionCost = payload
		},		
		CREATE_FUNCTION_COST: (state, payload) => {
			state.functionCost.push(payload)
		},
		DELETE_FUNCTION_COST: (state, payload) => {
			for (var i=0, l = state.functionCost.length; i < l; i++) {
				if (state.functionCost[i].ID === payload) {
					state.functionCost.splice(i, 1)
				}
			}
		},

		// FunctionCost - Functions 8.2
		GET_FUNCTIONS: (state, payload) => {
			state.functionCost[0].Functions = payload
		},		
		CREATE_FUNCTION: (state, payload) => {
			state.functionCost[0].Functions.push(payload)
		},
		DELETE_FUNCTION: (state, payload) => {
			for (var i=0, l = state.functionCost[0].Functions.length; i < l; i++) {
				if (state.functionCost[0].Functions[i].ID === payload) {
					state.functionCost[0].Functions.splice(i, 1)
				}
			}
		},

		// Deadspots 8.3
		GET_DEADSPOTS: (state, payload) => {
			state.deadspots = payload
		},		
		CREATE_DEADSPOT: (state, payload) => {
			state.deadspots.push(payload)
		},
		DELETE_DEADSPOT: (state, payload) => {
			for (var i=0, l = state.deadspots.length; i < l; i++) {
				if (state.deadspots[i].ID === payload) {
					state.deadspots.splice(i, 1)
				}
			}
		},

		// Links 9
		GET_LINKS: (state, payload) => {
			state.links = payload
		},		
		CREATE_LINK: (state, payload) => {
			state.links.push(payload)
		},
		DELETE_LINK: (state, payload) => {
			for (var i=0, l = state.links.length; i < l; i++) {
				if (state.links[i].ID === payload) {
					state.links.splice(i, 1)
				}
			}
		},

		// Conclusion 1.1
		GET_CONCLUSIONS: (state, payload) => {
			state.conclusion = payload
		},		
		CREATE_CONCLUSION: (state, payload) => {
			state.conclusion.push(payload)
		},
		DELETE_CONCLUSION: (state, payload) => {
			for (var i=0, l = state.conclusion.length; i < l; i++) {
				if (state.conclusion[i].ID === payload) {
					state.conclusion.splice(i, 1)
				}
			}
		},
	},

	getters:{
		// All the getters getting the first (0th) resource, assume that there exists
		// one of that resource inside the state manager (meaning one per business plan)

		// Identity 2.1,  Categories based on FinalJsons.js
		identity: state => {
			return state.identity[0] // Returns the first (0th) identity
		},

		// Clients 2.1
		clients: state => {
			return state.clients
		},

		// Description 2.2
		description: state => {
			return state.description[0] // Returns the first (0th) description
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
		employeeSalaries: state => {
			return state.employeeSalaries
		},

		// Faculties 4.1
		faculties: state => {
			return state.faculties
		},

		// Equipment 4.2
		equipment: state => {
			return state.equipment
		},

		// RunningCost 4.3
		// Returns the full runningCost resource including faculty and equipment costs
		runningCost: state => {
			return state.runningCost[0] // Returns the first (0th) runningCost
		},

		// RunningCost - FacultyCosts 4.3
		// Returns only the facultyCosts array from inside the first (0th) runningCost
		// facultyCosts: state => {
		// 	return state.runningCost[0].FacultyCosts 
		// },

		// RunningCost - EquipmentCosts 4.3
		// Returns only the equipmentCosts array from inside the first (0th) runningCost		
		// equipmentCosts: state => {
		// 	return state.runningCost[0].EquipmentCosts
		// },

		// Products 5
		products: state => {
			return state.products
		},

		// SWOT 6.1
		swot: state => {
			return state.swot[0] // Returns the first (0th) swot
		},

		// PESTEL - Factors 6.2
		factors: state => {
			return state.factors
		},

		// Note 6.3
		note: state => {
			return state.note[0] // Returns the first (0th) note
		},

		// Strategy 7.1
		strategy: state => {
			return state.strategy[0] // Returns the first (0th) strategy
		},

		// MarketingActions 7.2
		marketingActions: state => {
			return state.marketingActions
		},

		// StartActions 8.1
		startActions: state => {
			return state.startActions
		},

		// FunctionCost 8.2
		// Returns the full functionCost resource including the individual functions
		// and the totalCost
		functionCost: state => {
			return state.functionCost[0] // Returns the first (0th) functionCost
		},

		// FunctionCost - Functions 8.2
		// Returns only the functions array from inside the first (0th) functionCost resource
		// functions: state => {
		// 	return state.functionCost[0].Functions
		// },

		// Deadspots 8.3
		deadspots: state => {
			return state.deadspots
		},

		// Links 9
		links: state => {
			return state.links
		},

		// Conclusion 1.1
		conclusion: state => {
			return state.conclusion[0] // Returns the first (0th) conclusion
		},
	}
})
