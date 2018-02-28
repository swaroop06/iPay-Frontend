<template>
<div class="main">
  
  
  <table id="orders" class="table table-hover">
        <thead>
         <tr>
           <th>ID</th>
           <th>Product Name</th>
           <th>Order Id</th>
           <th>Date of Order</th>
           <th>Date of Delivery</th>
           <th>Address</th>
           <th>User Name</th> 
           <th>Mode of Payment</th>
            
           <th>Cancel</th>


         </tr>
       </thead>
       <tbody>
        <tr v-for="order,i in orderList">
          <td>{{i+1}}</td>
          <td>{{order.name}}</td>
          <td>{{order.id}}</td>
          <td>{{order.dayoforder}}</td>
          <td>{{order.dayofdel}}</td>
          <td>{{order.address}}</td>
          <td>{{order.username}}</td>
          <td>{{order.modeofpayment}}</td>
          
          <td><b-button variant="danger"  >CANCEL</b-button></td>
     
          

        </tr>
       </tbody>
      </table>



</div>

</template>

<script>


export default {
 created(){
    $(document).ready(function () {
       $('#orders').DataTable();
    });
  },
   name: 'app',
  data () {
    return {
      orderList:[{name:'random1',id:'ord002',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'COD'},
               {name:'random2',id:'ord024',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'COD'},
               {name:'random3',id:'ord034',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'COD'},
               {name:'random4',id:'ord432',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'UPI'},
               {name:'random5',id:'ord098',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'UPI'},
                {name:'random6',id:'ord002',dayoforder:'21-02-2018',dayofdel:'21-02-2018',address:'Random Address',username:'Ronald Archer',modeofpayment:'UPI'},
      
               ]

    }
  },
      
    
 
 
}


  

</script>

<style scoped>
.main{
  box-shadow:0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: rgb(163, 161, 157) !important;
  padding: 2%;
  margin: 3%; 
  margin-bottom: 5%;
  border-radius: 10px;
  background:white;
}
.head{
  color:white;
}
hr{
  width:70%;
    background: #ef690d;
    height: 4px;
    margin-bottom: 3%;
}
td{
    
    color:black;
    text-align:center;
}
th{
   color:black;
   text-align:center;
}
.delete{
    background: rgb(209, 47, 47);
    border: rgb(209, 47, 47);
}
.modify, .modify :active, .modify:focus{
    background: #3f3e3e;
    border: #494746;
}
.modalColor{
  padding: 5%;
  font-weight: bold;
  background-color: #000;
  color:#ef690d;
  height:100%;
  text-align: center;
  font-size: 20px;
  border:solid 1px #ef690d;
}

</style>
