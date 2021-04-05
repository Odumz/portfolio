<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-tertiary ">
        <!-- <port /> -->
        <h1 class="tw-p-10 tw-text-3xl tw-font-bold">Latest Works</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <!-- <gallery :content=content /> -->
        <Experience :experience=experience />
    </div>
    <Footer />
</template>

<script>
import Experience from '../components/experience.vue'
// import port from '../components/portfolio.vue'
import Footer from '../components/footer.vue'
// import gallery from '../components/Gallery.vue'
export default {
    components: { 
        // gallery,
        Experience,
        Footer,
        // port
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
          company: "Enterprise Development Center",
          start_time: "05-01-2021 09:10:15",
          working_till_present: true,
          end_time: "",
          description: 'This is some lorem ipsum test awesomely short but needs to be long kinda text but I don\'t know why this nepa people will just take light like that. You people are the worst scum ever. Also this is supposed to be something about my experiences while working here.',
          location: "Lagos"
        },
        {
          company: "Eko Innovation Center",
          start_time: "?",working_till_present: false,
          end_time: "",
          description: 'This is some lorem ipsum test awesomely short but needs to be long kinda text but I don\'t know why this nepa people will just take light like that. You people are the worst scum ever. Also this is supposed to be something about my experiences while working here.',
          location: "Lagos"
        },
        {
          company: "Econnect Center",
          start_time: "05-05-2021 09:10:15",
          working_till_present: false,
          end_time: "",
          description: 'This is some lorem ipsum test awesomely short but needs to be long kinda text but I don\'t know why this nepa people will just take light like that. You people are the worst scum ever. Also this is supposed to be something about my experiences while working here.',
          location: "Lagos"
        },
        {
          company: "Entertainment Factory Center",
          start_time: "05-01-2020 09:10:15",
          working_till_present: true,
          end_time: "",
          description: 'This is some lorem ipsum test awesomely short but needs to be long kinda text but I don\'t know why this nepa people will just take light like that. You people are the worst scum ever. Also this is supposed to be something about my experiences while working here.',
          location: "Lagos"
        },
        {
          company: "Enterprise Disease Center",
          start_time: "?",
          working_till_present: false,
          end_time: "",
          description: 'This is some lorem ipsum test awesomely short but needs to be long kinda text but I don\'t know why this nepa people will just take light like that. You people are the worst scum ever. Also this is supposed to be something about my experiences while working here.',
          location: "Lagos"
        },
      ]
  }),
}
</script>

<style scoped>

</style>