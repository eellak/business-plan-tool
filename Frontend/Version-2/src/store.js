import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const serverUrl = 'http://localhost:3000'
const serverUrl = 'http://play-trinity.com/theo/bplantool/api'

export const store = new Vuex.Store({
	state: {

			// Odigies.
			newDesc: [
				{"Id": 0, "Description": ""}, 
				{"Id": 1, "Description":"Στην παρούσα καρτέλα με όνομα «Βασικά στοιχεία» θα αναγράφονται τα κύρια στοιχεία της εταιρίας, όπως η Επωνυμία της Εταιρίας, η Διεύθυνσή της,  τα Τηλέφωνα Επικοινωνίας καθώς και άλλα πεδία όπως e-mail, website κ.λ.π. Επιπλέον δίνεται η δυνατότητα στον χρήστη να εισάγει και μια Σύνοψη της Εταιρίας σε μορφή κειμένου."},
				{"Id": 2, "Description":"Εσωτερικό περιβάλλον είναι οι παράγοντες της επιχείρησης (οργανισμού) οι οποίοι την επηρεάζουν και βρίσκονται σε άμεση συσχέτιση μεταξύ τους (αλληλεπίδραση). Αυτοί είναι: οι ανθρώπινοι πόροι (εργατικό και στελεχιακό δυναμικό), οι φυσικοί (εγκαταστάσεις, πάγιος εξοπλισμός, αποθέματα), οι τεχνολογικοί, οι οικονομικοί (δάνεια, πηγές κεφαλαίων, μετοχικό κεφάλαιο κ.α) \n\n	Η  καρτέλα με όνομα «Εσωτερική Ανάλυση» θα αποτελείται από συνθήκες, οντότητες, γεγονότα μέσα στην επιχείρηση. Αυτές επηρεάζουν τις δραστηριότητες, τις επιλογές και ιδιαίτερα την συμπεριφορά των εργαζομένων που είναι ο στόχος του εσωτερικού περιβάλλοντος. Επίσης  οι ηγετικές μορφές και η οργάνωση της παίζουν σημαντικό ρόλο στην επιτυχία της. 				Σημαντικές κατηγορίες της Εσωτερικής Ανάλυσης που καλείται να συμπληρώσει ο χρήστης είναι οι Μέτοχοι της επιχείρησης, η περιγραφή της επιχείρησης, τα προϊόντα ή οι υπηρεσίες που θα προσφέρονται καθώς και η στρατηγική επιλογή της τοποθεσίας της εταιρίας."},			
				{"Id": 3, "Description":"Εξωτερικό περιβάλλον μιας επιχείρησης είναι οι παράγοντες οι οποίοι δρουν έξω από μια επιχείρηση, την επηρεάζουν και αλληλοεπιδρούν μεταξύ τους. Η διάκριση του εξωτερικού περιβάλλοντος σε γενικό και ειδικό είναι άκρως σημαντική αφού απλοποιεί τον τρόπο μελέτης και πρόβλεψης των συνθηκών λειτουργίας της επιχείρησης. Οι παράγοντες (στοιχεία) του εξωτερικού γενικού περιβάλλοντος είναι: οικονομικοί (η διάρθρωση της οικονομίας μιας χώρας, οι τομείς παραγωγής, οι παραγωγικοί πόροι, τα επίπεδα ανάπτυξης κ.α ) πολιτικοί (πολιτικό καθεστώς, κρατικός παρεμβατισμός, πολιτική και οικονομική ελευθερία, γραφειοκρατία κ.α) θεσμικοί (νομοθεσία, θεσμικό πλαίσιο, κανονισμοί) κοινωνικοί ( διάρθρωση της κοινωνίας, πολιτισμός , ιστορία, ήθη, έθιμα, κινητικότητα πολιτών κ.α ) και τεχνολογικοί (επίπεδο εφαρμογής προόδου και αποδοχής της τεχνολογίας και αποτελεσματικός συνδυασμός πόρων, γνώσεων, εμπειριών κ.α) Οι παράγοντες (στοιχεία) του εξωτερικού ειδικού ή λειτουργικού περιβάλλοντος μιας επιχείρησης είναι: οι πελάτες, οι προμηθευτές, οι ανταγωνιστές, οι κρατικοί φορείς, οι εργατικές ενώσεις, τα επιμελητήρια  Τα βασικά χαρακτηριστικά αυτής της κατηγορίας περιβάλλοντος είναι η διαφορετικότητά του μεταξύ των επιχειρήσεων και η άμεση επίδρασή του στη λήψη των αποφάσεων. Οι κατηγορίες που καλείται να συμπληρώσει ο χρήστης είναι οι παρακάτω: Ανάλυση καταναλωτή, Ανάλυση ανταγωνισμού, Ανάλυση αγοράς, Ανάλυση περιβάλλοντος, Ανάλυση SWOT"},
				{"Id": 4, "Description":"Η έννοια της στρατηγικής των επιχειρήσεων, ορίζεται ως ο καθορισμός των μακροχρόνιων στόχων της επιχείρησης και την αποστολή ή το όραμα της επιχείρησης, Επιπλέον δίνεται έμφαση στον καθορισμό των δραστηριοτήτων της επιχείρησης σύμφωνα με το εσωτερικό και το εξωτερικό περιβάλλον της. Επιχειρώντας τη σύνθεση των διάφορων ορισμών καταλήγουμε σε κάποια βασικά χαρακτηριστικά που περιλαμβάνονται στον ορισμό των Johnson και Scholes. Η στρατηγική λαμβάνει υπόψη της τους πόρους (υλικούς και άϋλους) της επιχείρησης και γενικότερα  το εσωτερικό περιβάλλον της, τις δυνάμεις και τις αδυναμίες της. Επιπλέον, η στρατηγική λαμβάνει υπόψη της το εξωτερικό περιβάλλον της επιχείρησης, με τις απειλές και τις ευκαιρίες που αυτό παρέχει· συγκεκριμένα πρόκειται για το μακρο-περιβάλλον (πολιτικό, οικονομικό, κοινωνικό, τεχνολογικό) και το μικρο-περιβάλλον (άμεσοι και έμμεσοι ανταγωνιστές)  	Με βάση τα παραπάνω, η στρατηγική καθορίζει τις μακροπρόθεσμες δραστηριότητες της επιχείρησης, το εύρος και την κατεύθυνση των δραστηριοτήτων  	Ακόμη, η στρατηγική στοχεύει, μεταξύ άλλων, στην απόκτηση και διατήρηση ανταγωνιστικών πλεονεκτημάτων για την επιχείρηση  Ουσιαστικά η στρατηγική αποτελεί το σημείο αναφοράς που καθοδηγεί την επιχείρηση στην υλοποίηση των μακροχρόνιων στόχων της. Η αποδοχή μιας στρατηγικής έχει και άλλες θετικές διαστάσεις για την επιχείρηση, καθώς συντονίζει τις διαδικασίες λήψης αποφάσεων, τις δράσεις και τις θέσεις της επιχείρησης στο εσωτερικό της και απέναντι στους ανταγωνιστές της.     Οι κατηγορίες που καλείται να συμπληρώσει ο χρήστης είναι οι παρακάτω: Στρατηγική προϊόντων, και Πλάνο Marketing όπου το στελεχώνουν οι εξής υποενότητες: Συμπεριφορά καταναλωτή, Προϊόν/Υπηρεσία, Διανομή, Προώθηση, Πωλήσεις και Διοικητικό πλάνο."},	
			], 
			
			// 1.Basic Information
			companyName: "fashion4u",
			address: "valaoritou 4",
			telephone: "2310666666",
			email: "fashion4u@gmail.com",
			website: "fashion4u.gr",
			businessNature: "fashion",
			capital: 25000,
			foundationYear: 1985,
			strains: [ "Elon Musk", "Aria Stark" ],
			synopsis: "This is a text.",
			
			// 2.Internal Analysis
			shareholders: ["John Smith", "Jack Sparrow"],
			description: "Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. ",
			products: [
				{
					id: 1,
					type: 'product',
					name: "Πουκάμισο",
					details: "2012 fall-winter collection"
				},
				{
					id: 2,
					type: 'product',
					name: "Παντελόνι"	,
					details:"Είναι ανοικτό μπλε υφασμάτινο καλοκαιρινό Lee μάρκας."
				},
				{
					id: 3,
					type: 'product',
					name: "Παπούτσια"	,
					details:"Αθλητικά Nike παπούτσια."
				}
			],
			location: "Το καθιερωμένο κομμάτι του Lorem Ipsum που χρησιμοποιείται από τον 15ο αιώνα αναπαράγεται παρακάτω για αυτούς που ενδιαφέρονται.",
			  
			//3.External Analysis
			consumerAnalysis: "",
			competitionAnalysis: "",
			marketAnalysis: {
				synthesis: '',
				type: '',
				competitors: '',
				perithoriaEisodou: ''
			},
			enviromentAnalysis:  "",
			swot: {
				strengths: ["nice clothes","low prices","strong marketing"],
				weaknesses: ["lower quality of clothes"],
				opportunities: ["opportunity1","opportunity"],
				threats: ["thrt1"]
			},
			
			// 4.Strategy
			productStrategy: "products or services strat 1",
			consumerBehavior: "",
			productMarketing: "",
			distribution: "",
			promotion: "",
			sales: {
				value: 0,
				salesTimelap: "",
				quantity: 0,
				totalValue: 0 
			},
			administrativePlan: "",

			// 5.Financial Plan
			expenses: [ 
				{ "year": 2018, "yearExpenses": 32000, },
				{ "year": 2019, "yearExpenses": 37000, },
				{ "year": 2020, "yearExpenses": 52000, },
			 ],
			useResults: {
				productSales: 0,
				mixedProfit: 0,
				standardExpenses: 16000,
				variableExpenses: 2000,
				totalExpenses: 0,
				totalProfit: 0
			}
	},

	// actions: {
	// 	// Identity 2.1,  Categories based on FinalJsons.js
	// 	getIdentities: function ({ commit }) {
	// 		axios.get(serverUrl + "/identity")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_IDENTITIES', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createIdentity: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/identity", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_IDENTITY', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteIdentity: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/identity/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_IDENTITY', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},
		
	// 	// Clients 2.1
	// 	getClients: function ({ commit }) {
	// 		axios.get(serverUrl + "/client")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_CLIENTS', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createClient: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/client", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_CLIENT', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteClient: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/client/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_CLIENT', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},

	// 	// Description 2.2
	// 	getDescriptions: function ({ commit }) {
	// 		axios.get(serverUrl + "/description")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_DESCRIPTIONS', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createDescription: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/description", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_DESCRIPTION', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteDescription: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/description/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_DESCRIPTION', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},


	// 	// Managers 3.1
	// 	getManagers: function ({ commit }) {
	// 		axios.get(serverUrl + "/manager")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_MANAGERS', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createManager: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/manager", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_MANAGER', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteManager: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/manager/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_MANAGER', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},

	// 	// Employees 3.2
	// 	getEmployees: function ({ commit }) {
	// 		axios.get(serverUrl + "/employee")
	// 			.then(function (response)
	// 			{
	// 				commit('GET_EMPLOYEES', response.data)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},
	// 	createEmployee: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/employee", payload)
	// 		.then(function (response)
	// 		{
	// 			console.log("payload of create: ", payload)
	// 			commit('CREATE_EMPLOYEE', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)
	// 			})
	// 	},	
	// 	deleteEmployee: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/employee/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_EMPLOYEE', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},

	// 	// Partners 3.3	
	// 	getPartners: function ({ commit }) {
	// 		axios.get(serverUrl + "/partner")
	// 		.then(function (response)
	// 		{
	// 			commit('GET_PARTNERS', response.data)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},
	// 	createPartner: function ({ commit }, payload) {
	// 		axios.post(serverUrl + "/partner", payload)
	// 		.then(function (response)
	// 		{
	// 				console.log("payload of create: ", payload)
	// 				commit('CREATE_PARTNER', payload)
	// 			})
	// 			.catch(function (err) {
	// 				console.log(err)					
	// 			})
	// 	},
	// 	deletePartner: function ({ commit }, payload) {
	// 		axios.delete(serverUrl + "/partner/" + payload)
	// 		.then(function (response)
	// 		{
	// 			commit('DELETE_PARTNER', payload)
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err)
	// 		})
	// 	},

	// 	// Employee Salaries 3.4

	// 	// Faculties 4.1

	// 	// Equipment 4.2

	// 	// RunningCost 4.3

	// 	// RunningCost - FacultyCosts 4.3

	// 	// RunningCost - EquipmentCosts 4.3

	// 	// Products 5

	// 	// SWOT 6.1

	// 	// PESTEL - Factors 6.2

	// 	// Notes 6.3

	// 	// Strategy 7.1

	// 	// MarketingActions 7.2

	// 	// StartActions 8.1

	// 	// FunctionCost 8.2

	// 	// FunctionCost - Functions 8.2

	// 	// Deadspots 8.3

	// 	// Links 9

	// 	// Conclusion 1.1
	// },

	// mutations:{
	// 	// Identity 2.1,  Categories based on FinalJsons.js
	// 	GET_IDENTITIES: (state, payload) => {
	// 		state.identity = payload
	// 	},		
	// 	CREATE_IDENTITY: (state, payload) => {
	// 		state.identity.push(payload)
	// 	},
	// 	DELETE_IDENTITY: (state, payload) => {
	// 		for (var i=0, l = state.identity.length; i < l; i++) {
	// 			if (state.identity[i].ID === payload) {
	// 				state.identity.splice(i, 1)
	// 			}
	// 		}
	// 	},
		
	// 	// Clients 2.1
	// 	GET_CLIENTS: (state, payload) => {
	// 		state.clients = payload
	// 	},		
	// 	CREATE_CLIENT: (state, payload) => {
	// 		state.clients.push(payload)
	// 	},
	// 	DELETE_CLIENT: (state, payload) => {
	// 		for (var i=0, l = state.clients.length; i < l; i++) {
	// 			if (state.clients[i].ID === payload) {
	// 				state.clients.splice(i, 1)
	// 			}
	// 		}
	// 	},

	// 	// Description 2.2
	// 	GET_DESCRIPTIONS: (state, payload) => {
	// 		state.description = payload
	// 	},		
	// 	CREATE_DESCRIPTION: (state, payload) => {
	// 		state.description.push(payload)
	// 	},
	// 	DELETE_DESCRIPTION: (state, payload) => {
	// 		for (var i=0, l = state.description.length; i < l; i++) {
	// 			if (state.description[i].ID === payload) {
	// 				state.description.splice(i, 1)
	// 			}
	// 		}
	// 	},

	// 	// Managers 3.1
	// 	GET_MANAGERS: (state, payload) => {
	// 		state.managers = payload
	// 	},		
	// 	CREATE_MANAGER: (state, payload) => {
	// 		// state.managers.pop()
	// 		state.managers.push(payload)
	// 	},
	// 	DELETE_MANAGER: (state, payload) => {
	// 		//console.log("payload: ", payload)
	// 		//console.log('state.managers: ', state.managers)
	// 		for (var i=0, l = state.managers.length; i < l; i++) {
	// 			if (state.managers[i].ID === payload) {
	// 				//console.log("id: ", state.managers[i].ID)
	// 				state.managers.splice(i, 1)
	// 			}
	// 		}
	// 	},

	// 	// Employees 3.2
	// 	GET_EMPLOYEES: (state, payload) => {
	// 		state.employees = payload
	// 	},		
	// 	CREATE_EMPLOYEE: (state, payload) => {
	// 		state.employees.push(payload)
	// 	},
	// 	DELETE_EMPLOYEE: (state, payload) => {
	// 		for (var i=0, l = state.employees.length; i < l; i++) {
	// 			if (state.employees[i].ID === payload) {
	// 				state.employees.splice(i, 1)
	// 			}
	// 		}
	// 	},

	// 	// Partners 3.3	
	// 	GET_PARTNERS: (state, payload) => {
	// 		state.partners = payload
	// 	},		
	// 	CREATE_PARTNER: (state, payload) => {
	// 		state.partners.push(payload)
	// 	},
	// 	DELETE_PARTNER: (state, payload) => {
	// 		for (var i=0, l = state.partners.length; i < l; i++) {
	// 			if (state.partners[i].ID === payload) {
	// 				state.partners.splice(i, 1)
	// 			}
	// 		}
	// 	},

	// 	// Employee Salaries 3.4

	// 	// Faculties 4.1

	// 	// Equipment 4.2

	// 	// RunningCost 4.3

	// 	// RunningCost - FacultyCosts 4.3

	// 	// RunningCost - EquipmentCosts 4.3

	// 	// Products 5

	// 	// SWOT 6.1

	// 	// PESTEL - Factors 6.2

	// 	// Notes 6.3

	// 	// Strategy 7.1

	// 	// MarketingActions 7.2

	// 	// StartActions 8.1

	// 	// FunctionCost 8.2

	// 	// FunctionCost - Functions 8.2

	// 	// Deadspots 8.3

	// 	// Links 9

	// 	// Conclusion 1.1
	// },

	// getters:{
	// 	// All the getters getting the first (0th) resource, assume that there exists
	// 	// one of that resource inside the state manager (meaning one per business plan)

	// 	// Identity 2.1,  Categories based on FinalJsons.js
	// 	identity: state => {
	// 		return state.identity[0] // Returns the first (0th) identity
	// 	},

	// 	// Clients 2.1
	// 	clients: state => {
	// 		return state.clients
	// 	},

	// 	// Description 2.2
	// 	description: state => {
	// 		return state.description[0] // Returns the first (0th) description
	// 	},

	// 	// Managers 3.1
	// 	managers: state => {
	// 		return state.managers
	// 	},

	// 	// Employees 3.2
	// 	employees: state => {
	// 		return state.employees
	// 	},

	// 	// Partners 3.3	
	// 	partners: state => {
	// 		return state.partners
	// 	},

	// 	// Employee Salaries 3.4
	// 	employeeSalaries: state => {
	// 		return state.employeeSalaries
	// 	},

	// 	// Faculties 4.1
	// 	faculties: state => {
	// 		return state.faculties
	// 	},

	// 	// Equipment 4.2
	// 	equipment: state => {
	// 		return state.equipment
	// 	},

	// 	// RunningCost 4.3
	// 	// Returns the full runningCost resource including faculty and equipment costs
	// 	runningCost: state => {
	// 		return state.runningCost[0] // Returns the first (0th) runningCost
	// 	},

	// 	// RunningCost - FacultyCosts 4.3
	// 	// Returns only the facultyCosts array from inside the first (0th) runningCost
	// 	facultyCosts: state => {
	// 		return state.runningCost[0].FacultyCosts 
	// 	},

	// 	// RunningCost - EquipmentCosts 4.3
	// 	// Returns only the equipmentCosts array from inside the first (0th) runningCost		
	// 	equipmentCosts: state => {
	// 		return state.runningCost[0].EquipmentCosts
	// 	},

	// 	// Products 5
	// 	products: state => {
	// 		return state.products
	// 	},

	// 	// SWOT 6.1
	// 	swot: state => {
	// 		return state.swot[0] // Returns the first (0th) swot
	// 	},

	// 	// PESTEL - Factors 6.2
	// 	factors: state => {
	// 		return state.factors
	// 	},

	// 	// Note 6.3
	// 	note: state => {
	// 		return state.note[0] // Returns the first (0th) note
	// 	},

	// 	// Strategy 7.1
	// 	strategy: state => {
	// 		return state.strategy[0] // Returns the first (0th) strategy
	// 	},

	// 	// MarketingActions 7.2
	// 	marketingActions: state => {
	// 		return state.marketingActions
	// 	},

	// 	// StartActions 8.1
	// 	startActions: state => {
	// 		return state.startActions
	// 	},

	// 	// FunctionCost 8.2
	// 	// Returns the full functionCost resource including the individual functions
	// 	// and the totalCost
	// 	functionCost: state => {
	// 		return state.functionCost[0] // Returns the first (0th) functionCost
	// 	},

	// 	// FunctionCost - Functions 8.2
	// 	// Returns only the functions array from inside the first (0th) functionCost resource
	// 	functions: state => {
	// 		return state.functionCost[0].Functions
	// 	},

	// 	// Deadspots 8.3
	// 	deadspots: state => {
	// 		return state.deadspots
	// 	},

	// 	// Links 9
	// 	links: state => {
	// 		return state.links
	// 	},

	// 	// Conclusion 1.1
	// 	conclusion: state => {
	// 		return state.conclusion[0] // Returns the first (0th) conclusion
	// 	},
	// }
})
