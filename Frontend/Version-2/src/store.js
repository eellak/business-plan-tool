import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const serverUrl = 'http://localhost:3000'
const serverUrl = 'http://play-trinity.com/theo/bplantool/api'

export const store = new Vuex.Store({
	state: {

			bpProgress: {
				basicInformationIsComplete: false,
				internalAnalysisIsComplete: false,
				externalAnalysisIsComplete: false,
				strategyIsComplete: false,
				financialPlanIsComplete: false
			},

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

	actions: {
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

	},

	mutations:{
		TOGGLE_BASIC_INFORMATION_PROGRESS: (state, payload) => {
			state.bpProgress.basicInformationIsComplete = payload
		},		
		TOGGLE_INTERNAL_ANALYSIS_PROGRESS: (state, payload) => {
			state.bpProgress.internalAnalysisIsComplete = payload
		},		
		TOGGLE_EXTERNAL_ANALYSIS_PROGRESS: (state, payload) => {
			state.bpProgress.externalAnalysisIsComplete = payload
		},		
		TOGGLE_STRATEGY_PROGRESS: (state, payload) => {
			state.bpProgress.strategyIsComplete = payload
		},		
		TOGGLE_FINANCIAL_PLAN_PROGRESS: (state, payload) => {
			state.bpProgress.financialPlanIsComplete = payload
		}
	},

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
