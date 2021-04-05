<template>
    <div id="socials" class="socials tw-flex tw-flex-col tw-items-start tw-mx-auto">
        <ul class="tw-grid tw-grid-cols-4 tw-mt-2 my-grid">
            <li v-for="(link, index) in socials" :key="index"
                class="tw-list-none tw-px-1 tw-text-sm tw-py-2"
                >
                <a
                    :href="link.path"
                    target="blank"
                    class="tw-flex tw-text-secondary hover:tw-text-tertiary tw-flex-row-reverse tw-px-3 tw-py-3 tw-items-start"
                    >
                    <!-- <p class=" tw-invisible" @mouseenter="$event.currentTarget.style.visibility = 'visible'"
                    @mouseleave="$event.currentTarget.style.visibility = 'hidden'">{{ link.title }}</p> -->
                <!-- <icons :name=link.icon class=" tw-mr-3" /> -->
                <icons
                    :name=link.icon 
                    class=""/>
                </a>
                <!-- <hr style="height: 1px; border:none; color:#FBD214; background-color:#FBD214;" /> -->
            </li>
            <!-- <li class="tw-transform tw-flex tw-flex-col rotate-270 tw-text-sm tw-mt-16 tw-mx-1 tw-my-8">
                 <hr style="height: 0.7px; border:none; background-color: #FBD214;" />
            </li> -->
        </ul>
        <!-- <p class="tw-transform tw-flex tw-flex-col rotate-270 tw-mt-10">Check me </p>  -->
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
#socials li a {
    border-color: rgba(0, 0, 0, 0.09);
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    border-width: 0.1px;
}

#socials li a:hover {
    border-color: rgba(206, 199, 4, 0.08) !important;
    border-radius: 100% !important;
    background-color: rgba(0, 0, 0, 0.76);
    border-width: 0.1px;
}

@media screen and (max-width: 920px) {
    #socials ul {
        flex-direction: row;
        margin-top: 2px;
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
    }
}

@media screen and (min-width: 675px) {
    .my-grid {
        display: flex;
    }
}
</style>