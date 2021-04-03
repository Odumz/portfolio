<template>
    <div class="tw-flex tw-w-full tw-min-h-screen tw-justify-center tw-items-center">
        <div>
            <div class="tw-flex tw-flex-col tw-space-y-6 tw-bg-tertiary tw-w-full tw-max-w-6xl tw-p-8 tw-rounded-xl tw-shadow-lg tw-text-secondary">
                <div class="tw-flex tw-flex-col tw-space-y-8 tw-justify-between">
                    <div>
                        <h1 class="tw-font-bold tw-text-4xl tw-tracking-wide">Contact Me</h1>
                        <p class="tw-pt-2 tw-text-secondary tw-text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                    <div>
                        <div>
                            <icons
                    :name=link.icon 
                    class=" tw-mr-3 tw-text-tertiary"/><span>+234 905 455 6936</span>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from './icons'

export default {
    props: ['contact'],
    components: {
        icons
    },    
}
</script>