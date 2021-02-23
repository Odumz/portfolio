<template>
    <div class="tw-mx-auto tw-bg-secondary tw-p-8 tw-text-tertiary ">
        <h1 class="tw-w-full tw-pt-4 tw-text-4xl">My Skills</h1>
        <hr class="line" /><br />
        <hr class="line-2 tw--mt-7 tw-mx-auto tw-mb-6" />
        <div class="tw-px-10">This is a brief on the skills I currently possess</div>
        <div v-for="(skill, index) in skills" :key=index class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-6">
            <div class="tw-w-1/2 tw-p-8 tw-flex tw-mx-auto tw-justify-between">{{ skill.lang }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['skills']
}
</script>

<style scoped>
.line {
    height: 2px; 
    border: none; 
    color:#FBD214; 
    background-color:#FBD214; 
    width:35%; 
    text-align:center;
    margin: 8px auto;
}

.line-2 {
    height: 2px; 
    border: none; 
    color:#FBD214; 
    background-color:#FBD214; 
    width:19%; 
    text-align:center;
}

</style>