<template>
	<div class="equipment">
		<h1>{{ title }}</h1>
		<div id="userArea">
			<div class="container_main">
			<div id="db_test">
				<div class="row1">
					<div class="row2">
						ΠΛΗΡΟΦΟΡΙΕΣ ΕΞΟΠΛΙΣΜΟΥ
					</div>
					<div class="row3">
						<input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
						<label for="styled-checkbox-1">Χρήση από την έναρξη</label>
					</div>
				</div>
				<div class="row1">
					<div class="row1">
						<textarea class="input_1" placeholder="ΕΙΔΗ ΕΞΟΠΛΙΣΜΟΥ"> </textarea>
					</div>
				</div>
				<div class="row1">
					<div class="row2">
						<textarea class="input_1" placeholder="ΤΟΠΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ" ></textarea>
					</div>
					<div class="row3">
						<textarea class="input_1" placeholder="ΤΜΗΜΑ ΕΠΙΧΕΙΡΙΣΗΣ"></textarea>
					</div>
				</div>

				<form action="">
					<div class="row1">
						<div class="row3">
							<input type="radio" class="styled-checkbox" name="usage-type" value="Αγορά"> Νέο
						</div>
						<div class="row3">
							<input type="radio" class="styled-checkbox" name="usage-type" value="Αγορά"> Μεταχειρισμένο
						</div>
					</div>
				</form>
				<div class="row1">
					<div class="row4">
						Ημερομηνία απόκτησης
					</div>
					<div class="row3">
						<textarea class="input_1" placeholder="ΜΗΝΑΣ"></textarea>
					</div>
					<div class="row3">
						<textarea class="input_1" placeholder="ΕΤΟΣ"></textarea>
					</div>
					<div class="row1">
						<input id="Submitbtn" type="button" value="submit" @click="postData()" />
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Equipment',
	data() {
		return {
			// Here you can write your own variables.
			// These variables are shown only inside this component.
			title: this.$options.name,
			BusinessPlanId: 1,
			EquipType: '',
			Address: '',
			Division: '',
			Firsthand: '',
			Acquisition_date: null,
			range: 0
		}
	},
	mounted() {
		// Here you can write code you want to run,
		// when this component is loaded.
	},
	methods: {
		// Here you can write your functions.
		postData() {
            axios.post('http://play-trinity.com/theo/bplantool/api/equipment', {
                "BusinessPlanId": this.BusinessPlanId,
                "EquipType": this.EquipType,
                "Address": this.Address,
                "Division": this.Division,
                "Firsthand": this.Firsthand,
                "Acquisition_date": this.Acquisition_date
            })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        test() {
            alert("Works");
        },
        addForm: function () {
            this.range += 1;
        },
        removeForm: function (range) {
            this.range -= 1;
        } 
	}
}
</script>

<style scoped>
.container_main{
    height: 100%;
    margin-right: 15%;
    margin-left: 15%;
    text-align: center;
    display: block;
    box-sizing: border-box;
    width: 70%;
}

#Submitbtn {
    background-color: #299858;
    border: #299858;
    padding: 1%;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    width: 15%;
  }

#btn_calc{
	position: relative;
	width: 160px;
	height: 50px;
	float: left;
}

.row1 {
    width: 100%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    margin-top: 30px;
    height:auto;
}
.row2 {
    width: 70%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: left;
    height: auto;
}
.row3 {
    width: 30%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row4 {
    width: 40%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row5_1 {
    border-right: 1px solid #000000;
    width: 50%;
    
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row5 {
    width: 50%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}
.row6 {
    width: 20%;
    float:left ;
    position: relative;
    min-height: 1px;
    text-align: center;
    height: auto;
}

.input_1{
    text-align: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
}

</style>
