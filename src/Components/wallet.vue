<template>
<div class="main">



<b-card no-body style="margin:2%;">
  <b-tabs pills card>
    <b-tab title="Wallet Balance" active>
      <div>
      <b-row>
      <b-col sm="1">
      <h6>Wallet Balance:</h6>
      </b-col>
      <b-col sm="2">
      <h6>{{walletbalance}}</h6>
      </b-col>
      </b-row>
      
      <b-button variant="info"><b>Add Money to Wallet</b></b-button>
      
      
      </div>
    </b-tab>
    
    <b-tab title="Transfer Money">

       <b-form-input 
                  type="text"
                  style="width:40%"
                  placeholder="Enter the Account number"></b-form-input>
       <br>
       <b-button variant="info">Send Money</b-button>

    </b-tab>
    <b-tab title="Passbook">
       
    </b-tab>
    
  </b-tabs>
</b-card>


</div>
</template>

<script>


export default {
  components:{
     
      
  },
  name: 'app',
  data () {
    return {
        walletbalance:'200.0'


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
