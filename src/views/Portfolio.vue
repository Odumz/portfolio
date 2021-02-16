<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-primary ">
        Portfolio
        <h1>Latest Works</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <gallery />
    </div>
</template>

<script>
import gallery from '../components/Gallery.vue'
export default {
    components: { 
        gallery 
    },    
}
</script>

<style scoped>

</style>