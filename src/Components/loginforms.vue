<template>
<div class="main">
<div v-if="!forgotpassword">
<b-form v-on:submit.prevent="login">
      <h6 style="color:red;text-align:center">{{msg}}</h6>
      <b-form-group>
        <b-form-input name="email" type="email" v-validate="{ required:true, email: true}" placeholder="Email" v-model="email">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input name="pw" type="password" v-validate="{required:true, min:8}" placeholder="Password" v-model="pw">
        </b-form-input>
      </b-form-group>
      <a href="">Forgot Password</a>
      <b-button class="sign-btn" variant="info" type="submit">Login</b-button>
    </b-form>
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
    
  </div>
</template>

<script>
import {bus} from '../main.js';
  export default {
    components: {
    },
    data() {
      return {
        email: '',
        pw: '',
        msg: '',
        forgotpassword:false
      }
    },
    methods: {
      login: function () {
        if (this.errors.has('email') || !this.fields.email.dirty) {
          this.msg = "Enter a valid email";
          
        } else if (this.errors.has('pw') || !this.fields.pw.dirty) {
          this.msg = "Password should be entered";
          
        } else {
          this.$http.post('http://127.0.0.1/ipay-backend/index.php/users/login', {
            uname: this.email,
            pass: this.pw,
          }, {
            emulateJSON: true
          }).then(response => {
            
            if(response.body.user_id){
               this.$session.start()
            this.$session.set('jwt', response.body.token);
            this.$session.set('u_mail', response.body.email);
            
           
            this.$session.set('uname', response.body.u_name);
            this.$session.set('ph_num', response.body.phone);
            bus.$emit('changestatus','loggedin');
            this.$router.push('/');
            }
            else{
              this.msg="Wrong Credentails";
            }
            
            
            if(this.$session.exists())
            {
              console.log("success");
            }
          }, response => {
            if (response.body.error) {
              this.msg = response.body.error;
            } else {
              this.msg = "There was an error";
              console.log("failure");
            }
            
          });
        }
      },
      clearMsg: function () {
        this.msg = "";
      }
    }
  }
</script>



<style scoped>
.sign-btn{
    float:right;
}
input[type="email"],input[type="password"], textarea {
outline: none;
box-shadow:none !important;

}
  
</style>
