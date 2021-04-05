<template>
    <div class="tw-antialiased tw-text-gray-700">
        <h1 class="tw-p-10 tw-text-3xl tw-text-tertiary tw-font-bold">My Experiences</h1>
        <div class="tw-relative tw-container tw-mx-auto tw-px-6 tw-flex tw-flex-col tw-space-y-8">
            <div class="tw-absolute tw-w-2 tw-h-full tw-bg-tertiary tw-shadow-md tw-inset-0 tw-left-17 md:tw-mx-auto md:tw-right-0 md:tw-left-0">

            </div>
            <div v-for="(project, index) in experience" :key="index" class="tw-relative tw-z-10"> 
                <img 
                    src="https://images.pexels.com/photos/4327409/pexels-photo-4327409.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100" 
                    alt="" 
                    class="timeline-img" 
                />
                <div class="timeline-container">
                    <div 
                        class="timeline-pointer"
                        aria-hidden="true" >
                    </div>
                    <div class="tw-bg-white tw-p-6 tw-rounded-md tw-shadow-md">
                        <h1 class="tw-text-2xl tw-font-bold tw-pt-1">{{ project.company }}</h1>
                        <span class="tw-font-bold tw-text-gray-600 tw-text-sm tw-tracking-wide">{{ project.start_time }} - {{ project.end_time }} || </span><span class="tw-text-gray-500"> {{ project.location }}</span>
                        <p class="tw-pt-2">
                            {{ project.description }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="tw-relative tw-z-10">
                <img 
                    src="https://images.pexels.com/photos/4327409/pexels-photo-4327409.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100" 
                    alt="" 
                    class="timeline-img" 
                />
                <div class="timeline-container timeline-container-left">
                    <div 
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true" >
                    </div>
                    <div class="tw-bg-white tw-p-6 tw-rounded-md tw-shadow-md">
                        <h1 class="tw-text-2xl tw-font-bold tw-pt-1">Hostville Software Engineer</h1>
                        <span class="tw-font-bold tw-text-gray-600 tw-text-sm tw-tracking-wide">Jan 2021 |</span><span class="tw-text-gray-500"> Lagos</span>
                        <p class="tw-pt-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa eius laborum exercitationem, itaque nam obcaecati soluta ex laudantium odit, ullam optio voluptatum molestias! Distinctio debitis aperiam esse ut dolore?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timeline',
    props: ['experience'],
    computed: {
        step_class: function () {
            return this.events.map(value => 
            `timeline-object ${value?.completd ? "complete" : ""}`);
        }
    }
    
}
</script>

<style scoped>
.pl-26 {
    padding-left: 104px !important;
}

</style>