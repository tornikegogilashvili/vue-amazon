<template>
    <MainHeader/> 
         <router-view/>
    <MainFooter/>

</template>
<script>
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
export default{

    components:{
        MainHeader,
        MainFooter
    }

}
</script>

