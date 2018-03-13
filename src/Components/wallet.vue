<template>
<div>
<div class="main">


<div v-if="msg">
<b-card no-body >
  <b-tabs pills card>
    <b-tab title="Wallet Balance" active>
      <div>
      <b-row>
      <b-col sm="2">
      <h6 style="color:black">Wallet Balance:</h6>
      </b-col>
      <b-col sm="2">
      <h6 style="color:black">₹ {{walletbalance}}</h6>
      </b-col>
      <b-col sm="1">
      
      </b-col>
      </b-row>
      <b-btn v-b-toggle.collapse1 variant="info">Add Money to your wallet</b-btn>
      

  <b-collapse id="collapse1" class="mt-2">
    <b-card>
      
       <b-row>
       <b-col>
      <b-input placeholder="Enter amount to send"  v-model="money" type="number" ></b-input>
      </b-col>
      <b-col>
         <b-button variant="info" v-on:click="addmoney">Add Money</b-button>
      </b-col>
      </b-row>
      
    </b-card>
  </b-collapse>
      
      
      </div>
    </b-tab>
    
    <b-tab title="Transfer Money">
       
       <b-row>
       <b-col>

       <b-form-input 
                  type="number"
                  
                  placeholder="Enter the Account number"></b-form-input>
       </b-col>
       <b-col>
       <b-button variant="info">Send Money</b-button>
       </b-col>
       </b-row>
       
    </b-tab>
    <b-tab title="Passbook">
       
    </b-tab>
    
  </b-tabs>
</b-card>


</div>

</div>
<div v-if="!msg">
  <h2 style="color:#666666;text-align:center">Login into iPay for more features</h2> 
</div>
</div>
</template>

<script>


export default {
  created(){
     if(this.$session.exists())
    {
        this.msg=true;          
    }
    this.walletbalance=this.$session.get('wallet');
  },
  components:{
     
      
  },
  name: 'app',
  data () {
    return {
        walletbalance:'',
        money:'',
        msg:false

    }
  },
  methods:{
    editpersonal(){
      this.personaledit="yes";
    },
    submitpersonal(){
      this.personaledit="no";
    },
    editaddress(){
      this.addressedit="yes";
    },
    submitaddress(){
      this.addressedit="no";
    },
    addmoney(){
      this.walletbalance=parseInt(this.walletbalance+this.money);
    }

  }
}
</script>

<style scoped>
.main{
  background:#f4f4f4;
  box-shadow:0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: rgb(163, 161, 157) !important;
  
  margin: 3%; 
  margin-bottom: 5%;
  border-radius: 15px;
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
input[type="number"]
{
  outline:none;
  box-shadow:none;
  border:1px solid white;
   background:rgba(0,0,0,0.08);
  border-radius:5px;
  font-weight: bold;  
  
}
input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
 .card{
   border:1px solid white;
 } 
</style>
