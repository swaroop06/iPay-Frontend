<template>
<div class="main">
<navbar></navbar>
<router-view></router-view>


</div>
</template>

<script>

import navbar from  './Components/navbar'
import footer from './Components/footer'
export default {
  components:{
     'navbar':navbar,
     'foot':footer
      
  },
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
h1{
  color: white !important;
}
.main{
  overflow-x: hidden;
  
}
</style>
