<template>
<div id="app">
  <Menu
   :nav-links="navLinks"
   :image-path="require('./assets/logo.png')"
   />
  <router-view />
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

#nav {
  padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
      color: #42b983;
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
