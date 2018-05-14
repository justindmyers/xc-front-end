<template>
    <div v-html="rawHTML">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rawHTML: require('./member-breakdown.html')
            }
        }
    }
</script>