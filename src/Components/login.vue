<template>
<div class="main">
<b-container class="bv-example-row">
    <b-row>
        <b-col class="desc" style="color:white">
        
         <h5 style="text-align:center;margin-top:2%;">Benefits of using iPay</h5>
         <hr style="">
         <br>
         <b-container>
         <span><img src="src/assets/ben1.svg"> Fast & Secure Payments</span>
         <br>
         <br>
         <span><img src="src/assets/ben2.svg"> Pay Utility Bills </span>
         <br>
         <br>
         <span><img src="src/assets/ben3.svg"> Pay at over a thousand iPay merchant network</span>
         
        
         <br>
         <br>
         </b-container>
        </b-col>
        <b-col class="credentials">
        <div v-if="!forgotpassword">
        
        <b-tabs style="margin:2%;">
  <b-tab title="Sign into iPay" active>
    <br>
    <b-form v-on:submit="login">
    <div v-if="invalidcred">
    <h6 class="invalid">Invalid Username or Password</h6>
    </div>
    <br>
    <b-form-input v-model="username"
                  type="text"
                  placeholder="Registered iPay Phone Number or Email Address"></b-form-input>
   
   <br>
   <b-form-input  v-model="password"
                  type="password"
                  placeholder="Password"></b-form-input>
   
   <br>
   <a href="#" v-on:click="forgotpass">Forgot password?</a>
   
   <b-button variant="primary" type="submit" style="float:right" v-on:click="login" >Log In</b-button>
   </b-form>
   </b-tab>


  <b-tab title="Sign Up" >
    <br>
    <b-form >
    <br>
  <b-form-input   v-model="name"
                  type="text"
                  placeholder="Name" required></b-form-input>
                  <br>
   
   <b-form-input  v-model="userphnum"
                  type="number"
                  placeholder="Phone Number " required></b-form-input>
                  
   <br>
    <b-form-input v-model="usermail"
                  type="email"
                  placeholder="Email Address" required></b-form-input>
   <br>
   <b-form-input v-model="userpass"
                  type="password"
                  placeholder="Create Password" required></b-form-input>
                  <br>
   
   <b-form-input  v-model="confirmpass"
                  type="password"
                  placeholder="Confirm Password" required></b-form-input>
                  <br>
   <b-form-file  v-model="validid"
                  
                  placeholder="Valid identity proof" required></b-form-file>
   
    
   
   
   <br>
   <b-button variant="primary" style="float:right;width:100%">Proceed</b-button>
  </b-form>
  </b-tab>
  </b-tabs>
  </div>
  
  <div v-if="forgotpassword" class="credentials">
  <h5 style="text-align:center">Forgot Password</h5>
  <br>
  <b-form-input type="email" placeholder="Enter email address"></b-form-input>
  <br>
  <b-button variant="primary" style="float:right;width:100%" v-on:click="sendpass">Proceed</b-button>
  <br>
  <br>
  <h6 v-on:click="goback"><- Back</h6>
  <br>
  </div>
  
</b-col>
</b-row>

</b-container>


</div>
</template>

<script>

import {bus} from '../main.js';
export default {
  
  
  name: 'app',
  data () {
    return {
      username:'',
      password:'',
      ben:'random',
      forgotpassword:false,
      invalidcred:false,
    }
  },
  methods:{
    login(){
      if(this.username=="Archer" && this.password=="password")
      {  
         bus.$emit('changestatus','loggedin');
        
      }
      else{
        this.invalidcred=true;
      }
    },
    forgotpass(){
      this.forgotpassword=true;
    },
    goback(){
      this.forgotpassword=false;
    }

  }
}
</script>

<style scoped>
.desc{
  background: linear-gradient(to right,#00b09b,#00b09b);
  padding:3%;
}
.credentials{
  padding:2%;
  
}
hr{
    width:20%;
    background: black;
    height: 1px;
}
.invalid{
  color:red;
  text-align:center;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>
