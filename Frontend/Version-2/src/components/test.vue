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
                <h1>Bussiness Plan for {{this.$store.state.companyName}} </h1>
                <table style="width:100%">
                    <tr>
                        <td>Oνομα Εταιρίας</td>
                        <td>{{this.$store.state.companyName}}</td>
                    </tr>
                    <tr>
                        <td>Διευθυνση</td>
                        <td>{{this.$store.state.address}}</td>
                    </tr>
                    <tr>
                        <td>Τηλέφωνο</td>
                        <td>{{this.$store.state.telephone}}</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>{{this.$store.state.email}}</td>
                    </tr>
                    <tr>
                        <td>Ιστοσελίδα</td>
                        <td>{{this.$store.state.website}}</td>
                    </tr>
                    <tr>
                        <td>Φύση Εταιρίας</td>
                        <td>{{this.$store.state.businessNature}}</td>
                    </tr>
                    <tr>
                        <td>Κεφάλαιο</td>
                        <td>{{this.$store.state.capital}}</td>
                    </tr>
                    <tr>
                        <td>Έτος Ιδρύσεως</td>
                        <td>{{this.$store.state.foundationYear}}</td>
                    </tr>
                    <tr>
                        <td>Μέτοχοι</td>
                        <td>{{this.$store.state.strains}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {

    name: 'test',
    methods: {
        // productFun(db){
        //         var charListArray = []
        //         var charListArrayObj=db.products

        //         for (var i = 0; i < charListArrayObj.length; i++){
        //             charListArray [i] = [];
        //             var a3 = Object.keys(charListArrayObj).map(
        //                 function (k) { 
        //                     return charListArrayObj[k];})

                    
        //         }
        //         charListArray = charListArrayObj.slice()
        //         console.log(charListArray)
        //         return charListArray
        // },



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

        content_to_export(db){
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
                {
                    style: 'tableExample',
                    table:{
                        body: [
                            ["Όνομα Επιχείρησης ", db.companyName],
                            ["Διεύθυνση ", db.address],
                            ["Ημερομηνία δημιουργίας " , db.foundationYear],
                            ["Τηλέφωνο "           , db.telephone],
                            ["Ιστοσελίδα" , db.website],
                            ["Φύση της επιχείρησης", db.businessNature],
                            ["Κεφάλαιο", db.capital]
                        ]
                    },
                    layout: {
                        fillColor: function (i, node) {
                        return (i % 2 === 0) ? '#CCCCCC' : null;
                        }
                    }
                },
                " ", " ",

                {text: "1.2 Σύνοψη", style: "subSectionHeader"},
                db.synopsis,

                " ", " ",

                {text: "Ανθρώπινο Δυναμικό", style:"sectionHeader"},

                " ",
                
                {text: "2.1 Μέτοχοι", style:"subSectionHeader"},

                {
                    ul: [
                        db.shareholders[0],
                        db.shareholders[1]
                    ]
                },

                " "," ",

                {text: "2.2 Προιόντα", style:"subSectionHeader"},
                " "," ",
                
                {
                    
                    table:{
                        headerRows:1,
                        
                        body :[
                            [{text: "Τύπος προίοντος", style:"tableHeader"}, {text: "Όνομα προιόντος", style:"tableHeader"},{text:"Πληροφορίες Προιόντος",style:"tableHeader"}],
                            [db.products[0].type, db.products[0].name, db.products[0].details],
                            [db.products[1].type,db.products[1].name, db.products[1].details],
                            [db.products[2].type,db.products[2].name, db.products[2].details]
                        ] 
                    },
                    layout: 'headerLineOnly'
                },

                " ", " ",
                {text: "Τοποθεσία", style: "subSectionHeader"},
                db.location,

                " ", " ",

                {text: "Εξωτερική Ανάλυση", style: "sectionHeader"},

                " ", " ",

                {text:"3.1 Ανάλυση Καταναλωτή", style: "subSectionHeader"},

                " ",

                db.consumerAnalysis,

                " "," ",

                {text: "3.2 Ανάλυση Ανταγωνισμου", style:"subSectionHeader"},

                " ",

                db.competitionAnalysis,

                " ", " ",

                {text: "3.3 Ανάλυση Αγοράς", style: "subSectionHeader"},

                " ",
                
                {
                    style: 'tableExample',
                    table:{
                        body: [
                            ["Σύνθεση", db.marketAnalysis["synthesis"]],
                            ["Τύπος", db.marketAnalysis["type"]],
                            ["Ανταγωνιστες",db.marketAnalysis["competitors"]],
                            ["Περιθώρια Εισόδου",db.marketAnalysis["perithoriaEisodou"]]
                        ]
                    },
                    layout: {
                        fillColor: function (i, node) {
                        return (i % 2 === 0) ? '#CCCCCC' : null;
                        }
                    }
                },

                " ", " ",

                {text: "3.4 Ανάλυση Περιβάλλοντος:", style: "subSectionHeader"},
                
                " ",

                db.enviromentAnalysis,

                {text: "3.5 Ανάλυση SWOT:", style: "subSectionHeader"},
                " ",
                {
                    columns: [
                        {
                            width: '50%',
                            stack: ["Δυνατά: ", {ul: db.swot["strengths"]}]
                        },
                        
                        
                        {
                            width: '50%',
                            stack: ["Αδύνατα: ", {ul: db.swot["weaknesses"]}]
                        }
                    ],                    
                },

                " ",
                {
                    columns: [
                        {
                            width: '50%',
                            stack: ["Ευκαιρίες: ", {ul: db.swot["opportunities"]}]
                        },
                        
                        {
                            width: '50%',
                            stack: ["Κίνδυνοι: ", {ul: db.swot["threats"]}]
                        }
                    ],
                },

                " ", " ",

                {text: "Στρατηγική", style:"sectionHeader"},

                " ",

                {text:"4.1 Στρατηγική των προιώντων", style:"subSectionHeader"},
                
                " ",
                
                db.productStrategy,
                
                " ", " ",

                {text:"4.2 Συμπεριφορά του Καταναλωτή", style:"subSectionHeader"},
                
                " ",
                
                db.consumerBehavior,

                " ", " ",

                {text:"4.3 Μάρκετινγκ Προιώντων", style:"subSectionHeader"},

                " ",

                db.productMarketing,

                " ", " ",

                {text:"4.4 Διανομή Προιώντων", style:"subSectionHeader"},

                " ",

                db.distribution,

                " ", " ",

                {text:"4.5 Προώθηση", style:"subSectionHeader"},

                " ",

                db.promotion,

                " "," ",

                {text:"4.6 Πωλήσεις", style:"subSectionHeader"},
                " ",
                {
                    style: 'tableExample',
                    table:{
                        body: [
                            ["Αξία", db.sales["value"]],
                            ["Χρονοδιάγραμμα Πωλήσεων", db.sales["salesTimelap"]],
                            ["Ποσότητα",db.sales["quantity"]],
                            ["Συνολική Αξία",db.sales["totalValue"]]
                        ]
                    },
                    layout: {
                        fillColor: function (i, node) {
                        return (i % 2 === 0) ? '#CCCCCC' : null;
                        }
                    }
                },
                " ", " ",

                {text:"4.7 Διαχειριστικό Πλάνο", style:"subSectionHeader"},
                " ",
                db.administrativePlan,
                " ", " ",
                
                {text:"Οικονομικό Πλάνο", style:"sectionHeader"},
                " ",

                {text:"5.1 Έξοδα", style:"subSectionHeader"},
                " ",
                {
                    style: 'tableExample',
                    table:{
                        headerRows:1,
                        body: [
                            [{text: "Έτος", style:"tableHeader"}, {text: "Συνολικά Έξοδα", style:"tableHeader"}],
                            [db.expenses[0].year, db.expenses[0].yearExpenses],
                            [db.expenses[1].year, db.expenses[1].yearExpenses],
                            [db.expenses[2].year, db.expenses[2].yearExpenses],
                            
                        ]
                    },
                    layout: 'lightHorizontalLines'
                    
                },
                " ", " ",

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
            return docDefinition
            // console.log(typeof docDefinition);
            css = ('\
                    h1 {font-family: "Times New Roman", Georgia, Serif; font-size: 16pt;}\
                    p {font-family: "Times New Roman", Georgia, Serif; font-size: 14pt;}\
            ');
        },
        
        export_to_doc() {
            // var html, link, blob, url,css;
            // var db = this.$store.state
            
            
            
            //   html = this.content_to_export(db);
            //   blob = new Blob(['\ufeff', html], {
            //       type: 'application/msword'
            //   });
            //   url = URL.createObjectURL(blob);
            //   link = document.createElement('A');
            //   link.href = url;
            //   // Set default file name. 
            //   // Word will append file extension - do not add an extension here.
            //   link.download = 'MyBusinessPlan';   
            //   document.body.appendChild(link);
            //   if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, 'MyBusinessPlan.doc'); // IE10-11
            //           else link.click();  // other browsers
            //   document.body.removeChild(link);
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
            var db = this.$store.state
            pdfMake.createPdf(this.content_to_export(db)).download();
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
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>