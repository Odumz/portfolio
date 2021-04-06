<template>
    <div class="tw-ml-20 md:tw-ml-28 lg-ml tw-flex tw-w-full tw-min-h-screen tw-justify-center tw-items-center">
        <div class="tw-mr-24 md:tw-mr-32 lg-mr tw-w-11/12">
            <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-evenly tw-overflow-hidden  md:tw-space-x-6 tw-space-y-6 md:tw-space-y-0 tw-bg-tertiary tw-w-full tw-max-w-6xl tw-p-8 sm:tw-p-12 tw-rounded-xl tw-shadow-lg tw-text-secondary">
                <div class="tw-flex md:tw-w-3/5  tw-flex-col tw-space-y-8 tw-justify-between">
                    <div class="">
                        <h1 class="tw-font-bold tw-text-4xl tw-tracking-wide">Contact Me</h1>
                        <p class="tw-pt-2 md:tw-text-left tw-text-secondary tw-text-sm">
                            I am always interested in intellectual discussions and brain-storming sessions for the next big solution. I totally love the opportunity to write/contribute such solutions afterwards. Do hit me up!
                        </p>
                    </div>
                    <div class="tw-flex tw-flex-col tw-space-y-8">
                        <div v-for="(link, index) in contact" :key="index" class="tw-flex tw-py-1 tw-items-center">
                            <icons 
                                :name=link.icon 
                                class="tw-mr-3 tw-text-secondary"/>
                            <span>{{ link.info }}</span>
                        </div>
                    </div>
                    <div class="">
                        <socials :socials=socials />
                    </div>
                </div>
                <contactForm />
            </div>
        </div>
    </div>
</template>

<script>
import icons from './icons'
import socials from './socials-contact'
import contactForm from './form'

export default {
    props: ['contact', 'background'],
    components: {
        icons,
        socials,
        contactForm,
    },
    data() {
        return {
            socials: [
                {
                path: 'https://web.facebook.com/Bheyordun/',
                icon: 'facebook'
                },
                {
                path: 'https://www.instagram.com/0dumz/',
                icon: 'instagram'
                },
                {
                path: 'https://twitter.com/0dumz',
                icon: 'twitter'
                },
                {
                path: 'https://www.linkedin.com/in/odumz/',
                icon: 'linkedin'
                },
            ],
        }
    },
}
</script>

<style scoped>
@media only screen and (min-width: 921px) {
    .lg-ml{
        margin-left: 25px;
    }

    .lg-mr{
        margin-right: 45px;
    }
}

@media only screen and (min-width: 1271px) {
    .lg-ml{
        margin-left: 25px;
    }

    .lg-mr{
        margin-right: 30px;
    }
}
</style>