<template>
 <section style="background-color: #2b7a69;padding-top: 30px;">
        <div class="container-fluid">
            <div class="row mt-0">
                <CategoryComponent/>


                <ProductListComponent/>

            </div>
        </div>
</section>

</template>

<script>
import CategoryComponent from '@/components/CategoryComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue'
export default{

    components:{
        CategoryComponent,
        ProductListComponent
    }

}
</script>