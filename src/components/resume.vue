<template>
    <div class="tw-flex tw-flex-col tw-mx-auto tw-justify-center">
        <p class="tw-text-3xl tw-font-bold tw-p-10" >My resume </p>
        <div v-if="mybiodata !== undefined ">
            <!-- {{ biodata.user }}  -->
            <!-- Hello -->
        </div>
        <div v-else class="tw-flex">
            Houston, we need help!
        </div>

        <!-- {{ myBiodata.user }} -->
    </div>
</template>

<script>

export default {
    data() {
        return{
            mybiodata: {"name": "biodun"}
        }
    },
    props: [ 'biodata' ]
}
</script>