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
      <button type="submit" class="add" @click="addProductRow()"><img src="add32.png"> </button>
	</div>
</template>

<script>
export default {
	name: 'Characteristics',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name
		}
	},
	mounted() {
		// Here you can write code you want to run,
		// when this component is loaded.
	},
	methods: {
		// Here you can write your functions.
		foo() {
		},
	}
}
</script>

<style scoped>

</style>
