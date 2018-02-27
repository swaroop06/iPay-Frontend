<template>
<div class="main">
<h3 class="mainheader">Profile</h3>
<hr>

<b-card no-body style="margin:2%;">
  <b-tabs pills card>
    <b-tab title="Personal Information " active>
      <div v-if="personaledit ==='no'">
      
      <b-row>
      <b-col>
      <h6><span style="color:#494949">Name: </span> <span style="margin-left:2.5%;">{{username}}</span></h6>
      <h6><span style="color:#494949">Email: </span> <span style="margin-left:2.6%;">{{emailid}}</span></h6>
      <h6><span style="color:#494949">DOB: </span> <span style="margin-left:3%;">{{dob}}</span></h6>
      <h6><span style="color:#494949">Number: </span><span style="margin-left:0.9%;">{{phonenumber}}</span></h6>
      <h6><span style="color:#494949">Gender: </span><span style="margin-left:1.5%;">{{gender}}</span></h6>
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
      <br>
      <b-form-input style="width:30%" v-model="username" type="text"/>
      <br>
      <b-form-input style="width:30%" v-model="emailid" type="email"/>
      <br>
      <b-form-input style="width:30%" v-model="dob" type="date"/>
      <br> 
      <b-form-input style="width:30%" v-model="phonenumber" type="number"/>
      <br>
      <b-form-input style="width:30%" v-model="gender" type="text"/>
      <br>
      <b-button variant="danger" v-on:click="submitpersonal"><b>Update</b></b-button>
      </div>
    </b-tab>
    <b-tab title="Address">
      
      <div v-if="addressedit ==='no'">
        <h6><span style="color:#494949">Address: </span><span style="margin-left:1%;">{{address}}</span></h6>
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
       <b-form-input style="width:30%" v-model="oldpassword" type="text" placeholder="Enter old password" />
       <br>
       <b-form-input style="width:30%" v-model="oldpassword" type="text" placeholder="Enter new password" />
       <br>
       <b-button style="background:#d6d6d6;color:#494949;border:#efefef"><b>Update</b></b-button>
    </b-tab>
  </b-tabs>
</b-card>


</div>
</template>

<script>

import {bus} from '../main.js'
export default {
  components:{
     
      
  },
  name: 'app',
  data () {
    return {
       username:'Archer',
       phonenumber:'9944580867',
       emailid:'archer@gmail.com',
       dob:'06/08/1997',
       gender:'Male',
       address:'random address',
       personaledit:'no',
       addressedit:'no',
       password:'',
       oldpassword:'',
       newpassword:''


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
  background:#f4f4f4;
  margin:2%;
  border-radius:10px;
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

</style>
