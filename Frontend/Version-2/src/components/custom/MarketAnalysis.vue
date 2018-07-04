<template>
    <div class="mrkAnalysis">
        <h3 class="mrkAnalysis__title">{{ theTitle }}</h3>
        <div class="mrkAnalysis__content" v-if="!mrkAnalysisIsEditing">
			<span><strong>Σύνθεση ανταγωνισμού:</strong> {{ mrkAnalysisProp.synthesis }}</span>
			<span><strong>Είδος ανταγωνισμού:</strong> {{ mrkAnalysisProp.type }}</span>
			<span><strong>Άμεσοι και έμμεσοι ανταγωνιστές:</strong> {{ mrkAnalysisProp.competitors }}</span>
			<span><strong>Περιθώρια εισόδου στην αγορά:</strong> {{ mrkAnalysisProp.perithoriaEisodou }}</span>
		</div>
        <a class="mrkAnalysis__addButton" @click="mrkAnalysisIsOpen = true">Επεξεργαστείτε</a>

		<el-dialog title="Ανάλυση αγοράς" :visible.sync="mrkAnalysisIsOpen" width="70%">
			<p style="margin-bottom:5px;"><strong>Ποια είναι η σύνθεση του ανταγωνισμού στην αγορά που θέλετε να εισέλθετε;</strong></p>
			<el-radio v-model="formSynthesis" label="Τέλειος ανταγωνισμός">Τέλειος ανταγωνισμός</el-radio>
			<el-radio v-model="formSynthesis" label="Ανταγωνισμός">Ανταγωνισμός</el-radio>
			<el-radio v-model="formSynthesis" label="Ολιγοπώλειο">Ολιγοπώλειο</el-radio>
			<el-radio v-model="formSynthesis" label="Μονοπώλειο">Μονοπώλειο</el-radio>

			<p style="margin-bottom:5px;"><strong>Ποιο είναι το είδος του ανταγωνισμού;</strong></p>
			<el-radio v-model="formType" label="Άμεσος ανταγωνισμός">Άμεσος ανταγωνισμός</el-radio>
			<el-radio v-model="formType" label="Έμμεσος ανταγωνισμός">Έμμεσος ανταγωνισμός</el-radio>
			<span>
				<p style="margin-bottom:5px;"><strong>Παρουσιάστε/αναφέρετε τους άμεσους και έμμεσους ανταγωνιστές:</strong></p>
				<el-input type="textarea" autosize v-model="mrkAnalysisProp.competitors"></el-input>
			</span>
			<p style="margin-bottom:5px;"><strong>Περιθώρια εισόδου στην αγορά:</strong></p>
			<el-radio v-model="formPerithoriaEisodou" label="Κορεσμένη">Κορεσμένη</el-radio>
			<el-radio v-model="formPerithoriaEisodou" label="Με πολλά περιθώρια εισόδου">Με πολλά περιθώρια εισόδου</el-radio>
			<span slot="footer" class="dialog-footer">
				<el-button type="success" @click="finishEdit()">Ολοκλήρωση</el-button>
			</span>
			
		</el-dialog>

    </div>
</template>
<script>
export default {
    name: 'MarketAnalysis',
    props: ['theTitle', 'mrkAnalysisProp'],
	data() {
		return {
			mrkAnalysisIsEditing: false,
			mrkAnalysisIsOpen: false,
			formSynthesis: '',
			formType: '',
			formCompetitors: '',
			formPerithoriaEisodou: ''
		}
	},
	mounted() {     
				  
	},
	methods: {
		finishEdit() {
			this.mrkAnalysisIsOpen = false
			this.mrkAnalysisProp.synthesis = this.formSynthesis
			this.mrkAnalysisProp.type = this.formType
			// this.mrkAnalysisProp.competitors = this.formCompetitors
			this.mrkAnalysisProp.perithoriaEisodou = this.formPerithoriaEisodou

			// this.formSynthesis = ''
			// this.formType = ''
			// this.formCompetitors = ''
			// this.perithoriaEisodou = ''
		}
	}
}
</script>

<style>

/* ==============================================
                #mrkAnalysis
================================================= */

.mrkAnalysis {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.mrkAnalysis:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.mrkAnalysis__title {
		font-weight: 300;
		margin: 0;
	}

	.mrkAnalysis__content {
		width: 850px;
		font-style: italic;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
	}

		.mrkAnalysis__card {
			padding: 0!important;
		}

	.mrkAnalysis__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.mrkAnalysis__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
			margin-top: 20px;
		}

		.mrkAnalysis__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.mrkAnalysis__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.mrkAnalysis__save {
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
		.mrkAnalysis__save:hover {
			background-color: #428C10;
		}

	.mrkAnalysis__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}


.el-textarea__inner {
	height: 200px !important;
}


</style>
