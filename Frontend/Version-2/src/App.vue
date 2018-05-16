<template>
  <div id="app">
    <skeleton></skeleton>
  </div>
</template>

<script>
import Skeleton from './components/Skeleton.vue';

export default {
  name: 'app',
  components: {
    Skeleton
  }
}
</script>

<style>
body { margin:0; padding:0; }
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.button{
	background-color: #299858;
    color: #fff;
    border: #299858;
    padding: 15px;
    text-align: center;
    font-size: 20px;
    width: 160px;
	border-radius:5px;
}

.instructions_button{
    float: right;
}

.main__container{
	display:flex;
	flex-grow: 1;
	overflow-y:auto;
}

.main__header{
	margin-right:20px;
	margin-left:20px;
	text-align: left;
}

.main__body{
	margin-top:20px;
	margin-bottom:20px;
	display:flex;
	flex-direction: column;
	flex-grow:1;	
}

.main__body_header{
	text-size:20px;
}

.main__footer{
	margin-top:20px;
	margin-right:20px;
    margin-left:20px;	
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
}

.input_group{
	margin-top:10px;
	margin-bottom:10px;
	display:flex;
	align-items: center;
 	justify-content: center;
	margin-left:20px;
	margin-right:20px;
}

.input_group:hover { 
	padding: 10px 10px 10px 10px;
    background-color: rgb(192, 192, 192);
	border-radius:10px;
	
}

.title{
	font-size:18px;
	text-align: center;
	margin-right:50px;
	margin-left:20px;
	text-transform: uppercase;
	width:300px;
	display:flex;
	justify-content:flex-end;
}

.steps{
	border-style: solid;
    border-width: 0px;
	padding:20px 20px 20px 20px;
	border-radius:10px;
	border-color:gray;
	margin:20px 20px 20px 20px;
}

.footer__buttons{
	display:flex;
	justify-content:space-between;
	margin:100px 20px 20px 20px;
}

.right_column{
    width:300px;
    background-color: rgb(192, 192, 192);
}

.instructions_title{
	font-size:24px;
	border-bottom: 2px solid rgb(220,220,220);
	padding-bottom:10px;
	padding-top:10px;
	padding-left:10px;
	font-color:rgb(30, 33, 51);
}

.instructions_body{
	padding:15px 15px 15px 15px;
	font-color:rgb(30, 33, 51);
	font-size:20px;
}

.save_big_button{
    bottom:0;
    position:fixed;
    width:0;
}
</style>
