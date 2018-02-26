<template>
<div class="main">
<h3 class="mainheader">Wallet</h3>


<b-card no-body style="margin:2%;">
  <b-tabs pills card>
    <b-tab title="Wallet Balance" active>
      <div>
      <h6><span style="color:#494949">Wallet Balance: </span> <span style="margin-left:2.5%;">{{walletbalance}}</span></h6><b-button><b>Add Money to Wallet</b></b-button>
      
      
      </div>
    </b-tab>
    
    <b-tab title="Transfer Money">
       
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
