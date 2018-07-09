<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Στρατηγική Marketing</h1>
			</div>

			<longtext :theTitle="'Στρατηγική προϊόντων'" :contentProp="$store.state.productStrategy"></longtext>

			<h3 style="font-weight: 600;margin: 0;">Πλάνο Marketing</h3>
			<longtext :theTitle="'Συμπεριφορά καταναλωτή'" :contentProp="$store.state.consumerBehavior"></longtext>

			<longtext :theTitle="'Προϊόν/υπηρεσία'" :contentProp="$store.state.productMarketing"></longtext>

			<longtext :theTitle="'Διανομή'" :contentProp="$store.state.distribution"></longtext>

			<longtext :theTitle="'Προώθηση'" :contentProp="$store.state.promotion"></longtext>
			
			<!-- to be changed -->
			<longtext :theTitle="'Πωλήσεις'" :contentProp="$store.state.consumerBehavior"></longtext>

			<div class="main__footer">
				<div class="footer__buttons">
					<button class="check-button isNotDone" @click="toggleBasicInformation()" v-if="!$store.state.bpProgress.strategyIsComplete">Ολοκλήρωση ενότητας</button>
					<button class="check-button isDone" @click="toggleBasicInformation()" v-if="$store.state.bpProgress.strategyIsComplete">✓Ολοκληρώθηκε</button>
				</div>
			</div>

	</div>	
</template>
<script>
import Longtext from './custom/Longtext.vue'
import ModalSales from './custom/ModalSales.vue'
export default {
	name: 'Strategy',
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
			if (this.$store.state.bpProgress.strategyIsComplete === false) {
				this.$store.commit('TOGGLE_STRATEGY_PROGRESS', true)
				this.isCompleted = true
			} else {
				this.$store.commit('TOGGLE_STRATEGY_PROGRESS', false)
				this.isCompleted = false
			} 
		},
	},
	components: {
		'longtext': Longtext,
		'modalsales': ModalSales 
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
