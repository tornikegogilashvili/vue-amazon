<template>


<div  class="col-12 col-lg-9">

<div class="row" v-if="products.length>0">

    <div v-for="product in products" :key="product.id" class="col-12 col-md-6 col-lg-4 mb-2">
        <div class="card" style="background-color: #f6fff7; border: none; box-shadow: 1px 0px 10px #555d55;" >
            <img :src="product.thumbnail" class="card-img-top"  style="height: 200px;">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description.length>43?product.description.slice(0,43)+'...':product.description }}</p>
              <router-link :to="'/productFull/'+product.id" class="btn btn-primary">{{ $t("read more") }}</router-link>
            </div>
          </div> 
    </div>
    
    
    


</div>



</div>

</template>

<script>
import HttpRequests from '@/httprequests/HttpRequests';
const httprequests=new HttpRequests()

export default{
  data(){
    return{
      products:[]
    }
  },

  watch:{

    '$route'(event){

      this.getProducts(event.params.category)

    }

  },
  computed:{
    products(){

        return this.products.filter((obj)=>{

        return  obj.title.toLowerCase().includes(this.$store.state.searchWord.toLowerCase())

        })

    }
  },

  mounted(){

      this.getProducts(this.$route.params.category)

  },

  methods:{

    getProducts(categoryFilter){
      httprequests.getProducts(categoryFilter).then(response=>{

        this.products=response.data.products
      })

    }

  }

}

</script>
