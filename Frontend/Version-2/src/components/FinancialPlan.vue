<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Οικονομικό σχέδιο</h1>
			</div>

			<ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>

			<useResults :theTitle="'Αποτελέσματα Χρήσης 2018'" :useResultsProp="$store.state.useResults" :productSalesProp="productSales"></useResults>
			
			<div class="main__footer">
				<div class="footer__buttons">
				</div>
			</div>

	</div>	
</template>
<script>
import UseResults from './custom/UseResults.vue'
export default {
	name: 'FinancialPlan',
	data() {
		return {
			title: this.$options.name,
			chartSettings: {
				metrics: [],
				stack: { 'sales': [] }
			},
			chartData: {
				columns: ['date'],
				rows: [
					{ date: '2018' },
					{ date: '2019' },
					{ date: '2020' },
					{ date: '2021' },
					{ date: '2022' },
				]
			},
			productSales: 0
		}
	},
	created() {
		for (var i = 0; i < this.$store.state.products.length; i++) {
			var currProductName = this.$store.state.products[i].name

			this.chartSettings.metrics.push(currProductName)
			this.chartSettings.stack['sales'].push(currProductName)
			this.chartData.columns.push(currProductName)
			for (var j = 0; j < this.chartData.rows.length; j++) {
				this.chartData.rows[j][currProductName] = Math.floor(Math.random() * 20000) + 1000;
			}
		}

		for (var i = 0; i < this.chartData.rows.length; i++) {
			if (this.chartData.rows[i].date === '2018') {
				var productSalesSeparated = Object.values(this.chartData.rows[i])
				productSalesSeparated.splice(0, 1)
				this.productSales = productSalesSeparated.reduce((x, y) => x + y);
			}
		}
		
	},
	methods: {

	},
	components: {
		'useResults': UseResults 
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
