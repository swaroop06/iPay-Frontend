<template>
<div class="main-nav">
<b-navbar toggleable="md" type="light">

 

  
  <b-navbar-brand href="#"><router-link to="/" ><img  src="src/assets/ipay_logo.png"></router-link></b-navbar-brand>
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-collapse is-nav id="nav_collapse">
    
    <b-navbar-nav class="ml-auto">

       <b-navbar-nav>
          <div v-if="status === 'loggedin'">
          <b-nav-item href="#" ><router-link to="/" style="color:rgba(0,0,0,0.5);"><span><b>Home</b></span></router-link></b-nav-item>
          </div>
          <div v-if="status === 'loggedin'">
          <b-nav-item href="#"><router-link to="/orders" style="color:rgba(0,0,0,0.5);"><b>Orders</b></router-link></b-nav-item>
          </div>
          <div v-if="status === 'loggedin'">
          <b-nav-item href="#"><router-link to="/wallet" style="color:rgba(0,0,0,0.5);"><b>Wallet</b></router-link></b-nav-item>
          </div>
          
          <div v-if="status === 'login'">
          <b-button variant="danger" v-on:click="login"><b>Log In</b></b-button>
          </div>
          <div v-if="status === 'loggedin'"> 
            <router-link to="/profile"><b-button variant="warning"  ><b>{{user}}</b></b-button></router-link>
            
           </div>
           <div v-if="status === 'loggedin'">
            <router-link to="/"><b-button variant="danger" style="margin-left:5%" class="logout" v-on:click="logout"><b>Log Out</b></b-button></router-link>
           </div>
       </b-navbar-nav>
      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
<modal name="login" :width="'70%'"
         :height="'auto'" :pivot-y="0.3">
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
       status:'login',
       user:'Archer'
    }
  },
  methods:{
      logout(){
          this.status='login';
      },
      login(){
          this.$modal.show('login');
      },
      
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
</style>