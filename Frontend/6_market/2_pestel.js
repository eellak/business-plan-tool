var url = "http://localhost:52800";
var businessPlanId = 1;

new Vue({
    el: 'main',
    data: {
      businessPlanId: businessPlanId,
      descriptions: [],
      examples: [],
      myObj: [],
      numberOfFactors: 6
    },
    methods: {
      saveData: function() {
        for(i=0; i<this.numberOfFactors; i++){
          tempObj = {
            "ID": i+1,
            "BusinessPlanId": this.businessPlanId,
            "Description": this.descriptions[i],
            "Example": this.examples[i]
          }
          if(!this.equals(tempObj,this.myObj[i])){
            if (this.myObj[i] == null) {
              axios.post(url +"/api/factor", tempObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else {
              axios.put(url +"/api/factor/" + this.businessPlanId, tempObj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            this.myObj[i] = tempObj;
          }
        }
      },
      equals: function (objectA, objectB) {
        if(JSON.stringify(objectA) === JSON.stringify(objectB)){
          return true;
        }
        return false;
      }
    },
    beforeMount: function() {
      for(i=0; i<this.numberOfFactors; i++){
        this.descriptions.push("");
        this.examples.push("");
        this.myObj.push(null);
      }
    },
    mounted: function() {
      var that = this;
      axios.get(url +"/api/factor/" + this.businessPlanId)
      .then(function (response) {
          var obj = response.data;
          for(i=0; i<obj.length; i++){
            var id = obj[i].ID;
            if(id <= that.numberOfFactors){
              that.myObj[id-1] = obj[i];
              Vue.set(that.descriptions, id-1, obj[i].Description);
              Vue.set(that.examples, id-1, obj[i].Example);
            }
          }
          console.log(response)
      })
      .catch(function (error) {
          console.log(error)
      })
    }
});
