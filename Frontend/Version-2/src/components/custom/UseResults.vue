<template>
    <div class="useResults">
        <h3 class="useResults__title">{{ theTitle }}</h3>
        <div class="useResults__content" v-if="!useResultsIsEditing">
			<span>Πωλήσεις Eμπορευμάτων: {{ useResultsProp.productSales }}€</span>
			<span>Μικτό κέρδος: {{ useResultsProp.mixedProfit }}€</span>
			<span>Σταθερά έξοδα: {{ useResultsProp.standardExpenses }}€</span>
			<span>Μεταβλητά έξοδα: {{ useResultsProp.variableExpenses }}€</span>
			<span>Σύνολο εξόδων: {{ useResultsProp.totalExpenses }}€</span>
			<h3>Κέρδος: {{ totalProfit }}€</h3>
		</div>
        <a class="useResults__addButton" @click="useResultsIsOpen = true">Επεξεργαστείτε</a>

		<el-dialog title="Ανάλυση αγοράς" :visible.sync="useResultsIsOpen" width="70%">
			<span>
				<p style="margin-bottom:5px;"><strong>Πωλήσεις Eμπορευμάτων:</strong></p>
				<el-input v-model="useResultsProp.productSales"></el-input>
				<p style="margin-bottom:5px;"><strong>Σταθερά έξοδα:</strong></p>
				<el-input v-model="useResultsProp.standardExpenses"></el-input>
				<p style="margin-bottom:5px;"><strong>Μεταβλητά έξοδα:</strong></p>
				<el-input v-model="useResultsProp.variableExpenses"></el-input>
			</span>

			<span slot="footer" class="dialog-footer">
				<el-button type="success" @click="finishEdit()">Ολοκλήρωση</el-button>
			</span>
			
		</el-dialog>

    </div>
</template>
<script>
export default {
    name: 'UseResults',
    props: ['theTitle', 'useResultsProp', 'productSalesProp'],
	data() {
		return {
			useResultsIsEditing: false,
			useResultsIsOpen: false,
			totalProfit: 0
		}
	},
	created() {
		// Pass from outside.
		this.useResultsProp.productSales = this.productSalesProp
		this.useResultsProp.mixedProfit = this.productSalesProp

		// Numerical operations. 
		this.useResultsProp.totalExpenses = this.useResultsProp.standardExpenses + this.useResultsProp.variableExpenses
		this.totalProfit = this.useResultsProp.productSales - this.useResultsProp.totalExpenses		  
	},
	methods: {
		finishEdit() {
			this.useResultsIsOpen = false
			this.useResultsProp.mixedProfit = this.useResultsProp.productSales
			this.useResultsProp.totalExpenses = parseInt(this.useResultsProp.standardExpenses) + parseInt(this.useResultsProp.variableExpenses)
			this.totalProfit = parseInt(this.useResultsProp.productSales) - parseInt(this.useResultsProp.totalExpenses)
			this.totalProfit = parseInt(this.totalProfit)
		}
	}
}
</script>

<style>

/* ==============================================
                #useResults
================================================= */

.useResults {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.useResults:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.useResults__title {
		font-weight: 300;
		margin: 0;
	}

	.useResults__content {
		width: 850px;
		font-style: italic;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
	}

		.useResults__card {
			padding: 0!important;
		}

	.useResults__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.useResults__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
			margin-top: 20px;
		}

		.useResults__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.useResults__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.useResults__save {
			padding: 7px 15px;
			margin-top: 5px;
			width: 100px;
			font-size: 12px;
			border: none;
			border-radius: 2px;
			color: #FFF;
			background-color: #62AC30;
			cursor: pointer;
			align-self: flex-end;
		}
		.useResults__save:hover {
			background-color: #428C10;
		}

	.useResults__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}


.el-textarea__inner {
	height: 200px !important;
}


</style>
