<template>
    <div id="socials" class="socials tw-flex tw-flex-col tw-items-center tw-mx-auto tw-text-primary tw-bg-secondary tw-pl-10 tw-pr-10">
        <ul :style="{background: background || '#2A2F32'}" class="tw-flex tw-flex-col tw-mt-36">
            <li v-for="(link, index) in socials" :key="index"
                class="tw-list-none tw-px-2 tw-text-sm tw-py-2"
                >
                <a
                    :href="link.path"
                    target="blank"
                    class="tw-flex tw-flex-row-reverse tw-px-3 tw-py-3 tw-items-center"
                    >
                    <!-- <p class=" tw-invisible" @mouseenter="$event.currentTarget.style.visibility = 'visible'"
                    @mouseleave="$event.currentTarget.style.visibility = 'hidden'">{{ link.title }}</p> -->
                <!-- <icons :name=link.icon class=" tw-mr-3" /> -->
                <icons
                    :name=link.icon 
                    class=" tw-mr-3 tw-text-tertiary"/>
                </a>
                <!-- <hr style="height: 1px; border:none; color:#FBD214; background-color:#FBD214;" /> -->
            </li>
            <div class="tw-animate-bounce">
                <!-- <li class="tw-transform tw-flex tw-flex-col rotate-270 tw-text-sm tw-mt-16 tw-mx-1 tw-my-8">
                    <hr style="height: 0.7px; border:none; background-color: #FBD214;" />
                </li> -->
                <icons
                    name="arrow-up" 
                    class="tw-text-sm tw-mt-6 tw-mx-1 tw-text-tertiary"/>
            </div>
        </ul>
        <p class="tw-transform tw-flex tw-flex-col tw-text-tertiary rotate-270 tw-mt-10">Check me </p> 
        <!-- <span class="tw-transform tw-flex tw-flex-col rotate-270 tw-text-sm tw-mx-3"><hr style="height: 0.7px; border:none; background-color: #FBD214;" /></span> -->
    </div>
</template>

<script>
import icons from './icons'
export default {
    props: ['socials', 'linkColor', 'background', 'hoverBackground'],
    components: {
        icons
    },
    data() {
        return {
            hover: false,
        }
    },
}
</script>

<style scoped>
#socials li a:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100%;
}

.rotate-270 {
    transform: rotate(270deg);
}

@media screen and (max-width: 920px) {
    #socials ul {
        flex-direction: row;
        margin-top: px;
    }
    #socials p {
        flex-direction: row;
        transform: rotate(0deg);
    }
    #socials li {
        flex-direction: row;
    }

    
}

@media screen and (max-width: 850px) {
    .socials {
        position: relative;
        padding-left: 50px;
    }
}
</style>