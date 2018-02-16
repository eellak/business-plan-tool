
    var app=new Vue({
        el: '#db_test',
            data: {
        BusinessPlanId: 1,
                Address: '',
                Usage: '',
                M2: null,
                Ownership_type: '',
                Start_date: null,
                showModal:false,
                selections:[]
            },
            methods: {
        postData() {
    console.log(this.Address)
                    axios.post('http://play-trinity.com/theo/bplantool/api/faculty', {
        "BusinessPlanId": this.BusinessPlanId,
                        "Address": this.address,
                        "Usage": this.usage_2,
                        "M2":this.M2,
                        "Ownership_type": this.ownership_type,
                        "Start_date": this.Start_date
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
 
