<template>
  <div class="skeleton">
  <body>

    <div class="main_container">
     <nav>
      <div>
        <div>
            <!-- <p style="font-size:34px;color:white;margin-top:20px;margin-bottom:30px;margin-left:20px;">BP TOOL</p> -->
            <img class="head__logo" src="../assets/logo.png" alt="Logo" @click="goHome()">
        </div>
            <div class="sections-menu">
                <ul class="sections-menu-ul">
                  <li>
                    <router-link to="/basic-information" tag="a" active-class="activeMenuProps">Βασικά στοιχεία<i class="sections-menu__i" v-if="$store.state.bpProgress.basicInformationIsComplete">✓</i></router-link>
                  </li>
                  <li>
                    <router-link to="/internal-analysis" tag="a" active-class="activeMenuProps">Εσωτερική ανάλυση<i class="sections-menu__i" v-if="$store.state.bpProgress.internalAnalysisIsComplete">✓</i></router-link>
                  </li>
                  <li>
                    <router-link to="/external-analysis" tag="a" active-class="activeMenuProps">Εξωτερική ανάλυση<i class="sections-menu__i" v-if="$store.state.bpProgress.externalAnalysisIsComplete">✓</i></router-link>
                  </li>
                    <li>
                      <router-link to="/strategy" tag="a" active-class="activeMenuProps">Στρατηγική Marketing<i class="sections-menu__i" v-if="$store.state.bpProgress.strategyIsComplete">✓</i></router-link>
                    </li>
                    <li>
                      <router-link to="/financial-plan" tag="a" active-class="activeMenuProps">Οικονομικό Πλάνο<i class="sections-menu__i" v-if="$store.state.bpProgress.financialPlanIsComplete">✓</i></router-link>
                    </li>
                    <li>
                      <router-link to="/test" tag="a" active-class="activeMenuProps">ExportBeta</router-link>
                    </li>
                </ul>
            </div>
          </div>
                  <div class="avatar_box">
                  <img class="head__avatar" src="../assets/avatar.png" alt="Avatar">
                  <p class="avatar_name">Naoum Mylonas</p>
                  </div>
  
        </nav>
                                                
        <div style="display:flex;width:100%;">  <!-- ΔΙΑΣΤΑΣΕΙΣ ΟΛΟΥ ΤΟΥ ΠΑΡΑΘΥΡΟΥ --> 
        <div style="min-width:250px;height:100%;"></div>      <!-- ΔΙΑΣΤΑΣΕΙΣ ΤΟΥ nav -->

        <main>
            <router-view/>                            <!-- main -->
        </main>	
        <div style="min-width:300px;height:100%;background:blue;"></div>  <!-- ΔΙΑΣΤΑΣΕΙΣ ΤΟΥ right_column -->
        </div>
	
        
        <div class="right_column">
      <div>
        <div class="instructions_body">
          <el-collapse v-model="activeAccordion" @change="handleChange()">
            <el-collapse-item class="instructions_title" title="Οδηγίες" name="1">
              <div class="instructions">{{this.$store.state.newDesc[descId()].Description}}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
			</div>
      <div style="display:flex; justify-content:center;">
        <el-progress type="circle" :percentage="(calculateCompleteness()/5)*100" color="#62AC30" style="margin-top:0px;"></el-progress>
      </div>
      <div class="save_big_button"><p>Αποθήκευση</p></div>
    </div>


    </div>


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
      activeAccordion: '1'
    }
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
    calculateCompleteness() {
      var obj = this.$store.state.bpProgress
      var sumOfTrues = 0
      for (var o in obj) {
        if (obj[o] === true) {
          sumOfTrues++
        }
      }
      
      return sumOfTrues
    },
    goHome() {
      this.$router.push('/')
    },
    handleChange() {
      console.log("handleChange()")
    },
    // This function returns a parsed date from the db form(YYYYMMDD) into proper form with slashes(DD/MM/YYYY)
    dateParser(date){
      return String(date).slice(6) + "/" // Slice DD, 6-end
        + String(date).slice(4, 6) + "/" // Slice MM, 4-5
        + String(date).slice(0, 4)       // Slice YYYY, 0-3
    },
    
    descId(){
      var id=0;
      var path = this.$route.path;
      console.log(path)
      
      if(path === "/basic-information"){
        return id=1;
      }
      else if(path === "/internal-analysis"){
        return id=2;
      }
      else if(path === "/external-analysis"){
        return id=3;
      }
      else if(path === "/strategy"){
        return id=4;
      }
      else if(path === "/financial-plan"){
        return id=5;
      }
      
      return id;
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
                             {text: "Διεύθυνση: "             + facultiesObj[i].Adress},
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
      var facultyCostObj = db["runningCost"][0]["FacultyCosts"]

      for (var i = 0; i < facultyCostObj.length; i++){
        facultyCostArray.push([{text: "ID εγκατάστασης: "     + facultyCostObj[i].FacultyId},
                               {text: "Κόστος εγκατάστασης: " + facultyCostObj[i].Cost + "€"}, " "])
      }

      return facultyCostArray
    },

    equipmentCostFun(db){
      var equipmentCostArray = []
      var equipmentCostObj = db["runningCost"][0]["EquipmentCosts"]

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
      var functionCostObj = db["functionCost"][0].Functions

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
          {text: "Συνολικό κόστος εγκαταστάσεων: " + String(db["runningCost"][0].FacultyExpenses) + "€", bold: true},
          " ",
          {text: "Κόστος εξοπλισμού:", bold: true},
          " ",
          {ol: this.equipmentCostFun(db)},
          {text: "Συνολικό κόστος εξοπλισμού: " + String(db["runningCost"][0].EquipmentExpenses) + "€", bold: true},
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
          {text: "Συνολικό κόστος λειτουργίας: " + String(db["functionCost"][0].FunctionsTotalCost) + "€", bold: true},
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
    width: 240px;
    padding: 5px;
    cursor: pointer;
}
.head__export {
    color: #fff;
    display: flex;
    margin-right: 100px;
    align-items: center;
}
.head__avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;

}
.avatar_box{
    display:flex;
    margin-left:20px;
    height: 40px;
    margin-bottom: 20px;
}
.avatar_name{
  color: white;
  margin-left:15px;
  margin-top:10px;
  text-align:center;
}

