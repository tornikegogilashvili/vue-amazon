<template>
    <ul class="list-inline mb-0 ms-4">
        <li class="list-inline-item">
            <button @click="changeLang('ge')" class="btn">
                <img class="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1280px-Flag_of_Georgia.svg.png" alt="Geo">
            </button>
        </li>
        <li class="list-inline-item">
            <button @click="changeLang('en')" class="btn">
                <img class="flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" alt="GBR">
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    methods: {
        changeLang(lang){
            this.$store.dispatch('changeLang', lang);
        }
    }
}
</script>

<style>
    .flag{
        width: 30px;
        height: 20px;
    }
</style>