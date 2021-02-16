<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-primary ">
        Blog
        <h1>Latest Blogs</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <gallery :blogs=blogs />
    </div>
</template>

<script>
import gallery from '../components/Gallery.vue'
export default {
    components: { 
        gallery 
    },    
  data: () => ({
      blogs: [
        {
          text: 'Home',
          path: '/',
          icon: 'lorem'
        },
        {
          text: 'About',
          path: '/about-me',
          icon: 'about'
        },
        {
          text: 'Portfolio',
          path: '/my-works',
          icon: 'portfolio'
        },
        {
          text: 'Services',
          path: '/services-i-offer',
          icon: 'services'
        },
        {
          text: 'Contact',
          path: '/contact-me',
          icon: 'contact'
        },
        {
          text: 'Blog',
          path: '/my-blogs',
          icon: 'blog'
        }
      ]
  }),
}
</script>

<style scoped>

</style>