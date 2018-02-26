<template>
<div class="main">
<b-container class="bv-example-row">
    <b-row>
        <b-col class="desc">
        
         <h5 style="text-align:center;margin-top:2%;">Benefits of using iPay</h5>
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
         <span><img src="src/assets/ben4.png"> Amazing deals on Movies & Shopping</span>
         <br>
         <br>
         </b-container>
        </b-col>
        <b-col>
        <b-tabs style="margin:2%;">
  <b-tab title="Sign into iPay" active>
    <br>
    <b-form-input v-model="username"
                  type="text"
                  placeholder="Registered iPay Phone Number or Email Address"></b-form-input>
   
   <br>
   <b-form-input  v-model="password"
                  type="password"
                  placeholder="Password"></b-form-input>
   
   <br>
   <a href="#">Forgot password?</a>
   
   <b-button variant="primary" style="float:right" v-on:click="login" >Log In</b-button>
   </b-tab>


  <b-tab title="Sign Up" >
    <br><b-form-input 
                  type="number"
                  placeholder="Phone Number "></b-form-input>
   
   <br>
   <b-form-input 
                  type="password"
                  placeholder="Create Password"></b-form-input>
   
   
   <br><b-form-input 
                  type="text"
                  placeholder="Email Address (Optional)"></b-form-input>
   
   <br>
   <b-button variant="primary">Sign Up</b-button>
  </b-tab>
  </b-tabs>
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
      ben:'random'
    }
  },
  methods:{
    login(){
      if(this.username=="Archer" && this.password=="password")
      {  
         bus.$emit('changestatus','loggedin');
        
      }
    }
  }
}
</script>

<style scoped>
.desc{
  background:#f2f2f2;
}
</style>
