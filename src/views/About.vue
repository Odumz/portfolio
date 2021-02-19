<template>
    <div class="tw-flex tw-flex-col tw-bg-secondary tw-h-screen">
        <myinfo class="tw-flex tw-h-2/5" />
        <profileCard />
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
import myinfo from '../components/my-info'
import profileCard from '../components/profileCard'

export default {
    components: {
        myinfo,
        profileCard,
        Footer
    }    
}
</script>

<style scoped>

</style>