<template>
      <nav class="navbar navbar-expand-lg sticky-top w-100 bg-body-tertiary">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">{{ $t('amazon') }}</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">{{ $t('main') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/aboutus">{{ $t('aboutUs') }}</router-link>
              </li>
         
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">{{ $t('contact') }}</router-link>
              </li>
            </ul> 
                <MainSearch/> 
            <div class="d-flex mt-2 mt-lg-0"> 
                
                   <MainCart/> 
                   <MainLanguages/>
        </div>


          </div>
        </div>
      </nav>


</template>

<script>
import MainSearch from './MainSearch.vue';
import MainCart from './MainCart.vue'
import MainLanguages from './MainLanguages.vue'
export default{

    components:{
        MainSearch,
        MainCart,
        MainLanguages
    }

}

</script>
 