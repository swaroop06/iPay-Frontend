<template>
<div class="main">
<b-container>
<b-row>
  <b-col>
    <img src="../assets/ipay_logo1.png" style="width:20%;margin-top:4%;">
  </b-col>
  <b-col >
     <h5 style="color:white">Know More</h5>
     <a href="">About Us</a>
     <br>
     <a href="">Terms and Conditions</a>
     <br>
     <a href="">Return policy</a>
  </b-col>
  <b-col>
      
      
      <h5 style="color:white">Contact Us</h5>
      <b-row>
      <b-col sm="1">
         <icon  name="phone" scale="1.3" ></icon>
         <br>
         <icon class="socialicon" name="envelope" scale="1.3" ></icon>
      </b-col>
      <b-col sm="2">
         <h6>+919944580867</h6>
         <h6>helpdesk@ipay.tk</h6>
      </b-col>
      </b-row>
     
  </b-col>
  <b-col>
    
    <b-row style="margin-top:7%;">
      <h6 style="margin:2%;margin-right:7%;font-size:14px;color:white">Keep in touch </h6>
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
  background:#191F26 !important;
  padding-top:1.5%;
  padding-bottom:1.5%;
  margin-top:2%;
  color:#FFB400;
}
.socialicon{
  margin-right:8%;
  color:#515151;
  color:#FFB400;
}
a{
  color:#FFB400;
}
.socialicon{
  color:linear-gradient(to right, #5989e5, #37cfdc);
}
</style>
