<template>
    <div class="tw-flex tw-flex-col tw-bg-secondary tw-h-screen">
        <myinfo class="info tw-w-full tw-flex md:tw-h-2/5 sm:tw-h-full tw-overflow-y-hidden tw-mx-auto tw-py-4 tw-pr-0" />
        <!-- <profileCard class="info tw-flex tw-my-2 tw-mx-auto tw-py-4 tw-pr-20" /> -->
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
import myinfo from '../components/my-info'
// import profileCard from '../components/profileCard'

export default {
    components: {
        myinfo,
        // profileCard,
        Footer
    }    
}
</script>

<style scoped>
.info {
    position: absolute;
}
 @media screen and (max-width: 920px) {
        .info {
            text-align: right;
            padding-left: 100px !important;
        }
 }

   @media screen and (max-width: 720px) {
        .info {
            padding-left: 60px !important;
        }
    }
</style>