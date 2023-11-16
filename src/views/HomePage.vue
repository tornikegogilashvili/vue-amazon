<template>
 <section >
        <div class="container-fluid">
            <div class="row mt-3">
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