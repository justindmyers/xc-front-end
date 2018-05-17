<template>
    <div v-html="rawHTML">
    </div>
</template>

<script>
    import leaderSnapshot from './leader-list.html';
    export default {
        data () {
            return {
                rawHTML: '<div id="ngApp">' + leaderSnapshot + '</div>'
            }
        }
    }
</script>