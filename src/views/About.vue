<template>
    <div class="md: tw-bg-secondary tw-h-screen tw-mb-16">
        <myinfo class="info tw-w-full tw-flex md:tw-h-2/5 tw-overflow-y-hidden tw-mx-auto" />
        <!-- <div class="">
            <skills class="md:tw-h-screen md:tw-w-2/3 tw-overflow-y-scroll tw-mx-auto" :skills=skills />
            <profileCard class="info tw-flex md:tw-w-1/3 tw-my-2 tw-mx-auto tw-py-4 tw-pr-20" />
        </div> -->
        <div class="md:tw-h-3/5 tw-overflow-hidden tw-w-full tw-flex tw-mx-auto tw-py-4 tw-pr-0 tw-mt-auto">
            <div class="md:tw-flex tw-w-full tw-items-center">
                <!-- <profile-card class="md:tw-w-2/5 tw-w-full tw-mx-auto tw-pt-4" /> -->
            </div>
        </div>
    </div>
    <Footer class="tw-mt-auto" />
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
            percent: 80,
            color: '#51a3a3',
            type: 'core'
            },
            {
            lang: 'CSS',
            percent: 60,
            color: '#75485e',
            type: 'core'
            },
            {
            lang: 'Javascript',
            percent: 50,
            color: '#cb904d',
            type: 'core'
            },
            {
            lang: 'PHP',
            percent: 50,
            color: '#dfcc74',
            type: 'core'
            },
            {
            lang: 'C#',
            percent: 15,
            color: '#c3e991',
            type: 'core'
            },
            {
            lang: 'MySQL',
            percent: 50,
            color: '#2667ff',
            type: 'database'
            },
            {
            lang: 'Vuejs',
            percent: 50,
            color: '#ff5376',
            type: 'framework'
            },
            {
            lang: 'Laravel/Lumen',
            percent: 55,
            color: '#283618',
            type: 'framework'
            },
            {
            lang: 'WordPress',
            percent: 50,
            color: '#ffcad4',
            type: 'cms'
            },
            {
            lang: 'Amazon Web Services',
            percent: 10,
            color: '#d0e562',
            type: 'infrastructure'
            },
            {
            lang: 'Git',
            percent: 65,
            color: '#d7c9aa',
            type: 'others'
            },
            {
            lang: 'Figma',
            percent: 60,
            color: '#f3c677',
            type: 'design'
            },
            {
            lang: 'Adobe Photoshop',
            percent: 65,
            color: '#b4c4ae',
            type: 'design'
            },
            {
            lang: 'Docker',
            percent: 10,
            color: '#252627',
            type: 'container'
            },
            {
            lang: 'Nodejs',
            percent: 20,
            color: '#fff9fb',
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