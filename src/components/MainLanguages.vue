<template>
    <ul class="list-inline mb-0 ms-4">
        <li class="list-inline-item">
            <button @click="changeLang('ge')" class="btn btn-secondary">GE</button>
        </li>
        <li class="list-inline-item">
            <button @click="changeLang('en')" class="btn btn-secondary">EN</button>
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