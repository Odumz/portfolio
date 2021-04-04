<template>
    <div class="tw-ml-20 md:tw-ml-2 tw-flex tw-w-full tw-min-h-screen tw-justify-center tw-items-center">
        <div class="tw-mr-24 md:tw-mr-2">
            <div class="tw-flex tw-flex-col tw-space-y-6 tw-bg-tertiary tw-w-full tw-max-w-6xl tw-p-8 tw-rounded-xl tw-shadow-lg tw-text-secondary">
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
                <div class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8">
                    <form action="" class="tw-flex tw-flex-col tw-space-y-4" method="post">
                        <div>
                            <label for="name" class="tw-text-sm">Your name</label>
                        </div>
                        <div>
                            <input type="text" name="name" id="name" placeholder="Your name" class="tw-ring-1 tw-ring-gray-500">
                        </div>
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