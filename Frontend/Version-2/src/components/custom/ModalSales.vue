<template>
    <div class="modalsales">
        <h3 class="modalsales__title">Πωλήσεις</h3>
        <p class="modalsales__content" v-if="!modalsalesIsEditing">{{ description }}</p>
        <a class="modalsales__addButton" @click="modalsalesIsOpen = true">+Συμπληρώστε</a>

		<el-dialog title="Πωλήσεις" :visible.sync="modalsalesIsOpen" width="70%">
			<span>
				<p style="margin-bottom:5px;"><strong>Τιμή προϊόντος/υπηρεσίας</strong></p>
				<el-input></el-input>
			</span>
			<p style="margin-bottom:5px"><strong>Πωλήσεις ανα χρονική περίοδο</strong></p>
			<el-radio label="1">Μηνιαία</el-radio>
			<el-radio label="2">Τρίμηνη</el-radio>
			<el-radio label="2">Τετράμηνη</el-radio>
			<el-radio label="2">Ετήσια</el-radio>
			<span>
				<p style="margin-bottom:5px;"><strong>Υπολογισμός τιμής</strong></p>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="success" @click="modalsalesIsOpen = false">Ολοκλήρωση</el-button>
			</span>
		</el-dialog>

    </div>
</template>
<script>
export default {
    name: 'ModalSales',
    props: [],
	data() {
		return {
			description: '',
			modalsalesIsEditing: false,
			modalsalesIsOpen: false,
		}
	},
	mounted() {     
				  
	},
	methods: {
		saveContent(ev) {
			this.modalsalesIsEditing = false
		},
		editContent(ev) {
			ev.currentTarget.style.display = 'none'
			this.modalsalesIsEditing = true
		}
	}
}
</script>

<style>

/* ==============================================
                #modalsales
================================================= */

.modalsales {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.modalsales:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.modalsales__title {
		font-weight: 300;
		margin: 0;
	}

	.modalsales__content {
		width: 850px;
		font-style: italic;
	}

	.modalsales__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.modalsales__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
		}

		.modalsales__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.modalsales__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.modalsales__save {
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
		.modalsales__save:hover {
			background-color: #428C10;
		}

	.modalsales__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}



</style>
