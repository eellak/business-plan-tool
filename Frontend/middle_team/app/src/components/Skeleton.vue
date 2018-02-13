<template>
  <div class="skeleton">
  <!-- <body> -->
    <header class="head">
        <div class="head__logo">
            <img src="../assets/Logo.png" alt="Logo">
        </div>
        <div class="head__export">
            <i class="fa fa-cloud-download fa-2x" aria-hidden="true"></i>
            <button @click="exportFunction()">Export</button>
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
      <!-- </body> -->
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
  		return String(date).slice(6) + "/" 
	 			+ String(date).slice(4, 6) + "/"
	 			+ String(date).slice(0, 4)
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
					"Όνομα επιχείρησης: " 		 + db.identity[0].Name,
					"Ημερομηνία δημιουργίας: " + this.dateParser(db.identity[0].Date),
					"Νομική μορφή: " 		       + db.identity[0].LegalForm,
					"Τύπος επιχείρησης: "      + db.identity[0].OrderOfBusiness
					
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
			pdfMake.createPdf(docDefinition).download(db.identity[0].Name + "BusinessPlan.pdf");
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
