<template>
    <div class="tw-flex tw-bg-secondary tw-h-screen tw-mb-16">
        <myinfo class="info tw-w-full tw-flex md:tw-h-2/5 tw-overflow-y-hidden tw-mx-auto tw-py-4" />
        <!-- <profileCard class="info tw-flex tw-my-2 tw-mx-auto tw-py-4 tw-pr-20" /> -->
        <div class="md:tw-h-3/5 tw-overflow-hidden tw-w-full tw-flex tw-mx-auto tw-py-4 tw-pr-0 tw-mt-auto">
            <div class="md:tw-flex tw-w-full tw-items-center">
                <!-- <skills class="md:tw-w-3/5 tw-w-full tw-mx-auto" :skills=skills /> -->
                <!-- <profile-card class="md:tw-w-2/5 tw-w-full tw-mx-auto tw-pt-4" /> -->
            </div>
        </div>
    </div>
    <Footer class="" />
</template>

<script>
import Footer from '../components/footer.vue'
import myinfo from '../components/my-info'
// import ProfileCard from '../components/profileCard'
// import Skills from '../components/Skills.vue'

export default {
    components: {
        myinfo,
        Footer,
        // ProfileCard,
        // Skills
    },
   data: () => ({
        skills: [
            {
            lang: 'HTML5',
            percent: 'https://facebook.com',
            color: 'facebook',
            type: 'core'
            },
            {
            lang: 'CSS',
            percent: 'https://github.com',
            color: 'github',
            type: 'core'
            },
            {
            lang: 'Javascript',
            percent: 'https://linkedin.com',
            color: 'linkedin',
            type: 'core'
            },
            {
            lang: 'PHP',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'core'
            },
            {
            lang: 'C#',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'core'
            },
            {
            lang: 'Vuejs',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'framework'
            },
            {
            lang: 'Laravel/Lumen',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'framework'
            },
            {
            lang: 'WordPress',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'cms'
            },
            {
            lang: 'Amazon Web Services',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'infrastructure'
            },
            {
            lang: 'Git',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'others'
            },
            {
            lang: 'Figma',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'design'
            },
            {
            lang: 'Adobe Photoshop',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'design'
            },
            {
            lang: 'Docker',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'container'
            },
            {
            lang: 'Nodejs',
            percent: 'https://twitter.com',
            color: 'twitter',
            type: 'framework'
            },
        ],
    })  
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