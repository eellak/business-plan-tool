Vue.component('modal', {
template: '#modal-template' //shoModal:false,
})

var temp = {
      counter:0, 
      picker: [],
      actions: [
              {id: '1', title: 'Ενεργεια1', value: '60'},
              {id: '2', title: 'Ενεργεια2', value: '80'},
              {id: '3', title: 'Ενεργεια3', value: '90'},
              {id: '4', title: 'Ενεργεια4', value: '100'}
            ]
}

Vue.component('my-select',{
      template: '<div v-if="show_div">\
                  <select id="userInput" v-model:value="pick" key="kcounter"s v-if="show_select">\
                    <option v-for="a in actions" v-bind:value="a" >{{ a.title}}</option>\
                  </select>\
                  <label id="selectionLabel" v-if="!show_select">{{pick.title}}</label>\
                  <label id="valueLabel">Τιμή : {{ pick.value ,emitare(pick,kcounter)}}</label>\
                  <button id="minusButton" @click="test($event)">-</button>\
                </div>',
      data: function(){
              return {
                show_div: true,
                pick: '',
                actions: temp.actions,
                kcounter: temp.counter++,
                show_select:true
              }
        },
      methods:{
          test: function(event){
            if(this.pick!=''){
                temp.actions.push(this.pick)
                for(var i = 0; i < temp.picker.length ; i++){
                  if(temp.picker[i] == this.pick){
                    temp.picker.splice(i,1)
                  }
                }
              }
              this.show_div = false;
              temp.counter--
          },
        emitare: function(a,k){ //a: h energia
            if(parseInt(a.value)>=0){
              //oti epilegete svinete apo to select
              for(var i=0;i<temp.actions.length;i++){
                if(temp.actions[i] == a){
                  this.show_select = false
                  temp.actions.splice(i,1)
                }
              }
              flag=false;
              for(var i=0;i<temp.picker.length;i++){
                if(temp.picker[i]== a){
                  temp.picker.splice(i,1)
                  temp.picker.push(a)
                  flag = true
                }
              }         
              if(flag==false){
                temp.picker.push(a)
                flag=false
              }
            }
        },
      }
})

var app = new Vue({
      el: 'main',
      data: {
          showModal:false,
          now: '',
          selections: [],
          result: '---',
          showCalculate: false,
      },
      methods: {
          create() {
            var length = temp.actions.length + temp.picker.length
            if(temp.counter < (length)){
              this.selections.push(this.now)
              this.showCalculate = true;
            }
          },
          calculate() {
            var sum = 0
            for(var i = 0 ; i < temp.picker.length;i++){
              sum = sum + parseInt(temp.picker[i].value)
            }
            if(sum!=0){
              this.result = sum
            }else{
              this.result = '---'
            }
          },
      }
})
