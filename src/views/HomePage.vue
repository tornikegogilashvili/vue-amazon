<template>
 <section style="background-color: #f6fff7; " class="mt-2">
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