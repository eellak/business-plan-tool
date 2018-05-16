<template>
	<div class="characteristics">
 <!--Κουμπί για τις οδηγίες με μια μικρή συνάρτηση js κάτω-->
      <button class="tips" @click="tipsButton()">ΟΔΗΓΙΕΣ</button>
      <!--Περιεχόμενο που εμφανίζεται με τι πάτημα του κουμπιού-->
      <div id="instructions">Σε αυτή την ενότητα γίνεται η καταγραφή των προϊόντων/υπηρεσιών που θα προσφέρει η επιχείρηση.<br>
	      Αρχικά επιλέγετε ανάμεσα σε προϊόν και υπηρεσία, και στη συνέχεια συμπληρώνετε τα χαρακτηριστικά του/της.<br>
	      Αφού συμπληρώσετε τα πεδία, πατήστε το κουμπί ‘+’ για την καταχώρηση του προϊόντος/υπηρεσίας.<br>
	      Επιλέξτε το κουμπί ‘ΕΜΠΡΟΣ’ για να μεταβείτε στην επόμενη σελίδα.
	      (Θα έχετε δυνατότητα να επιστρέψετε σε αυτή τη σελίδα, χρησιμοποιώντας το κουμπί ‘ΠΙΣΩ’)
	      </div>
      <!--Επιλογή προιόντος ή υπηρεσίας-->
      <h2>Τα προϊόντα/υπηρεσίες της επιχείρησης είναι τα παρακάτω:</h2>
      <div v-for="p in products" style="border: 1px solid black">
        <p>Όνομα: <strong>{{ p.Name }}</strong></p>
      </div>
      <div v-for="product in products">
        <h1>1. Επιλέξτε προϊόν/υπηρεσία για προσθήκη.</h1>
        <label class="container">Προϊόντα
					<input type="radio" checked="checked" name="radio" id="radio_product" v-model=product.ProductType value="Προϊόν">
					<span class="checkmark"></span>
				</label>
        <label class="container">Υπηρεσίες
					<input type="radio" name="radio" id="radio_services"  v-model=product.ProductType value="Υπηρεσία">
					<span class="checkmark"></span>
				</label>

        <!--Η κλαση align βαζει τις ερωτησεις τη μια διπλα στην αλλη-->
        <div class="Align">
          <!--Καταγραφή ονόματος προϊόντος/υπηρεσίας-->
          <form>
            <h1>2. 'Ονομα προϊόντος/υπηρεσίας.</h1>
            <textarea id="name" placeholder="ΟΝΟΜΑ ΠΡΟΙΟΝΤΟΣ" v-model=product.Name></textarea>
          </form>
          <!--Καταγραφή του που απευθύνεται το προϊόν/υπηρεσία-->
          <form>
            <h1>3. Ομάδα-στόχος.</h1>
            <textarea id="directed_to" placeholder="ΠΟΥ ΑΠΕΥΘΥΝΕΤΑΙ" v-model=product.Directed_to></textarea>
          </form>
        </div>

        <div class="Align">
          <!--Καταγραφή των στοιχείων καινοτομίας-->
          <form>
            <h1>4. Στοιχεία καινοτομίας/ανταγωνιστικότητας.</h1>
            <textarea id="innovation_factor" placeholder="ΣΤΟΙΧΕΙΑ ΚΑΙΝΟΤΟΜΙΑΣ" v-model=product.Innovation_factor></textarea>
          </form>

          <form>
            <!--Καταγραφή της τεχνολογίας που χρησιμοποιείται-->
            <h1>5. Τεχνολογία στην οποία βασίζεται.</h1>
            <textarea id="technology" placeholder="ΤΕΧΝΟΛΟΓΙΑ" v-model=product.Technology></textarea>
          </form>
        </div>

        <!--Καταγραφή απαιτήσεων αδείας.-->
        <h1>6. Απαιτήσεις άδειας.</h1>
        <form class=quest58>
          <textarea placeholder="ΑΠΑΙΤΗΣΕΙΣ ΑΔΕΙΑΣ"></textarea>
        </form>
        <!-- Καταγραφή πιστοποιητικού. -->
        <label class="container2">
					<input type="radio" checked="checked" name="radio2" id="radio_pist_asf" v-model=product.Certificate value="Πιστοποιητικό ασφάλειας">
					<a href="Placeholder link">Πιστοποιητικό ασφάλειας</a><br>
					<span class="checkmark"></span>
				</label>
        <label class="container2">
					<input type="radio" name="radio2" id="radio_iso"  v-model=product.Certificate value="ISO">
					<a href="Placeholder link 2">ISO</a><br>
					<span class="checkmark"></span>
				</label>
        <label class="container2">
					<input type="radio" name="radio2" id="radio_kat_pat"  v-model=product.Certificate value="Κατοχυρωμένη πατέντα">
					<a href="Placeholder link 3">Κατοχυρωμένη πατέντα</a>
					<span class="checkmark"></span>
				</label>

        <!-- Καταγραφή στοιχείων ανταγωνισμού-->
        <div class="Align">
          <form>
            <h1>7. Στοιχεία ανταγωνισμού.</h1>
            <textarea id="competition" placeholder="ΑΝΤΑΓΩΝΙΣΜΟΣ" v-model=product.Competition></textarea>
          </form>

          <!--Καταγραφή τελικής τιμής-->
          <form>
            <h1>8. Τιμή διάθεσης στον τελικό χρήστη.</h1>
            <textarea id="price" placeholder="ΤΕΛΙΚΗ ΤΙΜΗ" v-model=product.Price></textarea>
          </form>
        </div>

        <!--Καταγραφή περιγραφής προϊόντος/υπηρεσίας.-->
        <h1>9. Περιγραφή.</h1>
        <form class=quest58>
          <textarea id="description" placeholder="ΠΕΡΙΓΡΑΦΗ" v-model=product.Description @keyup.enter="createProduct()"></textarea>
        </form>

        <hr>
      </div>
      <!--Κουμπί καταχώρησης προϊόντος/υπηρεσίας-->
      <button type="submit" class="add" @click="addProductRow()"><img src="add32.png"> </button>	</div>
