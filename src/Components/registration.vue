<template>
<div class="main">
<b-form v-on:submit.prevent="register">
    <br>
  <b-form-input   v-model="name"
                  type="text"
                  placeholder="Name" 
                  v-validate="{required:true, min:2}" ></b-form-input>
                  <br>
   
   <b-form-input  v-model="phnum"
                  type="number"
                  placeholder="Phone Number " 
                  v-validate="{required: true, digits:10}" ></b-form-input>
                  
   <br>
    <b-form-input v-model="email"
                  type="email"
                  placeholder="Email Address" 
                  v-validate="{ required:true, email: true}" ></b-form-input>
   <br>
   <b-form-input v-model="pass"
                  type="password"
                  placeholder="Create Password" 
                  v-validate="{required:true, min:8}" ></b-form-input>
                  <br>
   
   <b-form-input  v-model="confirmpass"
                  type="password"
                  placeholder="Confirm Password" 
                   v-validate="{required:true, min:8}" ></b-form-input>
                  <br>
   <b-form-file  v-model="validid"
                  
                  placeholder="Valid identity proof" required></b-form-file>
   
    
   
   
   <br>
   <b-button variant="primary" :disabled="openBtn" type="submit" style="float:right;width:100%">Proceed</b-button>
  </b-form>
  

</div>
</template>

<script>


export default {
  components:{
     
      
  },
  name: 'app',
  data () {
    return {
      name:'',
      phnum:'',
      email:'',
      pass:'',
      confirmpass:'',
      validid:'',
      msg:'',
      openBtn:false

    }
  },
  methods:{
       register: function () {
        this.openBtn = true;
        if (this.email.charAt(0) == '@') {
          this.msg = "Enter a valid email";
          
          this.openBtn = false;
        } else
        if (this.errors.has('name') ) {
          this.msg = "Name should be entered";
          
          this.openBtn = false;
        } else
        if (this.errors.has('email') ) {
          this.msg = "Enter a valid email";
          
          this.openBtn = false;
        } else
        if (this.errors.has('password') ) {
          this.msg = "Password should be at least 8 characters long";
          
          this.openBtn = false;
        } else
        if (this.pass !== this.confirmpass) {
          this.msg = "Please enter the same password in both the fields";
         
          this.openBtn = false;
        } else if (this.errors.has('phnum')) {
          this.msg = "Please Enter a Valid Phone Number";
          
          this.openBtn = false;
        }  else {
          this.$http.post('http://127.0.0.1/ipay-backend/index.php/users/register', {
            uname: this.name,
            u_mail: this.email,
            psw: this.pass,
            cpsw: this.confirmpass,
            ph_num: parseInt(this.phone_num),
            
            
          }, {
            emulateJSON: true
          }).then(data => {
                            console.log(data.body);
            this.openBtn = false;
            if (data.body.success) {
              this.msg = data.body.message;
              console.log("Success");
            } else {
              if (data.body.error) {
                this.msg = data.body.error;
              } else {
                this.msg = "There has been some error. Please try again later";
              }
              
            }
        /*     this.name = '';
            this.email = '';
            this.pass = '';
            this.confirmpass = '';
            this.phnum = '';
             */
            
          }, data => {
                console.log(data.body);
            this.openBtn = false;
            if (data.body.error) {
              if (data.body.error.email) {
                this.msg = data.body.error.email[0];
              } else {
                this.msg = data.body.error;
              }
            } else {
              this.msg = "There has been some error. Please try again later";
            }
            
          });
        }
      }
  }
}
</script>

<style scoped>
.main{
 
}
</style>
