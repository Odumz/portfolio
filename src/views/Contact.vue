<template>
 <h1 class="tw-font-bold tw-text-tertiary tw-text-4xl tw-tracking-wide">Contact Me</h1>
    <!-- <Form /> -->
    <contact />
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
    
}
</script>

<style scoped>

</style>