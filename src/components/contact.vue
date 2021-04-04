<template>
    <div class="tw-ml-20 md:tw-ml-28 lg-ml tw-flex tw-w-full tw-min-h-screen tw-justify-center tw-items-center">
        <div class="tw-mr-24 md:tw-mr-32 lg-mr tw-w-11/12">
            <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-evenly tw-overflow-hidden  md:tw-space-x-6 tw-space-y-6 md:tw-space-y-0 tw-bg-tertiary tw-w-full tw-max-w-6xl tw-p-8 sm:tw-p-12 tw-rounded-xl tw-shadow-lg tw-text-secondary">
                <div class="tw-flex tw-flex-col tw-space-y-8 tw-justify-between">
                    <div>
                        <h1 class="tw-font-bold tw-text-4xl tw-tracking-wide">Contact Me</h1>
                        <p class="tw-pt-2 tw-text-secondary tw-text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
                <div class="tw-relative">
                    <div class="tw-absolute tw-z-0 tw-left-96 tw-bottom-96 tw-w-40 tw-h-40 tw-bg-secondary tw-rounded-full"></div>
                </div>
                <div class="tw-relative">
                    <div class="tw-absolute tw-z-0 tw--left-6 tw--bottom-20 tw-w-40 tw-h-40 tw-bg-secondary tw-rounded-full"></div>
                </div>
                <div class="tw-relative tw-z-10 tw-bg-white md:tw-80 tw-rounded-xl tw-shadow-lg tw-p-8">
                    <form action="" class="tw-flex tw-flex-col tw-space-y-4" method="post">
                        <div>
                            <label for="name" class="tw-text-sm">Your name</label>
                            <input type="text" 
                                name="name" id="name" 
                                placeholder="Your name" 
                                class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400">
                        </div>
                        <div>
                            <label for="email" class="tw-text-sm">Email Address</label>
                            <input type="text" 
                                name="email" id="email" 
                                placeholder="Your email" 
                                class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400">
                        </div>
                        <div>
                            <label for="message" class="tw-text-sm">Drop a message...</label>
                            <textarea
                                name="message" id="message" 
                                placeholder="Your message"
                                rows="4"
                                class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400"></textarea>
                        </div>
                        <button class="tw-inline-block tw-self-end tw-bg-tertiary tw-text-secondary tw-font-bold tw-rounded-lg tw-px-6 tw-py-2 tw-uppercase tw-text-sm">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from './icons'
import socials from './socials-contact'

export default {
    props: ['contact', 'background'],
    components: {
        icons,
        socials
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