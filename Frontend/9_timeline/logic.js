var app = new Vue({
    
    el: '#milestones' ,

    data: {

        tasksIDs: [] ,
        tasksNames: [] ,
        start: [] ,
        end: []
    },

/*need from Faculty: ID, Start_date
            Equipment: ID, EquipType, Acquisition_date
            MarketingAction: ID, Title, ImplementationTime
            StartAction: ID, Name */


    created(){
        this.loadActions()
    },

    methods: {
        loadActions() {
           axios.get('http://localhost:52800/api/equipment').then(response => {
               //header("Access-Control-Allow-Origin","*")
               for (i=0; i< response.data.length; i++) {
                   this.tasksIDs.push(response.data.ID)
                   this.tasksNames.push(response.data.EquipType)
                   this.start.push(response.data.Acquisition_date)
                   this.end.push(response.data.Acquisition_date)


               }

           })
        }
    }
    

} ) 

var tasks = []

for (i=0; i<app.tasksIDs.length; i++) {
    
    tasks[i]= {
        id: app.tasksIDs[i],
        name: app.tasksNames[i],
        start: app.start[i],
        end: app.end[i],
        progress: 10

  }

}

//var gantt = new Gantt("#gantt", tasks)
//gantt.change_view_mode('Month')


 