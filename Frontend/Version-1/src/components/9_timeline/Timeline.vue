<template>
	<div class="timeline">
		<button class="instructions" id="myBtn" >ΟΔΗΓΙΕΣ</button>
		<div class="container">
			<svg id="gantt"></svg>
		</div>

		<!-- The Modal -->
		<div id="myModal" class="modal">

			<!-- Modal content -->
			<div class="modal-content">
				<span class="close">&times;</span>
				<p>
				-Πιάσε με το ποντίκι τις άκρες απο κάθε ενέργεια και σύρε τις ανάλογα για να διαμορφώσεις το χρονικό διάστημα που θες να εκτείνεται η κάθε ενέργεια. 
				</p>
				<p>
				-Μπορείς να σύρεις και την ενέργεια όπως είναι πιάνοντας τη με το ποντίκι και κρατώντας το παρατεταμένα όση ώρα μετατοπίζεις την ενέργεια.
				</p>
				<p>
				-Κάνοντας κλικ με το ποντίκι στο όνομα κάθε ενέργειας, εμφανίζονται πληροφορίες σχετικά με τη διάρκεια της. Για να τις αποκρύψεις, απλώς κάνε κλικ σε οποιοδήποτε άλλο σημείο του χρονοδιαγράμματος.
				</p>
			</div>
			<div id="milestones"></div> 
		</div>
	</div>
</template>

<script>
export default {
	name: 'milestones',
	data() {
		return {
			tasksIDs: [] ,
			tasksNames: [] ,
			start: [] ,
			end: [],
			tasks: []
		}
	},
	created() {
		this.createGanttDiagram()
	},
	methods: {
		createGanttDiagram() {
           axios.get('http://play-trinity.com/theo/bplantool/api/equipment')
           .then(response => {
               for (i=0; i<response.data.length; i++) {
                   this.tasksIDs.push(response.data[i].ID)
                   this.tasksNames.push(response.data[i].EquipType)
                   this.start.push('2018-01-01')
                   this.end.push('2018-02-01')
               }
               for (i=0; i<response.data.length; i++) {
    
                    this.tasks.push({
                    id: this.tasksIDs[i],
                    name: this.tasksNames[i],
                    start: this.start[i],
                    end: this.end[i]
                    }) 
                }
            })
           .catch(function (error) {
            console.log(error)
            })
           
            axios.get('http://play-trinity.com/theo/bplantool/api/faculty')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Adress)
                   this.start.push('2018-01-01')
                   this.end.push('2018-02-01')                    
                }
                for (i=j; i<j+response.data.length; i++) {
    
                    this.tasks.push({
                    id: this.tasksIDs[i],
                    name: this.tasksNames[i],
                    start: this.start[i],
                    end: this.end[i]
                    }) 
                }
                 
            })
            .catch(function (error) {
            console.log(error)
            })

            axios.get('http://play-trinity.com/theo/bplantool/api/MarketingAction')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Title)
                   this.start.push('2018-01-01')
                   this.end.push('2018-02-01')                    
                }
                for (i=j; i<j+response.data.length; i++) {
    
                    this.tasks.push({
                    id: this.tasksIDs[i],
                    name: this.tasksNames[i],
                    start: this.start[i],
                    end: this.end[i]
                    }) 
                }
               
            })
            .catch(function (error) {
            console.log(error)
            })
            axios.get('http://play-trinity.com/theo/bplantool/api/StartAction')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Name)
                   this.start.push('2018-01-01')
                   this.end.push('2018-02-01')                    
                }
                for (i=j; i<j+response.data.length; i++) {
    
                    this.tasks.push({
                    id: this.tasksIDs[i],
                    name: this.tasksNames[i],
                    start: this.start[i],
                    end: this.end[i]
                    }) 
                }

            var gantt = new Gantt("#gantt", this.tasks)
            gantt.change_view_mode('Month') 
        

            })
            .catch(function (error) {
            console.log(error)
            })
          
        }
  
	}
}

</script>

<style scoped>
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
	overflow-y: scroll;            
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
	width: 350px;
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
	background-color: rgb(25, 145, 105);
	width: 100px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.instructions {
	position: absolute;
	margin-left: 850px;
	margin-top: 20px;
	background-color: rgb(41, 152, 88);
	color: white;
	width: 100px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-style: none;
	cursor: pointer;
}
.container {
	position:static;
	margin-left:80px;
	margin-top:80px;
	height:600px;
	width:1450px;
	overflow:auto;
	background-color:white;
	color:white;
	padding:10px;
}
/* The Modal (background) */
.modal {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0,0,0); /* Fallback color */
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 40%;
}

/* The Close Button */
.close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
}
</style>
