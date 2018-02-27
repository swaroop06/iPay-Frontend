<template>
<div class="main">
<b-container>
<b-row>
  <b-col>
    <img src="../assets/ipay_logo.png" style="width:30%;">
  </b-col>
  <b-col >
     <a href="">Help</a>
     <br>
     <a href="">About Us</a>
     <br>
     <a href="">Terms and Conditions</a>
     <br>
     <a href="">Return policy</a>
  </b-col>
  <b-col>
    
    <b-row style="margin-top:7%;">
      <h6 style="margin:2%;margin-right:7%;font-size:14px;">Keep in touch </h6>
      <icon class="socialicon" name="facebook" scale="2"></icon>
      <icon class="socialicon" name="twitter" scale="2"></icon>
      <icon class="socialicon" name="youtube" scale="2"></icon>
    </b-row>
    
  </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>


export default {
  components:{
     
      
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
  background:#dddddd;
  padding-top:1.5%;
  padding-bottom:1.5%;
  margin-top:2%;
  
}
.socialicon{
  margin-right:8%;
  color:#515151;
}
a{
  color:#515151;
}
</style>
