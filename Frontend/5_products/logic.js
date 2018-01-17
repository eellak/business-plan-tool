var app = new Vue({
    el: 'main',
    data: {
      products: [],
    },
    methods: {    
		tipsButton() {
            var x = document.getElementById("instructions");
            if (x.style.display === "block") {
				x.style.display = "none";
            } else {
				x.style.display = "block";
            }
        },
		
		addProduct() {			
			var newProduct = { name: '', productType: '', directed_to: '', innovation: '', technology: '', 
			certificate: '', competition: '', price: '', description: ''}
			this.products.push(newProduct)
		},
		
		save() {
			// REST API POST
		}
    }
})
