<template>
    <div class="modal">
        <transition> 
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div v-if="instrShow[0]">
                            <div class="modal-header">
                                <h3>ΚΟΣΤΟΣ ΕΝΑΡΞΗΣ</h3>
                            </div>
                            <div class="modal-body">
                                <p> Σε αυτή την ενότητα καταγράφονται όλες οι δαπάνες οι οποίες θα πρέπει να πραγματοποιηθούν προκειμένου
                                    να ξεκινήσει η επιχειρηματική δραστηριότητα.Επιλέξτε τα κόστη που σας ενδιαφέρουν (ή προσθέστε κάποιο
                                    επιπλέον) και πιέστε το πλήκτρο υπολογισμού για να δείτε το Συνολικό Κόστος Έναρξης. Στη συνέχεια επιλέξτε
                                    το πλήκτρο "ΕΜΠΡΟΣ" για να προχωρήσετε παρακάτω.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button class="modal-default-button" @click="$emit('close')">OK</button>
                            </div>
                        </div>
                        <div v-if="instrShow[1]">
                            <div class="modal-header">
                                <h3>ΚΟΣΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ</h3>
                            </div>
                            <div class="modal-body">
                                <p> Σε αυτή την ενότητα καταγράφονται όλες οι δαπάνες οι οποίες θα γίνονται σε ετήσια βάση απο την 
                                    επιχείρηση με σκοπό την εξασφάλιση της βιωσημότητας της.
                                    Συμπληρώστε τα πλαίσια με τις δαπάνες που επιθυμείτε καθώς και το ετήσιο κόστος της κάθε μίας.
                                    Έπειτα πιέστε το πλήκτρο υπολογισμού για να δείτε το Συνολικό Κόστος Λειτουργίας.
                                    Στη συνέχεια επιλέξτε το πλήκτρο "ΕΜΠΡΟΣ" για να προχωρήσετε παρακάτω.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button class="modal-default-button" @click="$emit('close')">OK</button>
                            </div>
                        </div>
                        <div v-if="instrShow[2]">
                            <div class="modal-header">
                                <h3>ΝΕΚΡΟ ΣΗΜΕΙΟ</h3>
                            </div>
                            <div class="modal-body">
                                <p> Σε αυτή την ενότητα υπολογίζεται το Νεκρό Σημείο των προιόντων.Δηλαδή, το σημείο στο 
                                    οποίο το ύψος των πωλήσεων έχει συνολικά έσοδα ίσα με τα συνολικά έξοδα.
                                    Συμπληρώστε τα απαραίτητα πεδία και πατήστε το πλήκτρο για τον υπολογισμό του Νεκρού Σημείου. 
                                    Στη συνέχεια επιλέξτε το πλήκτρο "ΕΜΠΡΟΣ" για να προχωρήσετε παρακάτω.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button class="modal-default-button" @click="$emit('close')">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['InstrNum'],
        data() {
            return {
                instrShow: [false,false,false]
            }
        },
        created() {
            this.instrShow[parseInt(this.InstrNum)]=true
        },
        destroyed() {
            this.instrShow[this.InstrNum]=false
        },
        methods: {
            
        }
}
</script>

<style scoped>
button{
	font-family:"Source Sans Pro";
	position:fixed;
	position:relative;
	width:217px;
	height:65px;
	background-color:#299858 ; 
	font-size: 25px;
    color:#fff;
}
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 94%;
    margin: 0px auto;
    padding: 20px 30px;
    padding-bottom: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
    width: 10%;
    height: 10%;
    margin-bottom: 10px;

}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
