<template>
    <nav :style="{background: background || '#2A2F32'}" class=" tw-bg-secondary tw-bg-gra tw-py-3 tw-w-full">
        <ul :style="{background: background || '#2A2F32'}" ref="nav">
            <figure class="image-logo" @click="toggleNav()">
                <img :src="imagePath" class="tw-h-10 tw-w-10 tw-mr-12 tw-cursor-pointer"/>
            </figure>
            <li v-for="(link, index) in navLinks" :key="index"
                class="tw-list-none tw-px-2 tw-py-2"
                >
                <router-link
                    :style="{color: linkColor || '#E5E7EB'}"
                    :to="link.path"
                    class="tw-flex tw-flex-row-reverse tw-px-3 tw-py-3 tw-items-center"
                    >
                    {{ link.text }}
                <icons :name=link.icon class=" tw-mr-3" />
                </router-link>
                <!-- <hr style="height: 1px; border:none; color:#FBD214; background-color:#FBD214;" /> -->
            </li>
        </ul>
        <!-- <socials class="tw-flex tw-flex-row" /> -->
    </nav>
</template>

<script>
import icons from './icons'
// import socials from '../components/socials'

export default {
    props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
    components: {
        icons,
        // socials
    },
    methods: {
        toggleNav () {
            const nav = this.$refs.nav.classList
            nav.contains('active') ? nav.remove('active') : nav.add('active')
        }
    }
}
</script>

<style scoped>

nav ul li a:hover {
    color: #FBD214 !important;
}

nav ul li a::after {
  position: inherit !important;
  content: "";
  width: 7% !important;
  height: 0.225rem !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  background: #FBD214 !important;
  transition: transform 0.5s ease !important;
  transform: scaleX(0) !important;
  transform-origin: right !important;
}

nav ul li a.router-link-exact-active.router-link-active::after {
  position: inherit !important;
  content: "" !important;
  width: 15% !important;
  height: 0.225rem !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  background: #FBD214 !important;
  transition: transform 0.5s ease !important;
  transform: scaleX(0) !important;
  transform-origin: right !important;
}

nav ul li a.router-link-exact-active.router-link-active::after {
  transform: scaleX(1) !important;
}

nav ul li a:hover:after {
  transform: scaleX(1) !important;
  transform-origin: left !important;
}

nav ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-end: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #333;
    list-style-type: none;
}
nav ul figure {
        padding-left: 40px;
        z-index: 1;
        top: 10px;
        left: 13px;
    }
a.router-link-exact-active.router-link-active {
    color: #FBD214 !important;
}

@media screen and (max-width: 720px) {
    nav ul {
        width: 200px !important;
        left: -150px !important;
    }
    
    nav ul figure {
        left: -3px !important;
    }

    nav ul.active {
        left: -25px !important;
    }
    
    nav ul li {
        width: 100% !important;
        margin-left: 15px !important;        
    }

    nav ul a {
        padding-right: 0px;
    }
}

@media screen and (max-width: 920px) {
    nav ul {
        position: absolute;
        width: 250px;
        flex-direction: column;
        left: -160px;
        transition: 300ms ease all;
        top: 55px;
        box-shadow: 2px 2px 2px #333;
        z-index: 1;
    }

    nav ul.active {
        left: 0px;
    }

    nav ul li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }    

    nav ul a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 7px;
    }

    nav ul figure {
        position: fixed;
        padding-left: 10px;
        z-index: 1;
        top: 10px;
        left: 13px;
    }

    nav ul li a::after {
        display: none;
    }

/* 
    nav ul li a::after {
    position: inherit !important;
    content: "" !important;
    width: 7% !important;
    height: 0.225rem !important;
    top: 10% !important;
    left: 0 !important;
    bottom: 0 !important;
    background: #FBD214 !important;
    transition: transform 0.5s ease !important;
    transform: scaleX(0) !important;
    transform-origin: right !important;
    }

    nav ul li a.router-link-exact-active.router-link-active::after {
    position: relative !important;
    content: "" !important;
    width: 15% !important;
    height: 0.225rem !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    background: #FBD214 !important;
    transition: transform 0.5s ease !important;
    transform: scaleX(0) !important;
    transform-origin: right !important;
    }

    nav ul li a.router-link-exact-active.router-link-active::after {
    transform: scaleX(1) !important;
    margin-top: 2rem !important;
    width: 1rem !important;
    
    }

    nav ul li a:hover:after {
    transform: scaleX(1);
    transform-origin: left;
    } */
}

</style>