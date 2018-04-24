<template>
    <div class="container container-fluid">
        <h1 class="page-heading mb-0">Alert</h1>

        <aha-component title="Default">
            <aha-alert></aha-alert>
        </aha-component>

        <b-btn @click="click">Clear Cookies</b-btn>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        methods: {
            click: (evt) => {
                Cookies.remove('aha-alert-cookie-test');
            }
        }
    }
</script>
