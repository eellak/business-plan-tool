    var app=new Vue({
        el: '#res_right',
        data: {
                Equipment_equipmentID=null,
                equipCost=null
            },
            methods: {
                postData() {
                    console.log(this.equipCost)
                    axios.post('http://play-trinity.com/theo/bplantool/api/equipment_cost', {
                        "Equipment_equipmentID": this.Equipment_equipmentID,
                        "equipCost": this.equipCost,
                    })
                        .then(function (response) {
        console.log(response.data);
    })
                        .catch(function (error) {
        console.log(error);
    });
                },
                test() {
        alert("Works");
    },
            }
        })
