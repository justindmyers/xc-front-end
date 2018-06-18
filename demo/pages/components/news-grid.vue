<template>
    <xc-news-grid></xc-news-grid>
</template>

<script>
    import Vue from 'vue';
    import newsGrid from 'demo/components/news-grid.html';

    Vue.component('xc-news-grid', {
        template: newsGrid
    });
</script>