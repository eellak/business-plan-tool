var app = new Vue({
  el: 'main',
  data: {
    products: []
  },

  created() {
    // REST API GET
  },

  methods: {
    tipsButton() {
      var x = document.getElementById("instructions");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

    showNextDropdown() {
      var x = document.getElementById("dropdown_proionta");
      var y = document.getElementById("pneumatiki");
      // or selected == x.selectedIndex to get the first and dont go by string
      if (0 == x.selectedIndex) {
        y.style.display = 'none';
      } else {
        y.style.display = 'block';
      }
    },

    showNextFields() {
      var x = document.getElementById("dropdown_proionta_2");
      var y = document.getElementById("analisi");
      // or selected == x.selectedIndex to get the first and dont go by string
      if (0 == x.selectedIndex) {
        y.style.display = 'none';
      } else {
        y.style.display = 'block';
      }
    },

    addProduct() {
      var newProduct = {
        productType: '',
        name: '',
        directed_to: '',
        innovation_factor: '',
        technology: '',
        certificate: '',
        license: '',
        competition: '',
        price: '',
        description: '',
        copyright: '',
        sellPrice: '',
        productCost: '',
        numProduct: '',
        percentageIncrease: ''
      }
      this.products.push(newProduct)
    },

    addCopyright()
    {
        var x = document.getElementById("dropdown_proionta").selected;
        var y = document.getElementById("dropdown_pneumatiki").selected;

        // for the x product append the y value
        //this.set(this.products[x], 'copyright', y])
    },

    addAnalysis()
    {
        var x = document.getElementById("dropdown_proionta_2").selected;
        var y1 = document.getElementById("sellPrice").value;
        var y2 = document.getElementById("productCost").value;
        var y3 = document.getElementById("numProduct").value;
        var y4 = document.getElementById("percentageIncrease").value;

        // for the x product append the y value
        //this.set(this.products[x], 'sellPrice', y1])
        //this.set(this.products[x], 'productCost', y2])
        //this.set(this.products[x], 'numProduct', y3])
        //this.set(this.products[x], 'percentageIncrease', y4])
    },

    save() {
      // REST API POST
    }
  }
})
