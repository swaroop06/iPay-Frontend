<template>
<div class="main" >
<br>
<b-input-group class="searchbar">
    
    <b-form-input placeholder=" Search for Products,Movies etc. " class="searchinput"></b-form-input>
    
  </b-input-group>
  
  

<div class="images" style="margin-bottom:1%;">
<b-container >
<b-row>
<b-col sm="4">
  <router-link to="./electricitybills"><img src="src/assets/cinema1.jpg"/></router-link>
</b-col >
<b-col sm="4">
  <router-link to="./electricitybills"><img src="src/assets/electricity.jpg"/></router-link>
</b-col>
<b-col sm="4">
  <router-link to="./phonebills"><img src="src/assets/eRecharge.jpg"/></router-link>
</b-col>
</b-row>
<b-row>
<b-col sm="4">
  <router-link to="./flights"><img src="src/assets/flight.jpg"/></router-link>
</b-col>
<b-col sm="4">
  <router-link to="./phones"><img src="src/assets/phones.jpg"/></router-link>
</b-col>
<b-col sm="4">
  <router-link to="./buses"><img src="src/assets/bus.jpg"/></router-link>
</b-col>
</b-row>
</b-container>
</div>
<foot ></foot>
</div>
</template>

<script>
import navbar from './navbar'
import footer from './footer'

export default {
  components:{
      'navbar':navbar,
      'foot':footer
      
  },
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.main{
  margin-top:3%;
  
}
.searchinput{
  border:black;
  background:rgba(0,0,0,0.08);
  border-radius:2px;
  font-weight: bold;
  padding:2%;
  border-radius:10px;
  
}
.searchinput:focus{
  border:black;
}
.searchbar{
  border-radius:10px;
  margin:0 auto;
  width:40%;
} 
.searchbar:focus{
box-shadow:-5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2); 
}

.images img{
  width:100%;
  height:200px;
  margin:1%;
  margin-top:4%;
  border-radius:10px;
   transition: box-shadow .3s;
}
.images{
   margin-top:2%;
}
.images img:hover{
  box-shadow: -5.665px 9.429px 35px 0px rgba(0, 0, 0, 0.2); 
  
}
input[type="text"], textarea {
outline: none;
box-shadow:none !important;

}
  


</style>
