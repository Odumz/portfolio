<template>
    <div class="timeline-wrapper">
        <div v-for="(item, index) of events" :class="step_class[index]" :key="index">
            <div class="timeline-status"></div>
            <div class="timeline-p">
                <h1> {{ item.name }} </h1>
                <span> {{ item.time }} </span>
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

</style>