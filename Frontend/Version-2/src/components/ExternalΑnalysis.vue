<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εξωτερική Ανάλυση</h1>
			</div>

			<longtext :theTitle="'Ποια είναι τα βασικά χαρακτηριστικά των καταναλωτών;'" :contentProp="$store.state.consumerAnalysis"></longtext>

			<longtext :theTitle="'Ανάλυση ανταγωνισμού'" :contentProp="$store.state.competitionAnalysis"></longtext>

			<marketAnalysis :theTitle="'Ανάλυση αγοράς'" :mrkAnalysisProp="$store.state.marketAnalysis"></marketAnalysis>

			<longtext :theTitle="'Ανάλυση μακροοικονομικού περιβάλλοντος'" :contentProp="$store.state.enviromentAnalysis" ></longtext>

			<h3 style="font-weight: 600;margin: 0;">Ανάλυση SWOT</h3>
			<longtext :theTitle="'Δυνάμεις'" :contentProp="$store.state.swot.strengths"></longtext>
			<longtext :theTitle="'Αδυναμίες'" :contentProp="$store.state.swot.weaknesses"></longtext>
			<longtext :theTitle="'Ευκαιρίες'" :contentProp="$store.state.swot.opportunities"></longtext>
			<longtext :theTitle="'Απειλές'" :contentProp="$store.state.swot.threats"></longtext>

			<div class="main__footer">
				<div class="footer__buttons">
					<button class="check-button isNotDone" @click="toggleBasicInformation()" v-if="!$store.state.bpProgress.externalAnalysisIsComplete">Ολοκλήρωση ενότητας</button>
					<button class="check-button isDone" @click="toggleBasicInformation()" v-if="$store.state.bpProgress.externalAnalysisIsComplete">✓Ολοκληρώθηκε</button>
				</div>
			</div>

	</div>	
</template>
<script>
import Longtext from './custom/Longtext.vue'
import MarketAnalysis from './custom/MarketAnalysis.vue'
export default {
	name: 'ExternalΑnalysis',
	data() {
		return {
			title: this.$options.name,
			isCompleted: false
		}
	},
	mounted() {	  
	},
	methods: {
		toggleBasicInformation() {
			if (this.$store.state.bpProgress.externalAnalysisIsComplete === false) {
				this.$store.commit('TOGGLE_EXTERNAL_ANALYSIS_PROGRESS', true)
				this.isCompleted = true
			} else {
				this.$store.commit('TOGGLE_EXTERNAL_ANALYSIS_PROGRESS', false)
				this.isCompleted = false
			} 
		},
	},
	components: {
		'longtext': Longtext, 
		'marketAnalysis': MarketAnalysis 
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
