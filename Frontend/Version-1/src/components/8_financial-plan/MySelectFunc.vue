<template>
    <div class="my-select-func">
        <div v-if="show_div">
                <select id="userInput" v-model="pick" key="kcounter" v-if="show_select">
                    <option v-for="a in actions" v-bind:value="a" :key="a.functionID">{{ a.title}}</option>
                </select>
                <label id="selectionLabel" v-if="!show_select">{{pick.title}}</label>
                <label id="valueLabel">Τιμή : {{ pick.value ,emitare(pick,kcounter)}}</label>
                <button id="minusButton" @click="test($event)">-</button>
        </div>
    </div>
</template>

<script>

export default {
        name: 'MySelectFunc',
        // props: ['MySelectData'],
        data() {
            return {
                show_div: true,
                pick: '',
                actions: window.MySelectDataFunc.actions,
                kcounter: window.MySelectDataFunc.counter++,
                show_select:true
              }
        },
        methods: {
            test: function(){
                    if(this.pick!=''){
                        window.MySelectDataFunc.actions.push(this.pick)
                        for(var i = 0; i < window.MySelectDataFunc.picker.length ; i++){
                        if(window.MySelectDataFunc.picker[i] == this.pick){
                            window.MySelectDataFunc.picker.splice(i,1)
                        }
                        }
                    }
                    this.show_div = false;
                    window.MySelectDataFunc.counter--
                },
            emitare: function(a,k){ //a: h energia
                if(parseInt(a.value)>=0){
                //oti epilegete svinete apo to select
                for(var i=0;i<window.MySelectDataFunc.actions.length;i++){
                    if(window.MySelectDataFunc.actions[i] == a){
                    this.show_select = false
                    window.MySelectDataFunc.actions.splice(i,1)
                    }
                }
                var flag=false;
                for(var i=0;i<window.MySelectDataFunc.picker.length;i++){
                    if(window.MySelectDataFunc.picker[i]== a){
                    window.MySelectDataFunc.picker.splice(i,1)
                    window.MySelectDataFunc.picker.push(a)
                    flag = true
                    }
                }         
                if(flag==false){
                    window.MySelectDataFunc.picker.push(a)
                    flag=false
                }
                console.log(this.pick)
                }
            },
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

#minusButton{
    position: relative;
    width: 50px;
    height: 50px;
    margin-top:25px;
    margin-left:50px;
}

#userInput{
	
	position:relative;
	background-color: #fff;

    margin-top:50px;
    margin-left:50px;

	width:200px;
	height:50px;
	text-align: center;
	text-indent: 20px;
	font-size:25px;
	
}

#selectionLabel{
    position:relative;
    margin-top:10px;
    margin-left:50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;

}
#valueLabel{
    position: relative;
    margin-left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 35px;
}
</style>