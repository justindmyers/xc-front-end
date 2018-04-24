<template>
    <div id="app" class="app">
        <b-navbar toggleable="md" type="dark" variant="dark" class="sticky-top nav-demo">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand v-bind:to="'/'">Component Library</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <li class="c-main-nav__item">
                        <router-link class="c-top-nav__link c-cta h-color--white" v-bind:to="'/'" exact>Home</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-top-nav__link c-cta h-color--white" v-bind:to="'/pages'">Layouts</router-link>
                    </li>

                    <li class="c-main-nav__item c-mega-nav">
                        <router-link class="c-top-nav__link c-cta h-color--white" v-bind:to="'/components'">Components</router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="container-fluid">
            <div class="row">
                <div class="app__sidebar col-md-3 col-xl-2 col-12">
                    <router-view name="sidebar-nav"></router-view>
                </div>
                <div class="app__content col-md-9 col-xl-10 col-12">
                    <router-view></router-view>
                </div>
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

<style lang="scss">
    @import "~src/sass/base";

    // Gigya is messing up the page spacing
    body > iframe {
        display: none;
    }

    .app {
        &__sidebar {
            background: $gray-100;
            padding: 20px;
        }

        &__content {
            padding: 0 0 40px 0;
        }
    }

    .anchor {
        display: block;
        position: relative;
        top: -60px;
        visibility: hidden;
    }

    .c-sidebar-nav {
        &__header {
            display: block;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        &__links {
            list-style-type: none;
            margin: 0 0 20px;
            padding: 0 0 20px;
            font-size: 14px;
            border-bottom: 1px solid #ccc;
        }

        &__link {
            display: block;
            padding: 4px 0;
            color: $gray-700;
            cursor: pointer;

            &.router-link-exact-active {
                font-weight: 600;
                color: $black;
            }
        }

        .nav > *:last-child ul {
            border: none;
            margin: 0;
            padding: 0;
        }
    }

    .c-markdown {
        h1 {
            color: #565656;
            font-family: 'Montserrat', 'Arial', sans-serif;
            font-size: 34px;
            font-weight: 400;
            text-transform: uppercase;
            margin: 60px 0;
        }

        h2 {
            font-size: 22px;
            margin-top: 40px;
            margin-bottom: 20px;
        }
    }

    .hljs {
        font-family: "Inconsolata", "Monaco", "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important;
        font-size: 17px;
        overflow-x: auto;
        position: relative;
        background-color: #f9f9f9;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
        padding: 1em 1em 1em 1em;
        margin-bottom: 1em;
    }

    @include media-breakpoint-up(md) {
        .app {
            &__sidebar {
                position: -webkit-sticky;
                position: sticky;
                top: 58.5px;
                z-index: 1000;
                height: calc(100vh - 58.5px);
                overflow-y: auto;
                overflow-x: hidden;
            }
        }
    }

    @media all and (-ms-high-contrast:none)
    {
        .app__sidebar {
            position: static;
            top: auto;
            height: auto;
            overflow: visible;
        }
    }

    .nav-demo .c-nav-dropdown {
        margin-top: rem-calc(20);
    }

    .nav-demo {
        .dropdown-item {
            padding: 4px 0;
        }

        .dropdown-item.active, 
        .dropdown-item:active,
        .dropdown-item:hover {
            color: $gray-700;
            background: transparent;
        }
    }

    .page-heading {
        color: #565656;
        font-family: 'Montserrat', 'Arial', sans-serif;
        font-size: 34px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 60px 0;
    }

    .has-focus {
        color: $input-focus-color;
        background-color: $input-focus-bg;
        border-color: $input-focus-border-color;
        outline: 0; 
        box-shadow: $input-focus-box-shadow;
    }

    @include media-breakpoint-down(lg) {
        .page-heading {
            margin: 30px 0;
        }
    }
</style>
