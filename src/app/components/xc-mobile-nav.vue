<template>
    <div>
        <button class="c-top-nav__menu-trigger" v-b-modal="'mobile-navigation'" @click="hideNav">
            <span class="c-top-nav__hamburger">
                <span class="sr-only">Menu</span>
            </span>
        </button>
            
        <b-modal id="mobile-navigation" class="c-mobile-nav" ref="mobileNav" hide-backdrop hide-header hide-footer @shown="onShown">
            <slot>
                
            </slot>
        </b-modal>
    </div>
</template>

<script>
    export default {
        methods: {
            hideNav(evt) {
                if(this.$refs.mobileNav.is_show) {
                    evt.stopPropagation();
                    evt.stopImmediatePropagation();

                    this.$refs.mobileNav.hide();
                }
            },
            onShown(evt) {
                const element = document.querySelector('.js-mobile-nav-positioning');
                const position = element.getBoundingClientRect();

                evt.target.style.top = position.top + position.height + 'px';
                evt.target.style.bottom = 0;
            }
        }
    }
</script>