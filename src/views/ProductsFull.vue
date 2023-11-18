<template>
    <div  class="container">
        <div  class="row m-4" v-if="product">
            <div style="background-color: #f6fff7;" class="col-12 col-md-6 col-lg-4">

                    <img :src="product.thumbnail"  class="img-fluid"/>

            </div>
            <div class="col-12 col-md-6 col-lg-8">
                <p class="h1">{{ product.title }} {{ product.brand }}</p>
                <p>{{ product.description }}</p>
                <p>{{ product.price }} $</p>
                <div class="row">
                    <div class="col-3" v-for="image in product.images">
                        <img :src="image" class="img-fluid"/>
                    </div>
                </div>

                    <div class="row mt-3">
                        <div class="col-8">
                            <input type="number" min="0" v-model="productCount" class="form-control"/>
                        </div>
                        <div style="margin-bottom: 200px;" class="col-4">
                            <button :disabled="productCount==0" class="btn btn-success" @click="addToCart()">დამატება</button>
                        </div>
                    </div>


            </div>
        </div>
    </div>
</template>
<script>
import HttpRequests from '@/httprequests/HttpRequests'
    const httprequests=new HttpRequests()

    export default{

        data(){
            return{
            product:null,
            productCount:0
            }
        },
        mounted(){

            this.getProductFull()
        },
        methods:{

            getProductFull(){
                httprequests.getProductFull(this.$route.params.productID).then(response=>{
                    this.product=response.data
                })

            },
            addToCart(){

                let filteredProduct=this.$store.state.productToCart.find((o)=>{
                    return o.id==this.product.id
                 })

                 if(filteredProduct){
                    filteredProduct.productCount+=this.productCount
                    //localStorage


                    localStorage.setItem('productToCart',JSON.stringify(this.$store.state.productToCart))

                  
                     
                 }else {   
 
                this.product.productCount=this.productCount
                 this.$store.dispatch('setProductToCart',this.product)
                 }

            }

        }


    }

</script>
