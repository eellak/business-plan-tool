<template>
	<div class="pestel-factors">
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'PestelFactors',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name
		}
	},
	mounted() {
		// Here you can write code you want to run,
		// when this component is loaded.
	},
	methods: {
		// Here you can write your functions.
		foo() {
		},
	}
}
</script>

<style scoped>

</style>
