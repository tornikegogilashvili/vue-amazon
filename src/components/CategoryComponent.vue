<template>
     <div class="col-12 mb-2 mb-lg-0 col-lg-3">

<div class="w-100    p-2" style="box-shadow: 1px 0px 10px #ffffff; border-radius: 20px;">

    <h4 class="text-center">{{ $t('category') }}</h4>

    <ul v-if="categories.length>0" class="list-unstyled d-flex flex-wrap justify-content-around d-lg-block">
        <li style="background-color: #dee6df; border-radius: 20px;" class="my-2 d-grid category-btn" v-for="(category,i) in categories" :key="i" >
            <router-link class="btn  text-decoration-none text-dark category-btn" style="font-weight: bold;" :to="'/'+category">{{ category.toUpperCase() }}</router-link>
        </li> 

    </ul>


</div>



</div>
</template>

<script>
import HttpRequests from '@/httprequests/HttpRequests';
const httprequests= new HttpRequests()

export default{

    data(){

        return{ 
            categories:[] 

        }

    },

    mounted(){
        this.getCategories()

    },

    methods:{

        getCategories(){

            httprequests.getCategories().then(response=>{
                this.categories=response.data

            })

        }

    }

}

</script>

<style>
    .category-btn:hover{
        background-color: #2956fc;
    }
</style>