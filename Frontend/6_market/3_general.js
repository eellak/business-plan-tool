var url = "http://localhost:52800";
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
          tempObj = {
            "BusinessPlanId": this.businessPlanId,
            "Text": this.notes
          }
          if(!this.equals(tempObj,this.myObj)){
            if (this.myObj == null) {
              axios.post(url +"/api/note",tempObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else {
              axios.put(url +"/api/note/" + this.businessPlanId,tempObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            this.myObj = tempObj;
          }
        },
        equals: function (objectA, objectB) {
          if(JSON.stringify(objectA) === JSON.stringify(objectB)){
            return true;
          }
          return false;
        }
    },
    mounted: function() {
            var that = this;
            axios.get(url +"/api/note/" + this.businessPlanId)
            .then(function (response) {
                var obj =response.data;
                that.myObj = obj;
                if (obj != null) {
                  that.notes = obj.Text;
                }
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
});
