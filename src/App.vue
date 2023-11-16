<template>
  <router-view/>
</template>

<script>
import axios from 'axios';


export default{

  
  mounted(){

    axios.defaults.baseURL='https://dummyjson.com/'

  }


}


</script>