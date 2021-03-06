<template>
    <xc-navbar></xc-navbar>
</template>

<script>
    import Vue from 'vue';
    import navbar from 'demo/components/navbar.html';

    Vue.component('xc-navbar', {
        template: navbar
    });
</script>

<style lang="scss">
    @import "~@/sass/base";

    // TODO: Mobile styling
    // TODO: Hover/active styles for links
    // TODO: Move to standalone SASS file

    /* ----------------------------------------------------------------------------
    *
    * Header
    *
    * ---------------------------------------------------------------------------- */

    .l-header {
        position: relative;
        background-color: #fff;
        z-index: 1001;

        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        } // Bootstrap override
        .collapsing {
            display: block;
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Main Logo
    *
    * ---------------------------------------------------------------------------- */

    .c-logo {
        &__link {
            width: 100%;
        }

        &__img {
            max-width: 100%;
            margin: 20px 10px;
        }
    }

    @media (max-width: 769px) {
        .c-logo {
            max-width: 40%;
        }
    }

    @media (min-width: 769px) {
        .c-logo {
            padding: 10px;
            &__img {
                margin: 0;
            }
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Prime Nav
    *
    * ---------------------------------------------------------------------------- */

    @include media-breakpoint-down(sm) {
        .c-prime-nav {
            // display: none;
            text-align: right;

            &__wrapper {
                position: absolute;
                top: 100%;
                right: 0;
                left: 0;
            }
        }
    }

    .c-prime-nav {
        &__list {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        &__link {
            display: block;
            color: #000;
            padding: 10px;
            background: transparent;
            outline: none;
            border: none;
            text-transform: uppercase;
            text-align: left;

            &:hover,
            &:active,
            &:focus,
            &.is-open {
                text-decoration: none;
                color: #000;
                &.h-hover-line:before {
                    width: 40px;
                }
            }

            &.active {
                background: #f1f1f1;
                box-shadow: inset -1px 0 5px 2px #E6E6E6;
            }
        }
    }

    @media (max-width: 769px) {
        .c-prime-nav {
            &__link {
                width: 100%;

                &:hover,
                &:active,
                &:focus,
                &.is-open {
                    background: #f1f1f1;
                    box-shadow: inset -1px 0 5px 2px #E6E6E6;
                }
            }

            &__list {
                border-top: 1px solid #e4e4e4;
            }

            &__item {
                border-bottom: 1px solid #e4e4e4;
            }
        }
    }

    @media (min-width: 769px) {
        .c-prime-nav {
            text-align: left;
            width: 100%;
            border: 0 solid transparent;
            display: block;
            height: auto !important; // Prevent Bootstrap override

            &__wrapper {
                position: static;
                top: auto;
                right: auto;
            }

            &__link {
                display: block;
                padding: 20px;
                margin: 0;
                border: none;
                background: transparent;

                &:hover,
                &:active,
                &:focus {
                    color: #000;
                }
            }

            &__list {
                display: flex;
                width: 100%;
                padding: 0;
            }

            &__item {
                display: flex;
                border: 0;
            }
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Icon Nav
    *
    * ---------------------------------------------------------------------------- */

    .c-icon-nav {
        float: right;

        &__link {
            color: #949494;
            &:hover,
            &:active,
            &:focus {
                color: #949494;
            }
        }
        &__list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        &__item {
            margin: 0 5px;
            padding: 0;
            list-style-type: none;
            display: inline-block;
        }
    }

    @media (min-width: 769px) {
        .c-icon-nav {
            &__item {
                margin: 0 5px;
            }
        }
    }

    @media (min-width: 992px) {
        .c-icon-nav {
            &__item {
                margin: 0 15px;
            }
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Prime Nav Toggle
    *
    * ---------------------------------------------------------------------------- */

    .c-prime-nav-toggle {
        float: none;
        margin: 0;
        padding: 0;
        &__line {
            background: #949494;
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Mega Nav
    *
    * ---------------------------------------------------------------------------- */

    .c-mega-nav {
        text-transform: uppercase;
        text-align: left;

        &__close {
            display: none;
        }

        &__list {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        &__link {
            color: #000;
            &:hover,
            &:active,
            &:focus {
                text-decoration: none;
            }
        }

        &__section {
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                height: 0;
                width: 100%;
                background: #19E1F8;
                transition: all 0.2s ease-in-out;
            }
        }

        &__section-header {
            margin: 0;
            color: #888888;
            line-height: inherit;
        }
    }

    @media (max-width: 769px) {
        .c-mega-nav {
            &__list {
                margin: 5px 0;
            }

            &__item {
                margin: 0 20px;
            }

            &__link {
                display: inline-block;
                padding: 5px 0 0;
                border-bottom: 1px solid #e2e2e2;
            }

            &__section {
                margin: 5px 0;
            }

            &__section-header {
                padding: 0 10px;
            }
        }
    }

    @media (min-width: 769px) {
        .c-mega-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #3d3c38;

            &__link {
                color: #fff;

            &:hover,
                &:active,
                &:focus {
                    color: #fff;
                    &.h-hover-line:before {
                        width: 40px;
                    }
                }
            }

            &__list {
                margin: 0 10px;
            }

            &__item {
                margin: 20px 0;
            }

            &__section-header {
                color: #fff;
                font-size: 1.6em;
                line-height: 1em;
                padding: 0 10px;
                font-weight: bold;
                margin-bottom: 50px;
            }

            &__section {
                display: flex;
                justify-content: center;
                padding-top: 60px;

                .collapse {
                    display: block !important;
                    height: auto !important;
                }

                &:hover,
                &:active,
                &:focus {
                    &:before {
                        height: 5px;
                    }
                    .c-mega-nav {
                        &__section-header {
                            &.h-hover-line:before {
                                width: 40px;
                            }
                        }
                    }
                }
            }

            &__close {
                display: block;
                position: absolute;
                bottom: 20px;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
            }

            &__close-button {
                background: transparent;
                border-style: none;
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
                border-radius: 100%;
                background: #fff;
                text-align: center;
                font-size: 1.6em;
                height: 46px;
                width: 46px;
                color: #888888;
            }
        }
    }

    @media (min-width: 992px) {
        .c-mega-nav {
            &__section {

            }
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Helper Classes
    *
    * ---------------------------------------------------------------------------- */

    .h-hover-line {
        &:before {
            content: '';
            width: 0;
            height: 2px;
            background: #19e1f8;
            transition: all 0.2s ease-out;
            display: block;
        }
    }

    @media (max-width: 769px) {
        .h-hide-bg#{\@}xs {
            background-image: none !important;
        }
    }

</style>
