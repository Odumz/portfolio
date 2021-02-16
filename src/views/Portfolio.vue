<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-primary ">
        Portfolio
        <h1>Latest Works</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <gallery :content=content />
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
          path: '/work/1',
          icon: 'lorem'
        },
        {
          text: 'About',
          path: '/work/2',
          icon: 'about'
        },
        {
          text: 'Portfolio',
          path: '/work/3',
          icon: 'portfolio'
        },
        {
          text: 'Services',
          path: '/work/4',
          icon: 'services'
        },
        {
          text: 'Contact',
          path: '/work/5',
          icon: 'contact'
        },
        {
          text: 'Blog',
          path: '/work/6',
          icon: 'blog'
        }
      ]
  }),
}
</script>

<style scoped>

</style>