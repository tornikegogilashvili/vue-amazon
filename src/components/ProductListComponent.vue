<template>
  <div class="col-12 col-lg-9">
    <div class="row" v-if="products.length > 0">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-12 col-md-6 col-lg-4 mb-2"
        
      >
        <div v-motion-pop class="card wait" style="background-color: #f6fff7; border: none; box-shadow: 1px 0px 10px #ffffff; border-radius: 20px; height: 500px; " >
          <img :src="product.thumbnail" class="card-img-top" style="height: 200px; border-radius: 20px;">
          <div class="card-body">
            <div style="height: 80px;">
              <h5 class="card-title" style="font-size: 24px; font-weight: bold;">{{ product.title }}</h5>
            </div>
            <div style="height: 80px;">
              <p class="card-text" style="font-size: 18px;">{{ product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description }}</p>
            </div>
            <router-link :to="'/productFull/' + product.id" class="btn btn-primary" style="border-radius: 30px; padding: 16px; font-size: 20px; margin-top: 18px; background-color: #2b7a69; border: none;">{{ $t("read more") }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HttpRequests from '@/httprequests/HttpRequests';
const httprequests = new HttpRequests();

export default {
  data() {
    return {
      products: [],
    };
  },
  watch: {
    '$route'(event) {
      this.getProducts(event.params.category);
    },
  },
  computed: {
    products() {
      return this.products.filter((obj) => obj.title.toLowerCase().includes(this.$store.state.searchWord.toLowerCase()));
    },
  },
  mounted() {
    this.getProducts(this.$route.params.category);
    console.log('Component mounted!');
  },
  methods: {
    getProducts(categoryFilter) {
      httprequests.getProducts(categoryFilter).then(response => {
        this.products = response.data.products;
      });
    },
  },
};
</script>

<style>
.wait {
  transition: all 0.4s ease-out;
}
</style>
