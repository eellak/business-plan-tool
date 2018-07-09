<template>
	<div class="row">

        <div class="logo">
            <img src="../assets/BPLogo.png" alt="BP Logo" id="bpLogo" />
        </div>

        <div class="columns">
            <div class="column" id="firstColumn" >
                <img src="../assets/Checked.png" alt="Checked icon" class="icons" />
                <h1 class="titles-h1">ΕΥΚΟΛΙΑ</h1>
                <p class="p-welcome">Δημιούργησε το επιχειρηματικό σου σχέδιο με ευκολία, σε μια πολύ φιλική προς το χρήστη πλατφόρμα.
                </p>
            </div>

            <div class="column" id="secondColumn">
                <span style="display:flex;flex-direction:column;align-items:center;">
                    <img src="../assets/redChecklist.png" alt="Checked icon" class="icons" id="secIcon" />
                    <h1 class="titles-h1">ΚΑΘΟΔΗΓΗΣΗ</h1>
                    <p class="p-welcome">Ανάπτυξε την ιδέα σου σωστά, ακολουθώντας τις οδηγίες που παρέχονται σε κάθε βήμα.</p>
                </span>
            </div>
            
            <div class="column" id="thirdColumn">
                <img src="../assets/blueDoc.png" alt="Checked icon" class="icons" />
                <h1 class="titles-h1">ΑΜΕΣΗ ΛΗΨΗ</h1>
                <p class="p-welcome">Κατέβασε άμεσα το επιχειρηματικό σου σχέδιο σε μορφή doc, για να μπορείς να κάνεις ό,τι αλλαγή θέλεις.</p>
            </div>
        </div>
        <button id="button" @click="goToBasicInformation()">Ξεκινήστε τώρα!</button>
    </div>	
</template>
<script>
export default {
	name: 'Welcome',
	data() {
		return {
			title: this.$options.name,
		}
	},
	mounted() {
		  
	},
	methods: {
        goToBasicInformation() {
            this.$router.push('/basic-information')
        }
	},
}
</script>

<style>

.row {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333A56;
}

    .logo {
        height: 20%;
        display: flex;
        justify-content: center;
    }

        #bpLogo {
            height: 190px;
        }

    .columns {
        height: 80%;
        display: flex;
    }

        .column {
            width: 33.33%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

            #secondColumn {
                justify-content: space-around;
            }


            .titles-h1 {
                font-weight:bold;
                color:#8BA5C5;
                text-align: center;
            }

            .icons{
                height: 150px;
                width: 150px;
            }

            .p-welcome {
                text-align:center;
                color:white;
                font-size: 18px;                
            }

            #button {
                color: white;
                background-color: #8BA5C5;
                padding: 15px 35px;
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                border: none;
                border-radius: 3px;
                margin-top: 15px;
                width: 33.33%;
                align-self: center;
                margin-bottom: 15px;
            }
                #button:hover {
                    background-color: white;
                    color: #8BA5C5;
                    transition: 0.15s;
                }

</style>
