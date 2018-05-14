<template>
    <div v-html="rawHTML">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rawHTML: require('./button-link-bar.html')
            }
        }
    }
</script>