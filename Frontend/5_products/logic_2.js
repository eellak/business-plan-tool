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
		
		showNextDropdown(name) {
			var x = document.getElementById('dropdown_pneumatiki');
			if (name=="Επιλέξτε προϊόν ")
				x.style.display = "none";
			else 
				x.style.display = "block";
		},
		
		addProduct() {			
			var newProduct = { name: 'a', productType: '', directed_to: '', innovation: '', technology: '', 
			certificate: '', competition: '', price: '', description: '', copyright: ''}
			this.products.push(newProduct)
			alert("Hey!")
		},
		
		save() {
			// REST API POST
		}
    }
})
