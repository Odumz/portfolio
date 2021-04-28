<template>
 <h1 class="tw-font-bold tw-ml-12 md:tw-ml-0 tw-my-4 tw-text-tertiary tw-text-4xl tw-tracking-wide">Have an interesting idea?</h1>
    <contact class="" :contact=contact />
    <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
import contact from '@/components/contact.vue'
export default {
  components: { 
    Footer, 
    contact
  },
    
   data: () => ({
        contact: [
          {
          info: '+234 905 455 6936',
          icon: 'phone'
          },
          {
          info: 'odumz20@gmail.com',
          icon: 'mail'
          },
          {
          info: '5, Ogunyemi str, Famous.',
          icon: 'location-2'
          },
        ],
        show: true 
    })    
}
</script>

<style scoped>

</style>