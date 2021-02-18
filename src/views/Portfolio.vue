<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-primary ">
        Portfolio
        <experience />
        <h1>Latest Works</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <gallery :content=content />
    </div>
    <Footer />
</template>

<script>
import Experience from '../components/experience.vue'
import Footer from '../components/footer.vue'
import gallery from '../components/Gallery.vue'
export default {
    components: { 
        gallery,
        Experience,
        Footer 
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
      ],
      experience: [
        {
          name: "Enterprise Development Center",
          time: "05-01-2021 09:10:15",
          completed: true
        },
        {
          name: "Eko Innovation Center",
          time: "?",
        },
        {
          name: "Econnect Center",
          time: "05-05-2021 09:10:15",
          completed: true
        },
        {
          name: "Entertainment Factory Center",
          time: "05-01-2020 09:10:15",
          completed: true
        },
        {
          name: "Enterprise Disease Center",
          time: "?",
        },
      ]
  }),
}
</script>

<style scoped>

</style>