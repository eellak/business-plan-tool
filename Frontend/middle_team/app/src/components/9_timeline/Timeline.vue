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
	name: '#milestones',
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

</style>
