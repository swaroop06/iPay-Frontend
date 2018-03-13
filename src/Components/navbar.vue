<template>
<div class="main-nav">
<b-navbar toggleable="md" type="light">

 

  
  <b-navbar-brand href="#"><router-link to="/" ><img  src="src/assets/ipay_logo.png"></router-link></b-navbar-brand>
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">
    
    <b-navbar-nav class="ml-auto">

       <b-navbar-nav>
          
          <div v-if="this.$session.exists()">
          <b-nav-item href="#" class="navitem"><router-link to="/" style="color:rgba(0,0,0,0.5)" ><span><b>Home</b></span></router-link></b-nav-item>
          </div>
          <div v-if="this.$session.exists()">
          <b-nav-item href="#" class="navitem" ><router-link to="/orders" style="color:rgba(0,0,0,0.5)" ><b>Orders</b></router-link></b-nav-item>
          </div>
          <div v-if="this.$session.exists()">
          <b-nav-item href="#" class="navitem" style="margin-right:5%"><router-link to="/wallet" style="color:rgba(0,0,0,0.5)" ><b>Wallet</b></router-link></b-nav-item>
          </div>
          
          <div v-if="status === 'login'">
          <b-button variant="danger" v-on:click="login"><b>Log In</b></b-button>
          </div>
          <div v-if="this.$session.exists()"> 
            <router-link to="/profile"><b-button  style="background:#254d8c!important;color:white;border:1px solid white;outline:none;box-shadow:none !important" ><b>Account Settings</b></b-button></router-link>
            
           </div>
           <div v-if="this.$session.exists()">
            <router-link to="/"><b-button style="background:#e54c19 !important;color:white;border:1px solid white;outline:none;box-shadow:none !important;margin-left:5%" class="logout" v-on:click="logout"><b>Log Out</b></b-button></router-link>
           </div>
       </b-navbar-nav>
      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
<modal name="login" :width="'70%'"
         :height="'auto'" :pivot-y="0.3" >
   <div class="modalColor">
    
    <login style="border-radius:10px;" v-on:changestatus="updatestatus($event)"></login>
    
   </div> 
</modal>  
</div>
</template>

<script>
import login from './login'
import {bus} from '../main.js'
export default {
  created(){
    this.username=this.$session.get('uname');
    
    bus.$on('changestatus',(data)=>{
      this.status=data;
      
      this.$modal.hide('login');
    }),
    bus.$on('updateuser',(data)=>{
      this.user=data;
    })
     
  },
 
  components:{
     'login':login 
      
  },
  name: 'app',
  data () {
    return {
       username:'',
       status:'login'
       
    }
  },
  methods:{
      logout(){
          this.status='login';
          this.$session.destroy();
          
      },
      login(){
          this.$modal.show('login');
      }
      
      
  },
  
}
</script>

<style scoped>
.main-nav{
  background-color: rgba(255,255,255,0.5);
  
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.1);
 

}

.menu a{
	color: #FFF !important;
}
img{
	height: 10%;
	width: 10%;
}
.logout{
    margin:1%;
   
    
}
.v--modal-overlay{
  background:rgba(0,0,0,0.5);
}
element.style{
  border-radius:20px;
}
button{
  outline:none !important;
}
.navitem{
  text-decoration:none;
  
}
.navitem:hover{
  text-decoration:none;
 
}
</style>