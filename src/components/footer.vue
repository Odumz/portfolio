<template>
    <div class="tw-text-tertiary tw-bg-secondary tw-py-4 md:tw--mt-10 tw--mt-32">
        <p class="tw-text-5xl tw-font-bold tw-my-10">0dumz.</p>
        <p class="tw-text-gray-500 tw-px-16"> Do feel free to hit me up anytime you have an interesting project! 😊</p>
        <socials class="tw-mt-4 tw-pb-12"
        :socials=socials />
    </div>
    <div class="line tw-bg-secondary tw-py-4 tw-border-tertiary border-t-1">
        <p class="tw-py-2 tw-text-gray-500"> &copy; 2021 <span class="tw-text-tertiary"> Odumz </span> </p>
    </div>
</template>

<script>
import socials from '../components/socials-footer'
export default {
  components: { socials },
    
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
.border-t-1 {
    border-top-width: 1px;
}

.line {
    border-color: rgba(253, 178, 20, 0.29);
}

@media screen and (max-width: 768px) {
}
</style>