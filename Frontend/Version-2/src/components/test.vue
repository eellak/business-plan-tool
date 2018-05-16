<template>
    <div class="test">
        <!-- <button id="but_export" @click="exportf()" >EXPORT</button> -->
        <el-dropdown @command="handleCommand">
            <el-button type="primary">EXPORT<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="pdf" >to PDF</el-dropdown-item>
                <el-dropdown-item command="word" divided>to Word</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <div id="docx">
            <div class="testdiv">
                <h1 id="header">Fusce luctus convallis justo</h1>
                <p> 
                    Suspendisse vestibulum dignissim quam. Integer vel augue. Phasellus nulla purus, interdum ac, venenatis non, varius rutrum, leo. P
                    ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a eros. Class aptent taciti sociosqu
                    ad litora torquent per conubia nostra, per inceptos hymenaeos. Fusce magna mi, porttitor quis, convallis eget, sodales ac, urna. Ph\
                    asellus luctus venenatis magna. Vivamus eget lacus. Nunc tincidunt convallis tortor. Duis eros mi, dictum vel, fringilla sit amet, ferment
                    um id, sem. Phasellus nunc enim, faucibus ut, laoreet in, consequat id, metus. Vivamus dignissim. Cras lobortis tempor velit. Phasellus nec diam
                    ac nisl lacinia tristique. Nullam nec metus id mi dictum dignissim. Nullam quis wisi non sem lob
                    ortis condimentum. Phasellus pulvinar, nulla non aliquam eleifend, tortor wisi scelerisque felis, in sollicitudin arcu ante lacinia leo.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    methods: {
        handleCommand(command){
            if(command=="pdf"){
                this.export_to_pdf();
                 this.$message({
                    message: 'Export to PDF',
                    type: 'success'
                });
            }else{
                if(!window.Blob){
                    this.$message.error('Oops, your browser doesn\'t support export.');
                }else{
                    this.export_to_doc();
                    this.$message({
                        message: 'Export to .doc',
                        type: 'success'
                    });
                }
            }
        },
        export_to_doc() {
            var html, link, blob, url,css;
            
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
                "Όνομα επιχείρησης: "      + "PAOK",
                "Ημερομηνία δημιουργίας: " + "PAOK",
                "Νομική μορφή: "           + "PAOK",
                "Τύπος επιχείρησης: "      + "PAOK",
                " ",
                "Πελάτες: ",
                " ",
                // Due to the "ol" tag, it needs curly brackets. Equivalent to {ol: [firstItem, secondItem]} syntax.
                {ol: "PAOK"},
                " "," ", // 2 newlines between sections/subsections
                // Subsection 1.2
                {text: "1.2 Περιγραφή Επιχείρησης:", style: "subSectionHeader"},
                " ",
                // Simple string element coming straight from db
                "PAOK",
                " "," ",
                // Section 2
                {text: "Ανθρώπινο Δυναμικό", style: "sectionHeader"},
                " ",
                // Subsection 2.1
                {text: "2.1 Ομάδα Διοίκησης:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"}, // Call dynamic content creation function for managers
                " "," ",
                // Subsection 2.2
                {text: "2.2 Προσωπικό:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Subsection 2.3
                {text: "2.3 Εξωτερικοί Συνεργάτες:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Subsection 2.3
                {text: "2.4 Ανάλυση Κόστους:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Section 3
                {text: "Εγκαταστάσεις - Εξοπλισμός", style: "sectionHeader"},
                " ",
                // Subsection 3.1
                {text: "3.1 Τόπος Εγκατάστασης:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Subsection 3.2
                {text: "3.2 Εξοπλισμός:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Subsection 3.3
                {text: "3.3 Ανάλυση Κόστους:", style: "subSectionHeader"},
                " ",
                {text: "Κόστος εγκαταστάσεων:", bold: true},
                " ",
                {ol: "PAOK"},
                {text: "Συνολικό κόστος εγκαταστάσεων: " + "PAOK" + "€", bold: true},
                " ",
                {text: "Κόστος εξοπλισμού:", bold: true},
                " ",
                {ol: "PAOK"},
                {text: "Συνολικό κόστος εξοπλισμού: " + "PAOK" + "€", bold: true},
                " "," ",
                // Section 4
                {text: "Προϊόντα - Υπηρεσίες", style: "sectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Section 5
                {text: "Ανάλυση Αγοράς", style: "sectionHeader", pageBreak: "before"},
                " ",
                // Subsection 5.1
                {text: "5.1 Ανάλυση SWOT:", style: "subSectionHeader"},
                " ",
                {columns: [{width: '50%', stack: ["Δυνατά: ", {ul: "PAOK"}]},
                            {width: '50%', stack: ["Αδύναμα: ", {ul: "PAOK"}]},]
                },
                " ",
                {columns: [{width: '50%', stack: ["Ευκαιρίες: ", {ul: "PAOK"}]},
                            {width: '50%', stack: ["Απειλές: ", {ul: "PAOK"}]}]
                },
                " "," ",
                // Subsection 5.2
                {text: "5.2 Ανάλυση PESTEL:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Subsection 5.3
                {text: "5.3 Γενικές Παρατηρήσεις:", style: "subSectionHeader"},
                " ",
                "PAOK",
                " "," ",
                // Section 6
                {text: "Στρατηγική Marketing", style: "sectionHeader"},
                " ",
                // Subsection 6.1 
                {text: "6.1 Στρατηγική:", style: "subSectionHeader"},
                " ",
                "Κανάλια προβολής: "              + "PAOK",
                "Κανάλια διανομής: "              + "PAOK",
                "Τεχνικές εισαγωγής στην αγορά: " + "PAOK",
                "Δημόσιες σχέσεις: "              + "PAOK",
                "Κινήσεις προς αποφυγείν: "       + "PAOK",
                " "," ",
                // Subsection 6.2
                {text: "6.2 Ενέργειες Marketing:", style: "subSectionHeader"},
                " ", 
                {ol: "PAOK"},
                " "," ", 
                // Section 7
                {text: "Χρηματοοικονομικός Σχεδιασμός", style: "sectionHeader"},
                " ",
                // Subsection 7.1
                {text: "7.1 Κόστος Έναρξης:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " ", " ",     
                // Subsection 7.2
                {text: "7.2 Κόστος Λειτουργίας:", style: "subSectionHeader"},
                " ", 
                {ol: "PAOK"},
                {text: "Συνολικό κόστος λειτουργίας: " + "PAOK" + "€", bold: true},
                " "," ",
                // Subsection 7.3
                {text: "7.3 Νεκρά σημεία:", style: "subSectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Section 8
                {text: "Χρονοδιάγραμμα", style: "sectionHeader"},
                " "," ",
                // Section 9
                {text: "Παράρτημα", style: "sectionHeader"},
                " ",
                {ol: "PAOK"},
                " "," ",
                // Section 10
                {text: "Σύνοψη", style: "sectionHeader"},
                " ",
                "Κείμενο: " + "PAOK"

                ], // Content array end

                styles: {
                sectionHeader: {
                    bold: true, underline: true, fontSize: 20, alignment: "left", decoration:"underline"
                },
                subSectionHeader: {
                    bold: true, underline: true, fontSize: 15, alignment: "left", decoration:"underline"
                }
                }
            }
            // console.log(typeof docDefinition);
            css = ('\
                    h1 {font-family: "Times New Roman", Georgia, Serif; font-size: 16pt;}\
                    p {font-family: "Times New Roman", Georgia, Serif; font-size: 14pt;}\
            ');
            
            html = window.docx.innerHTML;
            blob = new Blob(['\ufeff', html], {
                type: 'application/msword'
            });
            url = URL.createObjectURL(blob);
            link = document.createElement('A');
            link.href = url;
            // Set default file name. 
            // Word will append file extension - do not add an extension here.
            link.download = 'MyBusinessPlan';   
            document.body.appendChild(link);
            if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, 'MyBusinessPlan.doc'); // IE10-11
                    else link.click();  // other browsers
            document.body.removeChild(link);
        },
        // export_to_doc2(){
        //     var doc = new docx.Document();

        //     var paragraph = new docx.Paragraph("Hello World");
        //     var institutionText = new docx.TextRun("University College London").bold();
        //     var dateText = new docx.TextRun("5th Dec 2015").tab().bold();
        //     paragraph.addRun(institutionText);
        //     paragraph.addRun(dateText);

        //     var exporter = new docx.ExpressPacker(doc, res);
        //     exporter.pack('My Document');
        // },
        export_to_pdf() {
            var mystring = window.docx.innerHTML;
            var docDef = { content: [mystring]};
            pdfMake.createPdf(docDef).download();
        },
    }
}
</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.3.8/lib/theme-chalk/index.css");
    .test{
        padding-left: 200px;
        padding-right: 300px;
        padding-top: 10px;
        text-align: justify;
    }
    .el-dropdown {
    vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .testdiv{
        font-family: "Times New Roman", Times, serif;
    }
    #header{
        text-align: center;
        text-decoration: underline;
    }
</style>