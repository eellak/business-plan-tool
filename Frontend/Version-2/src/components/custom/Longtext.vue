<template>
    <div class="longtext">
        <h3 class="longtext__title">{{ theTitle }}</h3>
        <p class="longtext__content" v-if="!longtextIsEditing">{{ description }}</p>
        <a class="longtext__addButton" @click="openTextarea($event)">+Συμπληρώστε</a>
        <span class="longtext__addarea" v-if="longtextIsEditing">
            <el-input class="longtext__textarea" autosize type="textarea" v-model="description"></el-input>
            <button class="longtext__save" @click="saveContent($event)">Ολοκλήρωση</button>	
        </span>
        <a class="longtext__edit" @click="editContent($event)" v-if="!longtextIsEditing && !!description">Επεξεργασία</a>
    </div>
</template>
<script>
export default {
    name: 'Longtext',
    props: ['theTitle'],
	data() {
		return {
			description: '',
			longtextIsEditing: false,
		}
	},
	mounted() {     
				  
	},
	methods: {
		openTextarea(ev) {
			ev.currentTarget.style.display = 'none'
			this.longtextIsEditing = true
		},
		saveContent(ev) {
			this.longtextIsEditing = false
		},
		editContent(ev) {
			ev.currentTarget.style.display = 'none'
			this.longtextIsEditing = true
		}
	}
}
</script>

<style>

/* ==============================================
                #LONGTEXT
================================================= */

.longtext {
	border-radius: 3px;
	padding: 10px 15px;
	margin: 5px 0px;
	display: flex;
	flex-direction: column;
	border: 1px solid transparent;
}

.longtext:hover {
	border: 1px dashed #47A2D3;
	background-color: #ECF6FB;
}

	.longtext__title {
		font-weight: 300;
		margin: 0;
	}

	.longtext__content {
		width: 850px;
		font-style: italic;
	}

	.longtext__addarea {
		width: 100%;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

		.longtext__addButton {
			color: #EB5757;
			align-self: center;
			cursor: pointer;
		}

		.longtext__textarea {
			transition: 0.6s;
			margin-top: 10px;
		}
		.longtext__textarea .el-textarea__inner {
			height: 180px !important;
		}

		.longtext__save {
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
		.longtext__save:hover {
			background-color: #428C10;
		}

	.longtext__edit {
		color: #bbb;
		text-decoration: underline;
		align-self: flex-end;
		cursor: pointer;
	}



</style>
