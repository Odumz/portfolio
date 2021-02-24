<template>
    <div id="app" class="tw-flex tw-flex-row-reverse tw-bg-secondary">
        <home class="home tw-h-screen tw-w-full tw-mx-auto tw-py-4 tw-pr-20" />
        <socials id="show" class="tw-w-0.5 tw--mt-24"
        :socials=socials />
        <!-- <socials class="tw-w-0.5 tw--mt-24"
        :socials=socials /> -->
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
            path: 'https://linkedin.com',
            icon: 'linkedin'
            },
            {
            path: 'https://facebook.com',
            icon: 'stackoverflow'
            },
            {
            path: 'https://github.com',
            icon: 'github'
            },
            {
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
            padding-left: 100px !important;
            padding-right: 70px !important;
        }
        #show {
            display: none;
        }
        #app {
            display: flex;
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 720px) {
        .home {
            padding-left: 60px !important;
            padding-right: 10px !important;
        }
    }
</style>