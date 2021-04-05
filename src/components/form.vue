<template>    
    <div>
        <div class="tw-relative">
            <div class="tw-absolute tw-z-0 tw-left-40 tw--top-6 ball-top tw-w-40 tw-h-40 tw-bg-primary tw-rounded-full"></div>
        </div>
        <div class="tw-relative">
            <div class="tw-absolute tw-z-0 tw--left-20 tw-top-96 ball-bottom tw-w-40 tw-h-40 tw-bg-secondary tw-rounded-full"></div>
        </div>
        <div class="tw-relative tw-z-10 tw-bg-white md:tw-80 tw-rounded-xl tw-shadow-lg tw-p-8">
            <form action="" class="tw-flex tw-flex-col tw-space-y-4" method="post">
                <div>
                    <label for="name" class="tw-text-sm">Your name</label>
                    <input type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Your name" 
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400" />
                </div>
                <div>
                    <label for="email" class="tw-text-sm">Email Address</label>
                    <input type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Your email" 
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400" />
                </div>
                <div>
                    <label for="message" class="tw-text-sm">Drop a message...</label>
                    <textarea
                        name="message" 
                        id="message" 
                        placeholder="Your message"
                        rows="4"
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400"></textarea>
                </div>
                <button class="tw-inline-block tw-self-end tw-bg-tertiary tw-text-secondary tw-font-bold tw-rounded-lg tw-px-6 tw-py-2 tw-uppercase tw-text-sm">Send Message</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

@media only screen and (max-width: 376px) {
    .ball-top{
        left: 130px;
        top: 20px;
    }

    .ball-bottom{
        left: -80px;
        top: 30px
    }
}

@media only screen and (max-width: 419px) {
    .ball-top{
        left: 250px;
        top: -31px
    }
}

@media only screen and (max-width: 490px) {
    .ball-top{
        left: 255px;
        top: -31px
    }

    .ball-bottom {
        left: -90px;
        top: 420px;
    }
}
</style>