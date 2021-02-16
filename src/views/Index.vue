<template>
    <div id="app" class="tw-flex tw-flex-row-reverse">
        <home class="home tw-h-screen tw-w-full tw-mx-auto tw-bg-secondary tw-py-8 tw-pr-24" />
        <socials v-if="show" class=" tw-w-0.5 tw-h-screen"
        :socials=socials />
    </div>
    <Footer />
    
</template>

<script>
import socials from '../components/socials'
import home from '../components/home'
import Footer from '../components/footer.vue'

export default {
    components: {
        socials,
        home,
        Footer
    },
   data: () => ({
        socials: [
            {
            title: 'Facebook',
            path: 'https://facebook.com',
            icon: 'facebook'
            },
            {
            title: 'Github',
            path: 'https://github.com',
            icon: 'github'
            },
            {
            title: 'LinkedIn',
            path: 'https://linkedin.com',
            icon: 'linkedin'
            },
            {
            title: 'Twitter',
            path: 'https://twitter.com',
            icon: 'twitter'
            },
        ],
        show: true 
    })
}
</script>

<style scoped>
    @media screen and (max-width: 920px) {
        .home {
            padding-left: 10px !important;
            padding-right: 70px !important;
        }
    }
</style>