<template>
    <div class="tw-w-full tw-bg-secondary tw-p-8 tw-text-tertiary">
        <h1 class="tw-pt-4 tw-text-4xl tw-font-semibold">My Skills</h1>
        <hr class="line" /><br />
        <hr class="line-2 tw--mt-7 tw-mx-auto tw-mb-6" />
        <div class="tw-px-10">This is a brief on the skills I currently possess</div>
        <!-- box -->
        <div class="tw-w-full tw-p-5 tw-my-7 tw-mx-auto tw-shadow">
            <ul>
                <li v-for="(skill, index) in skills" :key=index class="tw-grid md:tw-flex tw-list-none tw-p-1 tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-6">
                    <div class=""></div>
                    <!-- lang -->
                    <div class="tw-w-1/2 md:tw-text-xl tw-text-sm tw-m-1 tw-flex tw-mx-auto tw-justify-between">{{ skill.lang }}</div>
                    <!-- bar -->
                    <div class="tw-w-full tw-overflow-hidden tw-p-1">
                        <!-- percent -->
                        <span class="tw-right-0 md:tw-text-xl tw-text-xs tw-font-semibold tw-leading-7">{{ skill.percent}}% </span>
                        <!-- progress -->
                        <div class="tw-left-0 tw-p-2" :style="{'background':skill.color, 'width':skill.percent+'%'}"></div>
                    </div>
                </li>
            </ul>
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
    width:17%; 
    text-align:center;
    margin: 11px auto;
}

.line-2 {
    height: 2px; 
    border: none; 
    color: #FBD214; 
    background-color: #FBD214; 
    width: 8%; 
    text-align:center;
}

</style>