<template>
    <div class="tw-mx-auto tw-p-8 tw-bg-secondary tw-text-tertiary tw-ml-10 ">
        <!-- <port /> -->
        <h1 class="tw-p-10 tw-text-3xl tw-font-bold">Latest Works</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptatem aut doloremque sed nulla ratione, perspiciatis consequuntur et nesciunt itaque corrupti repudiandae, dolores commodi eveniet earum accusamus fugiat magni quasi.</p>
        <!-- <gallery :content=content /> -->
        <resume :resume=resume />
        <Experience :experience=experience />
    </div>
    <Footer />
</template>

<script>
import Experience from '@/components/experience.vue'
import resume from '@/components/resume.vue'
// import port from '@/components/portfolio.vue'
import Footer from '@/components/footer.vue'
// import gallery from '../components/Gallery.vue'
import biodata from '../../biodata.json'

import { Octokit } from "@octokit/core";

export default {
  components: { 
      // gallery,
      Experience,
      Footer,
      resume,
      // port
  },
  mounted() {
    this.getRepos();
    this.getBiodata();
  },
  data: () => ({
    resume: biodata,
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
    ],
    repo: []
  }),
  methods: {
    async getRepos () {
      // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
      const octokit = new Octokit({ auth: process.env.GITHUB_AUTH });

      const repository = await octokit.request("GET /users/{org}/repos", {
        org: "Odumz",
        type: "public",
      }).then((response) => {
        console.log(response);
        this.repo = response;
      }).catch((error) => {
        let err = error.response.data ? error.response.data.message : "Something happened";
        console.log(err)
      });
      return repository;
    },
    getBiodata () {
      console.log(biodata);
    }
  }
}
</script>

<style scoped>

</style>