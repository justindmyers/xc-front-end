<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="dark" class="c-nav sticky-top">
            <b-navbar-toggle class="c-nav__toggle" target="nav_collapse">
                <span class="c-nav__bar"></span>
                <span class="c-nav__bar"></span>
                <span class="c-nav__bar"></span>
            </b-navbar-toggle>

            <b-navbar-brand class="c-nav__logo" v-bind:to="'/'">Component Library</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse" class="c-navbar__container">
                <b-navbar-nav class="c-navbar ml-auto">
                    <li class="c-navbar__item">
                        <router-link class="c-navbar__link c-cta h-color--white" v-bind:to="'/'" exact>Home</router-link>
                    </li>

                    <li class="c-navbar__item">
                        <router-link class="c-navbar__link c-cta h-color--white" v-bind:to="'/pages'">Layouts</router-link>
                    </li>

                    <li class="c-navbar__item c-mega-nav">
                        <router-link class="c-navbar__link c-cta h-color--white" v-bind:to="'/components'">Components</router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="app">
            <div class="app__sidebar">
                <router-view name="sidebar-nav"></router-view>
            </div>
            <div class="app__content">
                <router-view></router-view>
            </div>
        </div>

        <!-- This is needed to ensure a modal keyboard trap -->
        <span tabindex="0"></span>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>