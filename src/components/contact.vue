<template>
    <div class="md:tw-mb-10 tw-mb-32 tw-ml-20 md:tw-ml-28 lg:tw-ml-0 lg-ml tw-flex xl:tw-items-start xl:tw-pt-14 tw-w-full tw-min-h-full tw-justify-center tw-items-center">
        <div class="tw-mr-24 md:tw-mr-32 lg:tw-mr-0 lg-mr tw-w-11/12">
            <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-evenly tw-overflow-hidden  md:tw-space-x-6 tw-space-y-6 md:tw-space-y-0 tw-bg-tertiary tw-w-full tw-max-w-max tw-p-8 sm:tw-p-12 tw-rounded-xl tw-shadow-lg tw-text-secondary">
                <div class="tw-flex md:tw-w-3/5 lg:tw-w-1/2 tw-flex-col tw-space-y-8 tw-justify-between">
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
                <contactForm class="" />
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

@media only screen and (min-width: 1851px) {
    .lg-ml{
        margin-left: 10px;
    }

    .lg-mr{
        margin-right: 10px;
    }
}

@media only screen and (min-width: 1890px) {
    .lg-ml {
        margin-left: 20px;
    }
}

@media only screen and (min-width: 1920px) {
    .lg-ml {
        margin-left: 35px;
    }
}

@media only screen and (min-width: 2560px) {
    .lg-ml {
        margin-left: 11%;
    }
}
</style>