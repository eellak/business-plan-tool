<template>
    <div class="modalproducts">
        <h3 class="modalproducts__title">{{ theTitle }}</h3>
        <p class="modalproducts__content" v-if="!modalproductsIsEditing">{{ description }}</p>
        <a class="modalproducts__addButton" @click="modalproductsIsOpen = true">+Προσθέστε Προϊόντα</a>

		<el-dialog title="Πληροφορίες προϊόντος/υπηρεσίας" :visible.sync="modalproductsIsOpen" width="70%">
			<el-radio label="1">Προϊόν</el-radio>
			<el-radio label="2">Υπηρεσία</el-radio>
			<span>
				<p style="margin-bottom:5px;"><strong>Ονομασία</strong></p>
				<el-input></el-input>
			</span>
			<span>
				<p style="margin-bottom:5px;"><strong>Λεπτομέρειες</strong></p>
				<el-input type="textarea" autosize></el-input>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="success" @click="modalproductsIsOpen = false">Ολοκλήρωση</el-button>
			</span>
		</el-dialog>

        <!-- <span class="modalproducts__addarea" v-if="modalproductsIsEditing">
            <el-input class="modalproducts__textarea" autosize type="textarea" v-model="description"></el-input>
            <button class="modalproducts__save" @click="saveContent($event)">Ολοκλήρωση</button>	
        </span>
        <a class="modalproducts__edit" @click="editContent($event)" v-if="!modalproductsIsEditing && !!description">Επεξεργασία</a> -->
    </div>
</template>
<script>
export default {
    name: 'Modalproducts',
    props: ['theTitle'],
	data() {
		return {
			description: '',
			modalproductsIsEditing: false,
			modalproductsIsOpen: false,
		}
	},
	mounted() {     
				  
	},
	methods: {
		saveContent(ev) {
			this.modalproductsIsEditing = false
		},
		editContent(ev) {
			ev.currentTarget.style.display = 'none'
			this.modalproductsIsEditing = true
		}
	}
}
</script>

<style>

/* ==============================================
                #modalproducts
================================================= */

.modalproducts {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.modalproducts:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.modalproducts__title {
		font-weight: 300;
		margin: 0;
	}

	.modalproducts__content {
		width: 850px;
		font-style: italic;
	}

	.modalproducts__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.modalproducts__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
		}

		.modalproducts__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.modalproducts__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.modalproducts__save {
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
		.modalproducts__save:hover {
			background-color: #428C10;
		}

	.modalproducts__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}



</style>
