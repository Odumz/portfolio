<template>
    <div class="tw-text-primary tw-bg-secondary tw-py-4">
        <p class="tw-text-5xl tw-font-bold tw-my-10">0dumz</p>
        <p class=""> Do feel free to hit me up anytime if you have an interesting project!</p>
        <socials class="tw-mt-4"
        :socials=socials />
    </div>
    <div class="tw-text-primary tw-bg-secondary tw-py-4 tw-border-primary border-t-1">
        <p class="tw-py-2"> &copy; Odumz 2021 </p>
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

</style>