<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εσωτερική Ανάλυση</h1>
			</div>

			<longtext :theTitle="'Βασικοί εταίροι της επιχείρησης'"></longtext>

			<longtext :theTitle="'Περιγραφή επιχείρησης'"></longtext>

			<modalproducts :theTitle="'Προϊόντα ή υπηρεσίες που θα προσφέρονται'"></modalproducts>
			
			<longtext :theTitle="'Επιλογή τοποθεσίας'"></longtext>

			<div class="main__footer">
				<div class="footer__buttons">
				</div>
			</div>

	</div>	
</template>
<script>
import ModalProducts from './custom/ModalProducts.vue'
import Longtext from './custom/Longtext.vue'
export default {
	name: 'InternalAnalysis',
	data() {
		return {
			title: this.$options.name,
			description: '',
			// db
			// "shareholders": ["John Smith", "Jack Sparrow"],
			// "description": "description 1",
			// "products": [
			// 	{
			// 	"id": 1,
			// 	"isProduct": true,
			// 		"name": "kenzo leather jacket",
			// 		"details":"2012 fall-winter collection"
			// 	},
			// 	{
			// 		"id": 2,
			// 		"isProduct": false,
			// 		"name": "e-shop",
			// 		"details":"provides the ability for users to shop online"
			// 	}
			// ],
			// "location": "Thessaloniki Greece"
		}
	},
	mounted() {
				  
	},
	methods: {
	},
	components: {
		'longtext': Longtext, 
		'modalproducts': ModalProducts
	}
}
</script>

<style>

/* ==============================================
                #SHAREHOLDERS
================================================= */

.title_of_group{
    margin-left:35px;
    margin-top:10px;
    font-size:18px;
}

.group:hover{
	padding: 10px 10px 10px 10px;
    background-color: rgb(238,238,238);
	border-radius:10px;
}

.red_inside_information{
    margin-top:35px;
    margin-bottom: 20px;
    text-align: center;
    font-size:16px;
    color:red;
}


</style>
