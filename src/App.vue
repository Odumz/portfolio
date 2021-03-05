<template>
<div id="app" class="tw-w-screen tw-antialiased">
  <Menu
   :nav-links="navLinks"
   :image-path="require('./assets/logo.png')"
   class="tw-h-full tw-w-1/12 "
   />
  <router-view class="tw-w-11/12" />
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'

// import { Inbox, Home, Grid, Computing, AirplayAudio, Person } from 'akar-icons'

export default {
  components: {
    Menu
  },
  data: () => ({
      navLinks: [
        {
          text: 'Home',
          path: '/',
          icon: 'home'
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
        // {
        //   text: 'Services',
        //   path: '/services-i-offer',
        //   icon: 'services'
        // },
        // {
        //   text: 'Contact',
        //   path: '/contact-me',
        //   icon: 'contact'
        // },
        // {
        //   text: 'Blog',
        //   path: '/my-blogs',
        //   icon: 'blog'
        // }
      ]
  }),
}
</script>

<style>
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2A2F32 !important;
  overflow: hidden;
}
</style>
