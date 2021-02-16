<template>
    <div class="tw-mx-auto tw-bg-secondary tw-p-8 tw-text-primary tw-font-light tw-text-xl tw-h-screen">
        gallery
        <div v-for="(link, index) in content" :key="index"
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
                <icons :name=link.icon class=" tw-mr-3" />
                </router-link>
                <!-- <hr style="height: 1px; border:none; color:#F97C46; background-color:#F97C46;" /> -->
            </div>
    </div>
</template>

<script>
export default {
    props: ['content']
    
}
</script>

<style scoped>

</style>