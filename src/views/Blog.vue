<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-primary ">
        Blog
        <h1>Latest Blogs</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <gallery :content=content class="tw-flex" />
    </div>
</template>

<script>
import gallery from '../components/Gallery.vue'
export default {
    components: { 
        gallery 
    },    
  data: () => ({
      content: [
        {
          text: 'Home',
          path: '/blog/1',
          icon: 'lorem'
        },
        {
          text: 'About',
          path: '/blog/2',
          icon: 'about'
        },
        {
          text: 'Portfolio',
          path: '/blog/3',
          icon: 'portfolio'
        },
        {
          text: 'Services',
          path: '/blog/4',
          icon: 'services'
        },
        {
          text: 'Contact',
          path: '/blog/5',
          icon: 'contact'
        },
        {
          text: 'Blog',
          path: '/blog/6',
          icon: 'blog'
        }
      ]
  }),
}
</script>

<style scoped>

</style>