<template>
    <div class="tw-flex tw-bg-secondary tw-h-screen tw-mb-16">
        <myinfo class="info tw-w-full tw-flex md:tw-h-2/5 sm:tw-h-full tw-overflow-y-hidden tw-mx-auto tw-py-4 tw-pr-0" />
        <!-- <profileCard class="info tw-flex tw-my-2 tw-mx-auto tw-py-4 tw-pr-20" /> -->
        <div class="md:tw-h-3/5 sm:tw-h-full tw-overflow-hidden tw-w-full tw-flex tw-mx-auto tw-py-4 tw-pr-0 tw-mt-40">
            <div class="lg:tw-flex md:tw-flex-row tw-w-full tw-flex-col tw-items-center">
                <skills class="md:tw-w-3/5 lg:tw-w-3/5 tw-w-full tw-mx-auto" />
                <profile-card class="md:tw-w-2/5 lg:tw-w-2/5 tw-w-full tw-mx-auto tw-pt-4" />
            </div>
        </div>
    </div>
    <Footer class="" />
</template>

<script>
import Footer from '../components/footer.vue'
import myinfo from '../components/my-info'
import profileCard from '../components/profileCard'
import ProfileCard from '../components/profileCard.vue'
import Skills from '../components/Skills.vue'

export default {
    components: {
        myinfo,
        profileCard,
        Footer,
        ProfileCard,
        Skills
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