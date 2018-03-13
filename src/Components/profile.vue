<template>
<div>
<div class="main"  v-if="msg">


<b-card no-body >
  <b-tabs pills card >
    <b-tab  title="Personal Information" active>
      <div v-if="personaledit ==='no'">
      
      <b-row>
      <b-col>
      <b-row>
      <b-col sm="2">
         <h6><span style="color:#494949">Name: </span></h6>
         <h6><span style="color:#494949">Email: </span></h6>
         
         <h6><span style="color:#494949">Number: </span></h6>

      </b-col sm="3">
      <b-col>
       <h6><span style="color:black">{{username}}</span></h6>
       <h6><span style="color:black">{{emailid}}</span></h6>
      
      <h6><span style="color:black">{{phonenumber}}</span></h6>
      </b-col>
      </b-row>
      <br>
      <b-button style="background:#d6d6d6;color:#494949;border:#efefef" v-on:click="editpersonal"><b>Edit Personal Information</b></b-button>
      </b-col>
      <b-col>
      <img src="src/assets/305991.png" style="max-width:200px;max-height:200px;margin:0 auto;border-radius:50%;">
      </b-col>
      </b-row>
      
      </div>
      <div v-if="personaledit ==='yes'">
      <b-form-file v-model="file" style="width:20px;" placeholder="Upload Image" plain></b-form-file>
      
      <b-form-input style="width:30%" v-model="username" type="text"/>
      
      <b-form-input style="width:30%" v-model="emailid" type="email" readonly/>
      
      
      <b-form-input style="width:30%" v-model="phonenumber" type="number"/>
      
      
      <b-button variant="info" v-on:click="submitpersonal"><b>Update</b></b-button>
      </div>
    </b-tab>
    <b-tab title="Address">
      
      <div v-if="addressedit ==='no'">
        <b-row>
        <b-col xs="2">
          <h6><span style="color:#494949">Address: </span></h6>
        </b-col>
        <b-col xs="2">
          <h6><span style="margin-left:1%;">{{address}}</span></h6>
        </b-col>
        </b-row>
        
        <br>
        <b-button style="background:#d6d6d6;color:#494949;border:#efefef" v-on:click="editaddress"><b>Edit Address</b></b-button>
      </div>
      <div v-if="addressedit ==='yes'">
        <b-form-textarea v-model="address" style="width:30%" rows="3" />
        <br>
        <b-button variant="danger" v-on:click="submitaddress"><b>Update</b></b-button>
      </div>
    </b-tab>
    <b-tab title="Change Password">
       <b-form-input style="width:30%" v-model="oldpassword" type="password" placeholder="Enter old password" />
       
       <b-form-input style="width:30%" v-model="oldpassword" type="password" placeholder="Enter new password" />
       
       <b-button style="background:#d6d6d6;color:#494949;border:#efefef"><b>Update</b></b-button>
    </b-tab>
  </b-tabs>
</b-card>


</div>
<div v-if="!msg">
  <h2 style="color:#666666;text-align:center">Login into iPay for more features</h2> 
</div>
</div>
</template>

<script>

import {bus} from '../main.js'
export default {
  created(){
    if(this.$session.exists())
    {
        this.msg=true;          
    }
    this.username=this.$session.get('uname');
    this.phonenumber=this.$session.get('ph_num');
    this.emailid=this.$session.get('u_mail');

  },
  
  components:{
     
      
  },
  name: 'app',
  data () {
    return {
       username:'',
       phonenumber:'',
       emailid:'',
       dob:'',
       gender:'',
       address:'',
       personaledit:'no',
       addressedit:'no',
       password:'',
       oldpassword:'',
       newpassword:'',
       msg:false

    }
  },
  methods:{
    editpersonal(){
      this.personaledit="yes";
    },
    submitpersonal(){
      bus.$emit('updateinfo','');
      this.personaledit="no";
    },
    editaddress(){
      this.addressedit="yes";
    },
    submitaddress(){
      this.addressedit="no";
    }

  }
}
</script>

<style scoped>
.main{
  box-shadow:0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: rgb(163, 161, 157) !important;
  
  margin: 3%; 
  margin-bottom: 5%;
  border-radius: 10px;
  background:white;
  
}
.mainheader{
  text-align:center;
  margin-top:1%;
}
hr{
 width:20%;
    background: #3cc1b4;
    height: 4px;
}
input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"],input[type="email"],input[type="password"],input[type="text"],textarea
{ margin-top:1%;
  margin-bottom:1%;
  outline:none;
  box-shadow:none;
  border:1px solid white;
   background:rgba(0,0,0,0.08);
  border-radius:5px;
   
  
}
.nav-link .active{
     background:black;
}
</style>
