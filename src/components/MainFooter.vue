<template>

<footer class="bg-dark text-light">

<div class="container p-5">

    <div class="row justify-content-center align-items-center">

        <div class="col-12 col-md-6 col-lg-4 mt-3">
            <h5>{{ $t("Links") }}</h5>
            <ul class="list-unstyled">
                <li>
                    <router-link class="text-decoration-none text-light" to="/aboutus">{{ $t("ABOUT US") }}</router-link>
                </li>
                <li>
                    <router-link class="text-decoration-none text-light" to="/contact">{{ $t("Contact") }}</router-link>
                </li>

            </ul>

        </div>


        <div class="col-12 col-md-6 col-lg-4  mt-3">
             <FooterSubscribe/>
        </div>


        <div class="col-12 col-md-6 col-lg-4  mt-3">

            <ul class="list-unstyled">
                <li>
                    <i class="bi bi-geo-alt-fill"></i>
                    {{ $t("Jano Bagrationi's 6") }}
                </li>
                <li>
                    <i class="bi bi-envelope-fill"></i>
                    ugcollege@ugcollege.ge
                </li>
                <li>
                    <i class="bi bi-telephone-fill"></i>
                    555 55 55 55
                </li>

            </ul>

            <ul class="list-inline">
                <li class="list-inline-item">
                    <a class="text-decoration-none text-light" href="" target="_blank">
                        <i class="bi bi-facebook"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="text-decoration-none text-light" href="" target="_blank">
                        <i class="bi bi-instagram"></i>
                    </a>
                </li>

            </ul>

        </div>


    </div>

</div>


</footer>

</template>


<script>
import FooterSubscribe from './FooterSubscribe.vue';

export default{
    components:{
        FooterSubscribe
    }
}


</script>