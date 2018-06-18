<template>
    <xc-testimonial></xc-testimonial>
</template>

<script>
    import Vue from 'vue';
    import testimonial from 'demo/components/testimonial.html';

    Vue.component('xc-testimonial', {
        template: testimonial
    });
</script>