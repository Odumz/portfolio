<template>
    <!-- <div class="tw-mx-auto tw-bg-secondary tw-p-8 tw-text-primary tw-font-light tw-text-xl ">
        <nav class="tw-flex-row md:tw-justify-between">
            <div class="tw-flex tw-flex-row tw-justify-between">
                <a href="#">Logo mi</a>
                <p class="md:tw-hidden tw-bg-secondary">
                    Menu
                </p>
            </div>
        </nav>
    </div> -->
    <nav :style="{background: background || '#2A2F32'}" class=" tw-bg-secondary tw-w-full">
<!-- "[ todo.title ? 'active' : 'inactive', 'tw-outline-none']" -->
<ul :style="{background: background || '#2A2F32'}" class="tw-flex tw-h-full tw-items-center tw-pl-5" ref="nav">
    <figure class="image-logo" @click="toggleNav()">
        <img :src="imagePath" class="tw-h-10 tw-w-10 tw-cursor-pointer"/>
    </figure>
    <li v-for="(link, index) in navLinks" :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#eee'"
        @mouseleave="$event.currentTarget.style.background = Background || '#2A2F32'"
        class="tw-list-none tw-px-2 tw-py-2"
        >
        <router-link
            :style="{color: linkColor || '#fff'}"
            :to="link.path"
            class="tw-flex tw-flex-row-reverse tw-px-3 tw-py-3 tw-items-center"
            >
            {{ link.text }}
           <icons :name=link.icon class=" tw-mr-3 tw-text-xs" />
        </router-link>
        <!-- <hr style="height: 1px; border:none; color:#F97C46; background-color:#F97C46;" /> -->
    </li>
</ul>
    </nav>
</template>

<script>
import icons from './icons'

export default {
    props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
    components: {
        icons
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
nav ul {
    margin-block-end: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
    box-shadow: 2px 2px 2px #333;
}
nav ul figure {
        padding-left: 15px;
        z-index: 1;
        top: 10px;
        left: 13px;
    }
a.router-link-exact-active.router-link-active {
    color: #F97C46;
    background: #F97C46;
}

@media screen and (max-width: 850px) {
    nav ul {
        position: absolute;
        width: 250px;
        flex-direction: column;
        left: -160px;
        transition: 300ms ease all;
        top: 60px;
        box-shadow: 2px 2px 2px #333;
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
}

</style>