</template>

<script>
export default {
	name: 'Characteristics',
	data: {
    products: []
  },

  created() {
    var that = this
    axios.get('http://play-trinity.com/theo/bplantool/api/product')
    .then(function(response) {
      that.products = response.data
      console.log(that.products)
    })
  },
  mounted(){
    console.log(this.products)
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
    // 
    addProductRow() {
			var newProduct = {
        ProductType: '',
        Name: '',
        Directed_to: '',
        Innovation_factor: '',
        Technology: '',
        Certificate: '',
        License: '',
        Competition: '',
        Price: '',
        Description: '',
        Copyright: '',
        SellPrice: '',
        ProductCost: '',
        NumProduct: '',
        PercentageIncrease: '',
        BusinessPlanId: 1 
      }

			  this.products.push(newProduct)
		},
		createProduct(event) {
      var that = this
      var max = this.products.length - 1
      axios.post('http://play-trinity.com/theo/bplantool/api/product', this.products[max])
        .then(function(response) {
          that.products.push(response.data)
        })
			this.products.pop()
			// this.$store.dispatch('createManager', this.managers[max])
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
}
</script>

<style scoped>
h1{
    margin : 20px 0px 5px 0px;
    font-size : 18px;
}
.options{
    margin: 20px 10px 20px 10px;
    display: block;
}
.tooltip{
    margin-top: 30px;
    margin-right: 20px;
    background-color: rgb(41, 152, 100);
    color: white;
    width: 153px;
    height: 52px;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    float: right;  
}
select {
    margin-top: 10px;
    width: 450px;
    height: 60px;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    background-color: #f1f1f1;
}
.quest58 textarea{
    width: 1000px;
}
textarea{
    margin-top: 10px;
    width: 450px;
    height: 80px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 3px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
}
.container {
    position: relative;
    padding-left: 33px;
    margin-bottom: 12px;
    margin-right: 100px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
}
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
}
.container:hover input ~ .checkmark {
    background-color: #ccc;
}
.container input:checked ~ .checkmark {
    background-color: rgb(41, 152, 100);
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
.Align{
    display: flex;
}
form{
    margin-right:100px;
}
.tips{
    position: fixed;
    top: 100px;
    right: 40px;
    background-color: rgb(41, 152, 100);
    color: white;
    width: 153px;
    height: 52px;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}
#instructions {
    position: fixed;
    width: 350px;
    height: 300px;
    top: 140px;
    right: 40px;
    padding: 22px;
    text-align: left;
    background-color: lightgrey;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: none;
}

#pneumatiki {
    display: none;
}

#analisi {
    display: none;
}

.add{
    border: none;
    background-color: white;
    margin: 30px 0px 30px 10px;
}
</style>
