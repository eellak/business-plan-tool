<template>
  <div class="skeleton">
  <body>
    <header class="head">
        <div class="head__logo">
            <img src="../assets/Logo.png" alt="Logo">
        </div>
        <div class="head__export" @click="exportFunction()">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">    
            <i class="fa fa-cloud-download fa-2x" aria-hidden="true"></i>
            <p>Export</p>
        </div>
        <img class="head__avatar" src="../assets/avatar.png" alt="Avatar">
    </header>

    <div class="main_container">
          <nav>
            <div class="sections-menu">
                <ul class="sections-menu-ul">
                    <li class="has-sub">
                        <a href="">ΕΠΙΧΕΙΡΗΜΑΤΙΚΟ ΜΟΝΤΕΛΟ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/identity" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΤΑΥΤΟΤΗΤΑ</a>
                        </router-link>
                        <router-link to="/description" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΠΕΡΙΓΡΑΦΗ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΑΝΘΡΩΠΙΝΟ ΔΥΝΑΜΙΚΟ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/managers" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΟΜΑΔΑ ΔΙΟΙΚΗΣΗΣ</a>
                        </router-link>
                        <router-link to="/employees" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΠΡΟΣΩΠΙΚΟ</a>
                        </router-link>
                        <router-link to="/partners" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΕΞΩΤΕΡΙΚΟΙ ΣΥΝΕΡΓΑΤΕΣ</a>
                        </router-link>
                        <router-link to="/humancosts" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΕΓΚΑΤΑΣΤΑΣΕΙΣ - ΕΞΟΠΛΙΣΜΟΣ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/faculties" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΤΟΠΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ</a>
                        </router-link>
                        <router-link to="/equipment" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΕΞΟΠΛΙΣΜΟΣ</a>
                        </router-link>
                        <router-link to="/running-cost" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΠΡΟΪΟΝΤΑ - ΥΠΗΡΕΣΙΕΣ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/characteristics" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ</a>
                        </router-link>
                        <router-link to="/copyrights" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΠΝΕΥΜΑΤΙΚΗ ΙΔΙΟΚΤΗΣΙΑ</a>
                        </router-link>
                        <router-link to="/revenues" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΑΝΑΛΥΣΗ ΕΣΟΔΩΝ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΑΝΑΛΥΣΗ ΑΓΟΡΑΣ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/swot" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΑΝΑΛΥΣΗ SWOT</a>
                        </router-link>
                        <router-link to="/pestel-factors" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΑΝΑΛΥΣΗ PESTEL</a>
                        </router-link>
                        <router-link to="/market-note" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΓΕΝΙΚΕΣ ΠΑΡΑΤΗΡΗΣΕΙΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΣΤΡΑΤΗΓΙΚΗ MARKETING<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/strategy" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΣΤΡΑΤΗΓΙΚΗ</a>
                        </router-link>
                        <router-link to="/marketing-actions" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΕΝΕΡΓΕΙΕΣ MARKETING</a>
                        </router-link>
                      </ul>
                    </li>
                    <li class="has-sub">
                        <a href="">ΧΡΗΜΑΤΟΙΚΟΝΟΜΙΚΟΣ ΣΧΕΔΙΑΣΜΟΣ<span class="sub-arrow"></span></a>
                      <ul>
                        <router-link to="/start-actions" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΚΟΣΤΟΣ ΕΝΑΡΞΗΣ</a>
                        </router-link>
                        <router-link to="/function-cost" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΚΟΣΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ</a>
                        </router-link>
                        <router-link to="/dead-spot" tag="li" class="" active-class="activeSection">
                          <a class="subSection">ΝΕΚΡΟ ΣΗΜΕΙΟ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/timeline" tag="a" class="">ΧΡΟΝΟΔΙΑΓΡΑΜΜΑ</router-link>
                    </li>
                    <li>
                      <router-link to="/synopsis" tag="a" class="">ΣΥΝΟΨΗ</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <main>
            <router-view/>
        </main>
    </div>

    <footer class="foot">
        <button class="foot__back">ΠΙΣΩ</button>
        <span class="foot__pagination">
            <p>1/2</p>
        </span>
        <button class="foot__next">ΜΠΡΟΣΤΑ</button>
    </footer>
  </body>
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
 	name: 'Skeleton',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    // this.$store.dispatch('getManagers')
    // this.$store.dispatch('getIdentities')
    // this.$store.dispatch('getDescriptions')
    // this.$store.dispatch('getClients')
    // this.$store.dispatch('getManagers')
    // this.$store.dispatch('getEmployees')
    // this.$store.dispatch('getPartners')
    // this.$store.dispatch('getEmployeeSalaries')
    // this.$store.dispatch('getFaculties')
    // this.$store.dispatch('getEquipment')
    // this.$store.dispatch('getRunningCosts')
    // this.$store.dispatch('getFacultyCosts')
    // this.$store.dispatch('getEquipmentCosts')
    // this.$store.dispatch('getProducts')
    // this.$store.dispatch('getSWOTS')
    // this.$store.dispatch('getFactors')
    // this.$store.dispatch('getNotes')
    // this.$store.dispatch('getStrategies')
    // this.$store.dispatch('getMarketingActions')
    // this.$store.dispatch('getStartActions')
    // this.$store.dispatch('getFunctionCosts')
    // this.$store.dispatch('getFunctions')
    // this.$store.dispatch('getDeadspots')
    // this.$store.dispatch('getLinks')
    // this.$store.dispatch('getConclusions')
  },
    mounted(){
        $('.has-sub').click(function(){
          event.preventDefault();
          $(this).toggleClass('tap');
        });
        
        $('.subSection').click(function(){
          $(this).closest('.has-sub').toggleClass('tap');               
        });
  },
  methods: {
    // This function returns a parsed date from the db form(YYYYMMDD) into proper form with slashes(DD/MM/YYYY)
    dateParser(date){
      return String(date).slice(6) + "/" // Slice DD, 6-end
        + String(date).slice(4, 6) + "/" // Slice MM, 4-5
        + String(date).slice(0, 4)       // Slice YYYY, 0-3
    },

    // Functions for dynamic PDFMake content generation based on the json

    clientsFun(db) { 
      var clientsArray = []           // Array to store the PDFMake content
      var clientsObj = db["clients"]  // Store the object in a local variable

      // Loop through the clients array and format the content in PDFMake form
      for (var i = 0; i < clientsObj.length; i++){
        clientsArray.push([{text: "ID: "            + clientsObj[i].ID},
                           {text: "Όνοματεπώνυμο: " + clientsObj[i].Name}, " "]) // Append each element of the list
      }

      return clientsArray
    },

    managersFun(db) { 
      var managersArray = []
      var managersObj = db["managers"]

      for (var i = 0; i < managersObj.length; i++){
        managersArray.push([{text: "ID: "            + managersObj[i].ID},
                            {text: "Όνοματεπώνυμο: " + managersObj[i].Name + " " + managersObj[i].Surname},
                            {text: "Θέση εργασίας: " + managersObj[i].Job},
                            {text: "LinkedIn: "      + managersObj[i].LinkedIn}, " "])
      }

      return managersArray
    },

    employeesFun(db) { 
      var employeesArray = []
      var employeesObj = db["employees"]

      for (var i = 0; i < employeesObj.length; i++){
        employeesArray.push([{text: "ID εργαζόμενου: " + employeesObj[i].ID},
                             {text: "Θέση εργασίας: "  + employeesObj[i].Job}, " "])
      }

      return employeesArray
    },

    partnersFun(db) { 
      var partnersArray = []
      var partnersObj = db["partners"]

      for (var i = 0; i < partnersObj.length; i++){
        partnersArray.push([{text: "ID: "            + partnersObj[i].ID},
                            {text: "Όνοματεπώνυμο: " + partnersObj[i].Name + " " + partnersObj[i].SurName},
                            {text: "Εξειδίκευση: "   + partnersObj[i].Expertise},
                            {text: "LinkedIn: "      + partnersObj[i].LinkedIn},
                            {text: "Από: "           + this.dateParser(partnersObj[i].From)},
                            {text: "Έως: "           + this.dateParser(partnersObj[i].Until)},
                            {text: "Καθήκοντα: "     + partnersObj[i].Duties}, " "])
      }

      return partnersArray
    },

    employeesCostFun(db){
      var costArray = []
      var costObj = db["employeeSalaries"]

      for (var i = 0; i < costObj.length; i++){
        costArray.push([{text: "ID εργαζόμενου: "    + costObj[i].EmployeeID},
                        {text: "Ποσό αμοιβής: "      + costObj[i].Salary + "€"},
                        {text: "Bonus: "             + costObj[i].Bonus + "€"},
                        {text: "Είδος απασχόλησης: " + costObj[i].Employment_type}, " "])
      }

      return costArray
    },

    facultiesFun(db){
      var facultiesArray = []
      var facultiesObj = db["faculties"]

      for (var i = 0; i < facultiesObj.length; i++){
        facultiesArray.push([{text: "ID: "                    + facultiesObj[i].ID},
                             {text: "Διεύθυνση: "             + facultiesObj[i].Address},
                             {text: "Λειτουργία χώρου ως: "   + facultiesObj[i].Usage},
                             {text: "Έκταση: "                + facultiesObj[i].M2 + " τετραγωνικά μέτρα"},
                             {text: "Είδος ιδιοκτησίας: "     + facultiesObj[i].Ownership_type},
                             {text: "Έναρξη δραστηριότητας: " + this.dateParser(facultiesObj[i].Start_date)}, " "])
      }

      return facultiesArray
    },

    equipmentFun(db){
      var equipmentArray = []
      var equipmentObj = db["equipment"]

      for (var i = 0; i < equipmentObj.length; i++){

        var priorUse = "null"
        if (equipmentObj[i].Firsthand) priorUse = "νέο"
        else priorUse = "μεταχειρισμένο"

        equipmentArray.push([{text: "ID: "                   + equipmentObj[i].ID},
                             {text: "Είδος εξοπλισμού: "     + equipmentObj[i].EquipType},
                             {text: "Τόπος εγκατάστασης: "   + equipmentObj[i].Address},
                             {text: "Τμήμα επιχείρησης: "    + equipmentObj[i].Division},
                             {text: "Προηγούμενη χρήση: "    + priorUse},
                             {text: "Ημερομηνία απόκτησης: " + this.dateParser(equipmentObj[i].Acquisition_date)}, " "])
      }

      return equipmentArray
    },

    facultyCostFun(db){
      var facultyCostArray = []
      var facultyCostObj = db.runningCost.FacultyCosts

      for (var i = 0; i < facultyCostObj.length; i++){
        facultyCostArray.push([{text: "ID εγκατάστασης: "     + facultyCostObj[i].FacultyId},
                               {text: "Κόστος εγκατάστασης: " + facultyCostObj[i].Cost + "€"}, " "])
      }

      return facultyCostArray
    },

    equipmentCostFun(db){
      var equipmentCostArray = []
      var equipmentCostObj = db.runningCost.EquipmentCosts

      for (var i = 0; i < equipmentCostObj.length; i++){
        equipmentCostArray.push([{text: "ID εξοπλισμού: "     + equipmentCostObj[i].EquipmentId}, 
                                 {text: "Κόστος εξοπλισμού: " + equipmentCostObj[i].Cost + "€"}, " "])
      }

      return equipmentCostArray
    },

    productsFun(db) {
      var charListArray = []
      var charListArrayObj=db["products"]

      for (var i = 0; i < charListArrayObj.length; i++){

        if(db.products[i].ProductType){
          var productType="Προϊόν: "
        }
        else{
          var productType="Υπηρεσία: "
        }

        charListArray.push([{text: productType            + charListArrayObj[i].Name},
                            {text: "Απευθυνόμενο σε: "    + charListArrayObj[i].Directed_to},
                            {text: "Σχέδιο καινοτομίας: " + charListArrayObj[i].Innovation_factor},
                            {text: "Τεχνολογία: "         + charListArrayObj[i].Technology},
                            {text: "Απαιτήσεις άδειας: "  + charListArrayObj[i].Certificate},
                            {text: "Άδεια: "              + charListArrayObj[i].License},
                            {text: "Ανταγωνισμός: "       + charListArrayObj[i].Competition},
                            {text: "Τελική τιμή: "        + charListArrayObj[i].Price + "€"},
                            {text: "Περιγραφή: "          + charListArrayObj[i].Description}, " "])
      }

      return charListArray
    },

    pestelFun(db) {
      var factorsArray = []
      var factorsArrayObj = db["factors"]

      for (var i = 0; i < factorsArrayObj.length; i++){
        factorsArray.push([{text: "Περιγραφή Παράγοντα: "  + factorsArrayObj[i].Description},
                           {text: "Παράδειγμα: " + factorsArrayObj[i].Example}, " "])
      }

      return factorsArray 
    },

    strategyFun(db) { 
      var strategyArray = []
      var strategyObj = db["strategy"]

      for (var i = 0; i < strategyObj.length; i++){
        strategyArray.push([{text: "Προβολή: "          + strategyObj[i].Promotion},
                            {text: "Συνεισφορά: "       + strategyObj[i].Contribution},
                            {text: "Είσοδος αγοράς: "   + strategyObj[i].MarketEntry},
                            {text: "Δημόσιες σχέσεις: " + strategyObj[i].PublicRelations},
                            {text: "Αποφυγή: "          + strategyObj[i].Avoid}])
      }

      return strategyArray
    },

    marketingActionsFun(db) {
      var marketingActionsArray = []
      var marketingActionsArrayObj = db["marketingActions"]

      for (var i = 0; i < marketingActionsArrayObj.length; i++){
        marketingActionsArray.push([{text: "Ενέργεια: "          + marketingActionsArrayObj[i].Title},
                                    {text: "Χρόνος υλοποίησης: " + marketingActionsArrayObj[i].ImplementationTime},
                                    {text: "Συχνότητα: "         + marketingActionsArrayObj[i].Frequency},
                                    {text: "Κόστος υλοποίησης: " + marketingActionsArrayObj[i].ImplementationCost + "€"},
                                    {text: "Συνολικό κόστος: "   + marketingActionsArrayObj[i].TotalCost + "€"}, " "])
      }

      return marketingActionsArray  
    },

    startActionsFun(db) { 
      var startActionsArray = []
      var startActionsObj = db["startActions"]

      for (var i = 0; i < startActionsObj.length; i++){
        startActionsArray.push([//{text: "ID: "               + startActionsObj[i].ID},
                                {text: "Όνομα ενέργειας: "  + startActionsObj[i].Name},
                                {text: "Κόστος ενέργειας: " + startActionsObj[i].ActionCost + "€"}])
      }

      return startActionsArray
    },

    functionCostFun(db) { 
      var functionCostArray = []
      var functionCostObj = db.functionCost.Functions

      for (var i = 0; i < functionCostObj.length; i++){
        functionCostArray.push([//{text: "ID: "                 + functionCostObj[i].ID},
                                {text: "Όνομα: "              + functionCostObj[i].Name},
                                {text: "Κόστος λειτουργίας: " + functionCostObj[i].FunctionCost + "€"}])
      }

      return functionCostArray
    },
    
    deadspotsFun(db) { 
      var deadspotsArray = []
      var deadspotsObj = db["deadspots"]

      for (var i = 0; i < deadspotsObj.length; i++){
        deadspotsArray.push([{text: "Νεκρό σημείο: " + deadspotsObj[i].Spot}])
      }

      return deadspotsArray
    },

    linksFun(db) { 
      var linksArray = []
      var linksObj = db["links"]

      for (var i = 0; i < linksObj.length; i++){
        linksArray.push([{text: "ID: "     + linksObj[i].ID},
                         {text: "URL: "    + linksObj[i].URL},
                         {text: "Τίτλος: " + linksObj[i].Title},
                         {text: "Τομέας: " + linksObj[i].Section}])
      }

      return linksArray
    },

    exportFunction(){
      var db = this.$store.state
      // PDFMake code here
      var docDefinition = {
        // Content of the pdf document
        content: [
          // Section 1
          {text: "Επιχειρηματικό Μοντέλο", style: "sectionHeader"},
          " ",
          // Subsection 1.1
          // This content element is a complicated one, with extra "tags" like bold, underline, etc., all contained into the style. 
          // Notice it is inside curly brackets.
          {text: "1.1 Ταυτότητα Επιχείρησης:", style: "subSectionHeader"},
          " ", // Newline
          // This content element is a simple string element, no need for curly brackets, just comma after it.
          "Όνομα επιχείρησης: "      + db["identity"][0].Name,
          "Ημερομηνία δημιουργίας: " + this.dateParser(db["identity"][0].Date),
          "Νομική μορφή: "           + db["identity"][0].LegalForm,
          "Τύπος επιχείρησης: "      + db["identity"][0].OrderOfBusiness,
          " ",
          "Πελάτες: ",
          " ",
          // Due to the "ol" tag, it needs curly brackets. Equivalent to {ol: [firstItem, secondItem]} syntax.
          {ol: this.clientsFun(db)},
          " "," ", // 2 newlines between sections/subsections
          // Subsection 1.2
          {text: "1.2 Περιγραφή Επιχείρησης:", style: "subSectionHeader"},
          " ",
          // Simple string element coming straight from db
          db["description"][0].Text,
          " "," ",
          // Section 2
          {text: "Ανθρώπινο Δυναμικό", style: "sectionHeader"},
          " ",
          // Subsection 2.1
          {text: "2.1 Ομάδα Διοίκησης:", style: "subSectionHeader"},
          " ",
          {ol: this.managersFun(db)}, // Call dynamic content creation function for managers
          " "," ",
          // Subsection 2.2
          {text: "2.2 Προσωπικό:", style: "subSectionHeader"},
          " ",
          {ol: this.employeesFun(db)},
          " "," ",
          // Subsection 2.3
          {text: "2.3 Εξωτερικοί Συνεργάτες:", style: "subSectionHeader"},
          " ",
          {ol: this.partnersFun(db)},
          " "," ",
          // Subsection 2.3
          {text: "2.4 Ανάλυση Κόστους:", style: "subSectionHeader"},
          " ",
          {ol: this.employeesCostFun(db)},
          " "," ",
          // Section 3
          {text: "Εγκαταστάσεις - Εξοπλισμός", style: "sectionHeader"},
          " ",
          // Subsection 3.1
          {text: "3.1 Τόπος Εγκατάστασης:", style: "subSectionHeader"},
          " ",
          {ol: this.facultiesFun(db)},
          " "," ",
          // Subsection 3.2
          {text: "3.2 Εξοπλισμός:", style: "subSectionHeader"},
          " ",
          {ol: this.equipmentFun(db)},
          " "," ",
          // Subsection 3.3
          {text: "3.3 Ανάλυση Κόστους:", style: "subSectionHeader"},
          " ",
          {text: "Κόστος εγκαταστάσεων:", bold: true},
          " ",
          {ol: this.facultyCostFun(db)},
          {text: "Συνολικό κόστος εγκαταστάσεων: " + String(db.runningCost.FacultyExpenses) + "€", bold: true},
          " ",
          {text: "Κόστος εξοπλισμού:", bold: true},
          " ",
          {ol: this.equipmentCostFun(db)},
          {text: "Συνολικό κόστος εξοπλισμού: " + String(db.runningCost.EquipmentExpenses) + "€", bold: true},
          " "," ",
          // Section 4
          {text: "Προϊόντα - Υπηρεσίες", style: "sectionHeader"},
          " ",
          {ol: this.productsFun(db)},
          " "," ",
          // Section 5
          {text: "Ανάλυση Αγοράς", style: "sectionHeader", pageBreak: "before"},
          " ",
          // Subsection 5.1
          {text: "5.1 Ανάλυση SWOT:", style: "subSectionHeader"},
          " ",
          {columns: [{width: '50%', stack: ["Δυνατά: ", {ul: db["swot"][0].Strong}]},
                     {width: '50%', stack: ["Αδύναμα: ", {ul: db["swot"][0].Weak}]},]
          },
          " ",
          {columns: [{width: '50%', stack: ["Ευκαιρίες: ", {ul: db["swot"][0].Opportunities}]},
                     {width: '50%', stack: ["Απειλές: ", {ul: db["swot"][0].Threats}]}]
          },
          " "," ",
          // Subsection 5.2
          {text: "5.2 Ανάλυση PESTEL:", style: "subSectionHeader"},
          " ",
          {ol: this.pestelFun(db)},
          " "," ",
          // Subsection 5.3
          {text: "5.3 Γενικές Παρατηρήσεις:", style: "subSectionHeader"},
          " ",
          db["note"][0].Text,
          " "," ",
          // Section 6
          {text: "Στρατηγική Marketing", style: "sectionHeader"},
          " ",
          // Subsection 6.1 
          {text: "6.1 Στρατηγική:", style: "subSectionHeader"},
          " ",
          "Κανάλια προβολής: "              + db["strategy"][0].Promotion,
          "Κανάλια διανομής: "              + db["strategy"][0].Contribution,
          "Τεχνικές εισαγωγής στην αγορά: " + db["strategy"][0].MarketEntry,
          "Δημόσιες σχέσεις: "              + db["strategy"][0].PublicRelations,
          "Κινήσεις προς αποφυγείν: "       + db["strategy"][0].Avoid,
          " "," ",
          // Subsection 6.2
          {text: "6.2 Ενέργειες Marketing:", style: "subSectionHeader"},
          " ", 
          {ol: this.marketingActionsFun(db)},
          " "," ", 
          // Section 7
          {text: "Χρηματοοικονομικός Σχεδιασμός", style: "sectionHeader"},
          " ",
          // Subsection 7.1
          {text: "7.1 Κόστος Έναρξης:", style: "subSectionHeader"},
          " ",
          {ol: this.startActionsFun(db)},
          " ", " ",     
          // Subsection 7.2
          {text: "7.2 Κόστος Λειτουργίας:", style: "subSectionHeader"},
          " ", 
          {ol: this.functionCostFun(db)},
          {text: "Συνολικό κόστος λειτουργίας: " + String(db.functionCost.FunctionsTotalCost) + "€", bold: true},
          " "," ",
          // Subsection 7.3
          {text: "7.3 Νεκρά σημεία:", style: "subSectionHeader"},
          " ",
          {ol: this.deadspotsFun(db)},
          " "," ",
          // Section 8
          {text: "Χρονοδιάγραμμα", style: "sectionHeader"},
          " "," ",
          // Section 9
          {text: "Παράρτημα", style: "sectionHeader"},
          " ",
          {ol: this.linksFun(db)},
          " "," ",
          // Section 10
          {text: "Σύνοψη", style: "sectionHeader"},
          " ",
          "Κείμενο: " + db["conclusion"][0].Text

        ], // Content array end

        styles: {
          sectionHeader: {
            bold: true, underline: true, fontSize: 20, alignment: "left", decoration:"underline"
          },
          subSectionHeader: {
            bold: true, underline: true, fontSize: 15, alignment: "left", decoration:"underline"
          }
        }
      } // docDefinition end
        
      // Download the PDF, named after the business name given in section 1.1
      pdfMake.createPdf(docDefinition).download(db["identity"][0].Name + "BusinessPlan.pdf");
    } // ExportFun end    
  }
}
</script>

<style>
/* APP */
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
    border-bottom: 0.1px solid black;
}
.head__logo {
    margin-left: 20px;
}
.head__export {
    color: #fff;
    display: flex;
    margin-right: 100px;
    align-items: center;
    cursor: pointer;
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
    overflow-y: scroll;
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
.sections-menu-ul{
list-style-type: none;
padding-left:0px;
}
.sections-menu-ul ul{
display: none;
list-style-type: none;
background-color: rgb(40, 44, 63);
padding-left:0px;
}
.sections-menu-ul li.tap ul{
display: block;
}
.sections-menu a{
    padding: 10px 0 10px 20px;
    display: block;
    color:rgb(202, 202, 203);
    padding-left:15px;
    text-decoration:none;
}
.sections-menu .sub-arrow:after{
    content: '\203A';
    float:right;
    margin-right: 20px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
}
.activeSection{
  background-color:rgb(79, 84, 115);
}
a.subSection{
  padding-left:25px;
}
  /* BASIC ELEMENTS */
  .basic_button {
  background-color: rgb(24, 146, 105);
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
    </style>
