<template>
  <div class="skeleton">

    <header class="head">
        <div class="head__logo">
            <!--<img src="../assets/logo.png" alt="Logo">-->
        </div>
        <div class="head__export">
            <i class="fa fa-cloud-download fa-2x" aria-hidden="true"></i>
            <button @click="exportFunction()">Export</button>
        </div>
        <img class="head__avatar" src="../assets/elvis.jpg" alt="Avatar">
    </header>

    <div class="main_container">
        <nav>
            <div class="sections-menu">
                <ul>
                    <li>
                      <a href="">ΕΠΙΧΕΙΡΗΜΑΤΙΚΟ ΜΟΝΤΕΛΟ</a>
                      <ul>
                        <router-link to="/identity" tag="li" class="">
                          <a>ΤΑΥΤΟΤΗΤΑ</a>
                        </router-link>
                        <router-link to="/description" tag="li" class="">
                          <a>ΠΕΡΙΓΡΑΦΗ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΑΝΘΡΩΠΙΝΟ ΔΥΝΑΜΙΚΟ</a>
                      <ul>
                        <router-link to="/managers" tag="li" class="">
                          <a>ΟΜΑΔΑ ΔΙΟΙΚΗΣΗΣ</a>
                        </router-link>
                        <router-link to="/partners" tag="li" class="">
                          <a>ΕΞΩΤΕΡΙΚΟΙ ΣΥΝΕΡΓΑΤΕΣ</a>
                        </router-link>
                        <router-link to="/humancosts" tag="li" class="">
                          <a>ΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΕΓΚΑΣΤΑΣΕΙΣ - ΕΞΟΠΛΙΣΜΟΣ</a>
                      <ul>
                        <router-link to="/faculties" tag="li" class="">
                          <a>ΤΟΠΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ</a>
                        </router-link>
                        <router-link to="/equipment" tag="li" class="">
                          <a>ΕΞΟΠΛΙΣΜΟΣ</a>
                        </router-link>
                        <router-link to="/running-cost" tag="li" class="">
                          <a>ΑΝΑΛΥΣΗ ΚΟΣΤΟΥΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΠΡΟΪΌΝΤΑ</a>
                      <ul>
                        <router-link to="/characteristics" tag="li" class="">
                          <a>ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ</a>
                        </router-link>
                        <router-link to="/copyrights" tag="li" class="">
                          <a>ΠΝΕΥΜΑΤΙΚΗ ΙΔΙΟΚΤΗΣΙΑ</a>
                        </router-link>
                        <router-link to="/revenues" tag="li" class="">
                          <a>ΑΝΑΛΥΣΗ ΕΣΟΔΩΝ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΑΝΑΛΥΣΗ ΑΓΟΡΑΣ</a>
                      <ul>
                        <router-link to="/swot" tag="li" class="">
                          <a>ΑΝΑΛΥΣΗ SWOT</a>
                        </router-link>
                        <router-link to="/pestel-factors" tag="li" class="">
                          <a>ΑΝΑΛΥΣΗ PESTEL</a>
                        </router-link>
                        <router-link to="/market-note" tag="li" class="">
                          <a>ΓΕΝΙΚΕΣ ΠΑΡΑΤΗΡΗΣΕΙΣ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΣΤΡΑΤΗΓΙΚΗ MARKETING</a>
                      <ul>
                        <router-link to="/strategy" tag="li" class="">
                          <a>ΣΤΡΑΤΗΓΙΚΗ</a>
                        </router-link>
                        <router-link to="/marketing-actions" tag="li" class="">
                          <a>ΕΝΕΡΓΕΙΕΣ MARKETING</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <a href="">ΧΡΗΜΑΤΟΟΙΚΟΜΙΚΟΣ ΣΧΕΔΙΑΣΜΟΣ</a>
                      <ul>
                        <router-link to="/start-actions" tag="li" class="">
                          <a>ΚΟΣΤΟΣ ΕΝΑΡΞΗΣ</a>
                        </router-link>
                        <router-link to="/function-cost" tag="li" class="">
                          <a>ΚΟΣΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ</a>
                        </router-link>
                        <router-link to="/dead-spot" tag="li" class="">
                          <a>ΝΕΚΡΟ ΣΗΜΕΙΟ</a>
                        </router-link>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/timeline" tag="a" class="">ΧΡΟΝΟΔΙΑΓΡΑΜΜΑ</router-link>
                    </li>
                    <li>
                      <router-link to="/timeline" tag="a" class="">ΣΥΝΟΨΗ</router-link>
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

        .skeleton {
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
            ;
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

        .sections-menu {}

        .sections-menu ul {
            list-style: none;
            margin: 0;
        }

        .sections-menu ul li {
            padding: 15px;
            position: relative;
            /* width: 350px; */
            border-top: 1px solid black;
            background-color: rgb(30, 33, 51);
        }

        .sections-menu ul li {
            border-right: 5px solid rgb(61, 65, 90);
        }

        .sections-menu ul ul {
            opacity: 0;
            position: absolute;
            visibility: hidden;
            left: 100%;
            top: -2%;
            background-color: rgb(40, 44, 63);
        }

        .sections-menu ul ul li {
            background-color: rgb(79, 84, 115);
            width: 250px;
        }

        .sections-menu ul li:hover ul {
            opacity: 1;
            visibility: visible;
        }

        .sections-menu ul li a {
            color: white;
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
