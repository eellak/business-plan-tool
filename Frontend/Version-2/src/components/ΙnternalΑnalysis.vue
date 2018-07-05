<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εσωτερική Ανάλυση</h1>
			</div>

			<longtext :theTitle="'Βασικοί εταίροι της επιχείρησης'" ></longtext>

			<longtext :theTitle="'Περιγραφή επιχείρησης'" :contentProp="$store.state.description"></longtext>

			<products :theTitle="'Προϊόντα ή υπηρεσίες που θα προσφέρονται'" :productsProp="$store.state.products"></products>
			
			<longtext :theTitle="'Επιλογή τοποθεσίας'" :contentProp="$store.state.location"></longtext>

			<div class="main__footer">
				<div class="footer__buttons">
					<button class="check-button isNotDone" @click="toggleBasicInformation()" v-if="!$store.state.bpProgress.internalAnalysisIsComplete">Δεν Ολοκληρώθηκε</button>
					<button class="check-button isDone" @click="toggleBasicInformation()" v-if="$store.state.bpProgress.internalAnalysisIsComplete">✓Ολοκληρώθηκε</button>
				</div>
			</div>

	</div>	
</template>
<script>
import Products from './custom/Products.vue'
import Longtext from './custom/Longtext.vue'
export default {
	name: 'InternalAnalysis',
	data() {
		return {
			title: this.$options.name,
		}
	},
	mounted() {
				  
	},
	methods: {
		toggleBasicInformation() {
			if (this.$store.state.bpProgress.internalAnalysisIsComplete === false) {
				this.$store.commit('TOGGLE_INTERNAL_ANALYSIS_PROGRESS', true)
				this.isCompleted = true
			} else {
				this.$store.commit('TOGGLE_INTERNAL_ANALYSIS_PROGRESS', false)
				this.isCompleted = false
			} 
		},
	},
	components: {
		'longtext': Longtext, 
		'products': Products
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
