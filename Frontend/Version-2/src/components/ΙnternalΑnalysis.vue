<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εσωτερική Ανάλυση</h1>
			</div>

			<div class="longtext">
				<h3 class="longtext__title">Περιγραφή της επιχείρησης</h3>
				<p class="longtext__content">Μπλα μπλα μπλα</p>
				<span class="longtext__addarea">
					<a class="longtext__addButton" @click="openTextarea($event)">+Συμπληρώστε</a>
					<el-input class="longtext__textarea" type="textarea"></el-input>	
				</span>	
			</div>

			<!-- <div class="group">
				<div class="title_of_group">Μέτοχοι της επιχείρησης</div>
                <div id="input" style="flex-grow:1;margin-right:40px;margin-top:10px;">
					<el-input class="group-input" placeholder="Βαλαωρίτου 15" v-model="shareholder"></el-input>
				</div>
                <button class="red_inside_information" @click="addShareholder()">+Προσθέστε μέτοχο</button>
			</div> -->

			<div class="main__footer">
				<div class="footer__buttons">
				</div>
			</div>

	</div>	
</template>
<script>
export default {
	name: 'InternalAnalysis',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name,
			shareholder: ''
		}
	},
	mounted() {
		// Here you can write code you want to run,
        // when this component is loaded.
        
				  
	},
	methods: {
		openTextarea(ev) {
			ev.currentTarget.style.display = 'none'
			ev.currentTarget.parentElement.getElementsByClassName('longtext__textarea')[0].style.display = 'block'
		},
		addShareholder() { 
			var shareholderInput = document.getElementsByClassName("group-input")[0];

			var divClone = shareholderInput.cloneNode(true); // the true is for deep cloning

			shareholderInput.appendChild(divClone);
			// divClone = shareholderInput.cloneNode(true);
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
		display: none;
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
		}

		.longtext__textarea {
			display: none;
			transition: 0.6s;
		}





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
