Vue.component('my-form', {
    template: '#my-form'
});

var app = new Vue({
    el: '#left',
    data: {
        BusinessPlanId: 1,
        EquipType: '',
        Address: '',
        Division: '',
        Firsthand: '',
        Acquisition_date: null,
        range: 0
    },
    methods: {
        postData() {
            axios.post('http://play-trinity.com/theo/bplantool/api/equipment', {
                "BusinessPlanId": this.BusinessPlanId,
                "EquipType": this.EquipType,
                "Address": this.Address,
                "Division": this.Division,
                "Firsthand": this.Firsthand,
                "Acquisition_date": this.Acquisition_date
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
        addForm: function () {
            this.range += 1;
        },
        removeForm: function (range) {
            this.range -= 1;
        } 
    }
})