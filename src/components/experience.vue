<template>
    <div class="tw-antialiased tw-text-gray-700">
        <div class="tw-relative tw-container tw-mx-auto tw-px-6 tw-flex tw-flex-col tw-space-y-8">
            <div class="tw-absolute tw-w-2 tw-h-full tw-bg-tertiary tw-shadow-md tw-inset-0 tw-left-17 md:tw-mx-auto md:tw-right-0 md:tw-left-0">

            </div>
            <div class="tw-relative tw-z-10">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa eius laborum exercitationem, itaque nam obcaecati soluta ex laudantium odit, ullam optio voluptatum molestias! Distinctio debitis aperiam esse ut dolore?
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa eius laborum exercitationem, itaque nam obcaecati soluta ex laudantium odit, ullam optio voluptatum molestias! Distinctio debitis aperiam esse ut dolore?
                    </div>
                </div>
            </div>
            <div class="tw-relative tw-z-10">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa eius laborum exercitationem, itaque nam obcaecati soluta ex laudantium odit, ullam optio voluptatum molestias! Distinctio debitis aperiam esse ut dolore?
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ipsa eius laborum exercitationem, itaque nam obcaecati soluta ex laudantium odit, ullam optio voluptatum molestias! Distinctio debitis aperiam esse ut dolore?
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timeline',
    props: {
        events: {
            type: Array,
            default: () => {return []; }
        }
    },
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