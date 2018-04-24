<template>
    <sidebar-navigation :pages="layoutPages"></sidebar-navigation>
</template>

<script>
    import LayoutPages from '../routes/layouts.js';

    export default {
        data() {
            return {
                layoutPages: LayoutPages
            }
        }
    }
</script>