.head__export p {
    margin-left: 5px;
    font-size: 20px;
}
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

/* Check button: "Ολοκληρώθηκε" */
.check-button {
  padding: 10px 35px;
	border: 1px solid transparent;
  text-align: center;
  font-size: 16px;
  width: 220px;
	border-radius: 3px;
}
.check-button:hover {
	transition: 0.25s;
	cursor: pointer;
}

.check-button.isDone {
	color: #fff;
	background-color: #62AC30;
}
.check-button.isNotDone {
	color: #62AC30;
	background-color: #fff;
	border: 1px solid #62AC30;
}

.check-button.isDone:hover {
	color: #62AC30;
	background-color: #fff;
	border: 1px solid #62AC30;
}
.check-button.isNotDone:hover {
	color: #fff;
	background-color: #62AC30;
	border: 1px solid #62AC30;
}

main {
    flex-grow: 1;
    display:flex;
}
.main_container {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height:100%;
    
}
nav {
    background-color: rgb(30, 33, 51);
    width: 250px; 
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: 100%;
    position: fixed;
    overflow-y: auto;                  /* extra */
}
/* SECTIONS MENU */

.sections-menu-ul{
list-style-type: none;
padding-left:0px;
margin-top: 25px;
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
    font-size: 18px;         /*extra*/
}

.sections-menu__i {
  float: right;
  margin-right: 15px;
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

  .right_column{
    width:300px;
    background-color: rgb(247,247,247);
    height: 100%;
    overflow-y: auto;
    position: fixed;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

.button{
	background-color: #299858;
    color: #fff;
    border: #299858;
    padding: 15px;
    text-align: center;
    font-size: 20px;
    width: 160px;
	border-radius:5px;
}

.instructions_button{
    float: right;
}

.main__container{
	display:flex;
	flex-grow: 1;
	margin-left:450px;
}

.main__header{
	margin-left: 10px;
	margin-right: 10px;
}

.main__body{
	margin-top:20px;
	margin-bottom:20px;
	display:flex;
	flex-direction: column;
    flex-grow:1;
}

.main__body_header{
	font-size:20px;
}

.main__footer{
	margin-top:20px;
	margin-right:20px;
    margin-left:20px;	
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
}


.title{
	font-size:18px;
	text-align: center;
	margin-right:50px;
	margin-left:20px;
	text-transform: uppercase;
	width:300px;
	display:flex;
	justify-content:flex-end;
}

.steps{
	border-style: solid;
    border-width: 0px;
	padding:20px 20px 20px 20px;
	border-radius:10px;
	border-color:gray;
	margin:20px 20px 20px 20px;
}

.footer__buttons{
	display:flex;
	justify-content:space-between;
	margin:100px 20px 20px 20px;
}


.instructions_title{
	font-size:18px;
	border-bottom: 2px solid rgb(220,220,220);
	padding-bottom:10px;
	padding-top:10px;
	padding-left:10px;
	color:rgb(30, 33, 51);
}

.instructions_body{
	padding:15px 15px 15px 15px;
	color:rgb(30, 33, 51);
	font-size:14px;
  
}

.save_big_button{
margin:0 0px 0px 0px;
width:300px;
height:60px;
text-align:justify;
background-color:rgb(30, 33, 51);
position:relative;
}

.save_big_button p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:16px;
    color:white;
}

/*overrides */
.el-collapse-item__header{
  background-color: transparent;
  font-size: 18px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  font: rgb(30, 33, 51);
}
.el-collapse-item__content {
    background-color:#F7F7F7;
    padding-bottom: 25px;
    padding-right: 20px;
    font-size: 14px;
    color: #303133;
    line-height: 1.769230769230769;
    max-height: 400px; /*76px = two items 1 is 38px*/
    overflow: overlay;
    
}

.activeMenuProps {
  color: #333955 !important;
  background-color: #FFF;
}

    </style>
