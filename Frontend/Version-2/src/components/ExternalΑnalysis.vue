<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εξωτερική Ανάλυση</h1>
			</div>

			<longtext :theTitle="'Ποια είναι τα βασικά χαρακτηριστικά των καταναλωτών;'"></longtext>

			<longtext :theTitle="'Ανάλυση ανταγωνισμού'"></longtext>

			<longtext :theTitle="'Ανάλυση αγοράς'"></longtext>

			<longtext :theTitle="'Ανάλυση μακροοικονομικού περιβάλλοντος'"></longtext>

			<h3 style="font-weight: 600;margin: 0;">Ανάλυση SWOT</h3>
			<longtext :theTitle="'Δυνάμεις'"></longtext>
			<longtext :theTitle="'Αδυναμίες'"></longtext>
			<longtext :theTitle="'Ευκαιρίες'"></longtext>
			<longtext :theTitle="'Απειλές'"></longtext>

			<div class="main__footer">
				<div class="footer__buttons">
				</div>
			</div>

	</div>	
</template>
<script>
import Longtext from './custom/Longtext.vue'
export default {
	name: 'ExternalΑnalysis',
	data() {
		return {
			title: this.$options.name,
			description: '',
			longtextIsEditing: false,
			// db
			// consumerAnalysis: "",
			// competitionAnalysis: "",
			// marketAnalysis: [
			// 	synthesis: '',
			// 	type: '',
			// 	competitors: "",
			// 	perithoriaEisodou: "",
			// ],
			// enviromentAnalysis: "",
			// swot: [
			// 	strengths: ["nice clothes","low prices","strong marketing"],
			// 	weaknesses: ["lower quality of clothes"],
			// 	opportunities: ["opportunity1","opportunity"],
			// 	threats: ["thrt1"]
			// ]
		}
	},
	mounted() {
				  
	},
	methods: {
	},
	components: {
		'longtext': Longtext 
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
