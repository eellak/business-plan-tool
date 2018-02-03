var url = "localhost:52800";
var businessPlanId = 1;

new Vue({
    el: 'main',
    data: {
      businessPlanId: businessPlanId,
      spots: [[],[],[],[]],
      advices: [[""],[""],[""],[""]],
      adviceIndex: [0,0,0,0],
      myObj: null
    },
    methods: {
        saveData: function() {
          if (this.myObj == null) {
            this.myObj = {
              "Strong": this.spots[0],
              "Weak": this.spots[1],
              "Opportunities": this.spots[2],
              "Threats": this.spots[3],
              "BusinessPlanId": this.businessPlanId
            }
            axios.post(url +"/api/swot",this.myObj)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }
          else {
            axios.put(url +"/api/swot/" + this.businessPlanId,this.myObj)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        },
        addSpot: function (index) {
            this.spots[index].push("");
        },
        removeSpot: function (index) {
            this.spots[index].pop();
        },
        increaseIndex: function(x) {
            if (this.advices[x].length > this.adviceIndex[x] + 1) {
                Vue.set( this.adviceIndex, x, this.adviceIndex[x] +1);
            }
        },
        decreaseIndex: function(x) {
          if (this.adviceIndex[x] > 0) {
            Vue.set( this.adviceIndex, x, this.adviceIndex[x] - 1);
          }
        }
    },
    mounted: function() {
      var that = this;
      axios.get(url +"/api/swot/" + this.businessPlanId)
      .then(function (response) {
          var obj = response.data;
          that.myObj = obj;
          if (obj != null) {
            Vue.set(that.spots, 0, obj.Strong);
            Vue.set(that.spots, 1, obj.Weak);
            Vue.set(that.spots, 2, obj.Opportunities);
            Vue.set(that.spots, 3, obj.Threats);
          }
      })
      .catch(function (error) {
          console.log(error)
      })
      axios.get('swotAdvices.json')
      .then(function (response) {
          var obj = response.data;
          if (obj != null){
            that.advices = obj.Advices;
          }
      })
      .catch(function (error) {
          console.log(error)
      })
    }
});
