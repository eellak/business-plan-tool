new Vue({
  el: 'main',
  data: {
    mypromotion: '',
    mycontribution: '',
    mymarketEntry: '',
    mypublicRelations: '',
    myavoid: '',
    mytitle:'',
    myimplementationTime:'',
    myfrequency: '',
    myimplementationCost: '',
    mytotalCost:''
  },
  mounted(){
    var y = document.getElementById("hidden_div");
    y.style.display='none';
  },

  methods: {
    saveData(){
      axios.post(`http://play-trinity.com/theo/bplantool/api/strategy`,{
                            Promotion: this.mypromotion,
                            Contribution: this.mycontribution,
                            MarketEntry: this.mymarketEntry,
                            PublicRelations: this.mypublicRelations,
                            Avoid: this.myavoid })
                  .then(function (response) {
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                    });
      },

    postData(){
          axios.post(`http://play-trinity.com/theo/bplantool/api/marketingaction`, {
                              Title: this.title,
                              ImplementationTime: this.myimplementationTime,
                              Frequency: this.myfrequency,
                              ImplementationCost: this.myimplementationCost,
                              TotalCost: this.mytotalCost })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
      },

  instr(){
    var x = document.getElementById("hidden_div");
    var w = document.getElementById("button1");
    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.backgroundColor ='#12492a';
    } else {
        x.style.display = "none";
        w.style.backgroundColor ='#299858';
    }
    },


  },

});
