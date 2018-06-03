<template>
	<div class="main__body" style="margin-left:40px;margin-right:40px;">

			<div class="main__header">
				<h1>Εσωτερική Ανάλυση</h1>
			</div>

			<longtext :theTitle="'Περιγραφή επιχείρησης'"></longtext>

			<longtext :theTitle="'Επιλογή τοποθεσίας'"></longtext>


			<div class="main__footer">
				<div class="footer__buttons">
				</div>
			</div>

	</div>	
</template>
<script>
import Longtext from './custom/Longtext.vue'
export default {
	name: 'InternalAnalysis',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name,
			description: '',
			longtextIsEditing: false,
		}
	},
	mounted() {
		// Here you can write code you want to run,
        // when this component is loaded.
        
				  
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
	},
	components: {
		'longtext': Longtext 
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
