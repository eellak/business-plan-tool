<template>
	<div class="revenues">
		<h1>{{ title }}</h1>
		<h2>Coming soon.</h2>
		<!--Επιλογή συγκεκριμένου προϊόντος/υπηρεσίας από dropdown menu-->
      <!-- <h1>1. 'Ονομα προϊόντος/υπηρεσίας.</h1>
      <form>
        <select id="dropdown_proionta_2" name="dropdown" @change="showNextFields()">
            <option v-for="product in products">
              {{ product.Name }}
            </option>
        </select>
      </form>

      <div id="analisi" v-for="p in products">
        <div class="Align">
          <form>
            <h1>2. Κοστολόγηση προϊόντος/υπηρεσίας.</h1>
            <textarea id="sellPrice" placeholder="Τιμή πώλησης προϊόντος/υπηρεσίας(ατομικά)" v-model="p.Price"></textarea>
          </form>

          <form>
            <h1>3. Κόστος παραγωγής προϊοντος/υπηρεσίας.</h1>
            <textarea id="productCost" placeholder="ΣΤΟΙΧΕΙΑ ΚΑΙΝΟΤΟΜΙΑΣ" v-model="p.ProductCost"></textarea>
          </form>
        </div>

        <div class="Align">
          <form>
            <h1>4. Προβλεπόμενος αριθμός πωλήσεων 1ου έτους.</h1>
            <textarea id="numProduct" placeholder="Αριθμός προϊόντων/υπηρεσιών που προβλέπεται να πουλήσει στο πρώτο έτος εισαγωγής του." v-model="p.numProduct"></textarea>
          </form>
          <form>
            <h1>5. Ποσοστό αύξησης πωλήσεων επόμενων ετών.</h1>
            <textarea id="percentageIncrease" placeholder="ΑΠΑΙΤΗΣΕΙΣ ΑΔΕΙΑΣ" v-model="p.PercentageIncome"></textarea>
          </form>
        </div>
        <button type="submit" class="add" @click=addAnalysis()><img src="add32.png"></button>
      </div> -->

	</div>
</template>

<script>
export default {
	name: 'Revenues',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: 'Ανάλυση εσόδων',
			products: []
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
}

#analisi {
}

.add{
    border: none;
    background-color: white;
    margin: 30px 0px 30px 10px;
}
</style>
