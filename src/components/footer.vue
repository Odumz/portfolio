<template>
    <div class="tw-text-tertiary tw-bg-secondary tw-py-4 md:tw--mt-10 tw--mt-32">
        <p class="tw-text-5xl tw-font-bold tw-my-10">0dumz.</p>
        <p class="tw-text-gray-500 tw-px-16"> Do feel free to hit me up anytime you have an interesting project! 😊</p>
        <socials class="tw-mt-4 tw-pb-12"
        :socials=socials />
    </div>
    <div class="line tw-bg-secondary tw-py-4 tw-border-tertiary">
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
            {
            path: 'https://github.com/Odumz',
            icon: 'github'
            },
            {
            path: 'https://stackoverflow.com/users/14846855/0dumz',
            icon: 'stackoverflow'
            },
            {
            path: 'tel:9054556936',
            icon: 'phone-social'
            },
            {
            path: 'mailto:odumz20@gmail.com',
            icon: 'mail-social'
            },
            {
            path: 'https://www.figma.com/@0dumz',
            icon: 'figma'
            },
        ],
        show: true 
    })
}
</script>

<style scoped>

.line {
    border-color: rgba(253, 178, 20, 0.29);
    border-top-width: 1px;
}

@media screen and (max-width: 768px) {
}
</style>