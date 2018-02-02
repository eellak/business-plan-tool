var url = "localhost:52800";
var businessPlanId = 1;
new Vue({
    el: 'main',
    data: {
        businessPlanId: businessPlanId,
        notes: "",
        myObj: null,
    },
    methods: {
        saveData: function() {
            if (this.myObj == null) {
              this.myObj = {
                "BusinessPlanId": this.businessPlanId,
                "Text": this.notes
              }
              axios.post(url +"/api/note",this.myObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else {
              axios.put(url +"/api/note/" + this.businessPlanId,this.myObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        },
    },
    created: function() {
            var that = this;
            axios.get(url +"/api/note/" + this.businessPlanId)
            .then(function (response) {
                var obj =response.data;
                that.myObj = obj;
                if (obj != null) {
                  that.notes = obj.Text;
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
});
