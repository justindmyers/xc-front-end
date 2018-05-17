<template>
    <div v-html="rawHTML">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rawHTML: '<div id="ngApp">' + require('./member-renewal.html') + '</div>'
            }
        }
    }
</script>