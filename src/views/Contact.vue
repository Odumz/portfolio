<template>
  <div class="tw-bg-secondary">

  </div>
 <h1 class="tw-font-bold tw-text-tertiary tw-text-4xl tw-tracking-wide">Contact Me</h1>
    <contact class="tw-min-w-full" :contact=contact />
    <!-- <Form /> -->
    <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
// import Form from '../components/form.vue'
import contact from '@/components/contact.vue'
export default {
  components: { 
    // Form, 
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