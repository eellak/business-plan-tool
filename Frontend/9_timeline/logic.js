var app = new Vue({
    
    el: '#milestones' ,

    data: {

        tasksIDs: [] ,
        tasksNames: [] ,
        start: [] ,
        end: [],
        tasks: []
    },

/*need from Faculty: ID, Adress Start_date
            Equipment: ID, EquipType, Acquisition_date !!Να τους πω να αλλάξουν τον τρόπο που αναπαριστούν τις ημερομηνίες!!
            MarketingAction: ID, Title, ImplementationTime ****  http://localhost:52800/api/MarketingAction
            StartAction: ID, Name   http://localhost:52800/api/StartAction  */



    created(){
        this.createGanttDiagram()
    },

    methods: {
        createGanttDiagram() {
           axios.get('http://localhost:52800/api/equipment')
           .then(response => {
               for (i=0; i<response.data.length; i++) {
                   this.tasksIDs.push(response.data[i].ID)
                   this.tasksNames.push(response.data[i].EquipType)
                   this.start.push('01-01-18')
                   this.end.push('01-02-18')
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
           
            axios.get('http://localhost:52800/api/faculty')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Adress)
                   this.start.push('01-01-18')
                   this.end.push('01-02-18')                    
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

            axios.get('http://localhost:52800/api/MarketingAction')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Title)
                   this.start.push('01-01-18')
                   this.end.push('01-02-18')                    
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
            axios.get('http://localhost:52800/api/StartAction')           
            .then(response => {
                var j= this.tasksIDs.length
                for (i=j; i<j+response.data.length; i++) {
                   this.tasksIDs.push(response.data[i-j].ID)
                   this.tasksNames.push(response.data[i-j].Name)
                   this.start.push('01-01-18')
                   this.end.push('01-02-18')                    
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

}) 