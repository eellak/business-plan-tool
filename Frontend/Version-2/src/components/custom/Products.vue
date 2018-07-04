<template>
    <div class="products">
        <h3 class="products__title">{{ theTitle }}</h3>
        <div class="products__content" v-if="!productsIsEditing">
			<el-card v-for="p in productsProp" :key="p.id" class="products__card">
				<img src="../../assets/Checked.png" width="100"	>
				<div style="padding: 14px;">
					<strong>Προϊόν</strong>
					<p>{{ p.name }}</p>
					<strong>Λεπτομέρειες</strong>
					<p>{{ p.details }}</p>
					<strong>Είδος</strong>
					<p>{{ p.type }}</p>
				</div>
				<p class="product__id" style="visibility:hidden;">{{ p.id }}</p>
				<span style="color:#EB5757;font-style:normal;float:right;cursor:pointer;" @click="deleteProduct($event)">- Αφαίρεση</span>
			</el-card>
		</div>
        <a class="products__addButton" @click="productsIsOpen = true">+Προσθέστε Προϊόντα</a>

		<el-dialog title="Πληροφορίες προϊόντος/υπηρεσίας" :visible.sync="productsIsOpen" width="70%">
			<span>
				<p style="margin-bottom:5px;"><strong>Ονομασία</strong></p>
				<el-input v-model="formName"></el-input>
			</span>
			<span>
				<p style="margin-bottom:5px;"><strong>Λεπτομέρειες</strong></p>
				<el-input type="textarea" autosize v-model="formDetails"></el-input>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="success" @click="addProduct()">Ολοκλήρωση</el-button>
			</span>
			<p style="margin-bottom:5px;"><strong>Προϊόν ή υπηρεσία;</strong></p>
			<el-radio v-model="formType" label="product">Προϊόν</el-radio>
			<el-radio v-model="formType" label="service">Υπηρεσία</el-radio>
		</el-dialog>

    </div>
</template>
<script>
export default {
    name: 'Products',
    props: ['theTitle', 'productsProp'],
	data() {
		return {
			productsIsEditing: false,
			productsIsOpen: false,
			formName: '',
			formDetails: '',
			formType: ''
		}
	},
	mounted() {     
				  
	},
	methods: {
		addProduct() {
			this.productsIsOpen = false
			this.productsProp.push({ name: this.formName, details: this.formDetails, type: this.formType })

			this.formName = ''
			this.formDetails = ''
		},
		deleteProduct(ev) {
			var idToDelete = ev.currentTarget.parentNode.getElementsByClassName('product__id')[0].innerHTML
			idToDelete = parseInt(idToDelete)
			for (var i = 0; i < this.productsProp.length; i++) {
				if (this.productsProp[i].id === idToDelete) {
					this.productsProp.splice(i, 1)
				}
			}
		},
		saveContent(ev) {
			this.productsIsEditing = false
		},
		editContent(ev) {
			ev.currentTarget.style.display = 'none'
			this.productsIsEditing = true
		}
	}
}
</script>

<style>

/* ==============================================
                #products
================================================= */

.products {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.products:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.products__title {
		font-weight: 300;
		margin: 0;
	}

	.products__content {
		width: 850px;
		font-style: italic;
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
	}

		.products__card {
			width: 32.999%;
			padding: 0!important;
		}

	.products__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.products__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
			margin-top: 20px;
		}

		.products__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.products__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.products__save {
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
		.products__save:hover {
			background-color: #428C10;
		}

	.products__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}



</style>
