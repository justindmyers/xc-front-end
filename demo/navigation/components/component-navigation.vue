<template>
    <sidebar-navigation :pages="componentPages"></sidebar-navigation>
</template>

<script>
    import ComponentPages from './components.js';

    export default {
        data() {
            return {
                componentPages: ComponentPages
            }
        }
    }
</script>
