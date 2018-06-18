import { idMixin } from 'bootstrap-vue/src/mixins';
import dropdownMixin from '@/mixins/xc-dropdown';

export default {
    mixins: [idMixin, dropdownMixin],
    render(h) {
        const toggle = h(
            'button', {
                ref: 'toggle',
                attrs: {
                    id: this.safeId('_BV_toggle_'),
                    'aria-haspopup': 'true',
                    'aria-expanded': this.visible ? 'true' : 'false'
                },
                class: this.extraClasses,
                on: {
                    click: this.toggle,
                    keydown: this.toggle
                }
            }, [this.$slots.default]
        );

        const arrow = h(
            'span', {
                ref: 'arrow',
                attrs: {
                    'x-arrow': ''
                },
                class: this.arrowClass
            }
        );

        const menu = h(
            'div', {
                ref: 'menu',
                class: this.menuClasses,
                attrs: {
                    role: this.role,
                    'aria-labelledby': this.safeId('_BV_toggle_')
                },
                on: {
                    keydown: this.onKeydown // tab, up, down, esc
                }
            }, [this.$slots.dropdown, arrow]
        );

        return h(
            'div', {
                ref: 'dropdown',
                attrs: {
                    id: this.safeId()
                },
                class: this.dropdownClasses
            }, [toggle, menu]
        );
    },
    props: {
        target: {
            // String ID of element, or element/component reference
            type: [String, Object]
        },
        size: {
            type: String,
            default: null
        },
        extraClasses: {
            type: String,
            default: ''
        },
        arrowClass: {
            type: String,
            default: 'c-nav-dropdown__arrow'
        },
        role: {
            type: String,
            default: 'menu'
        },
        arrow: {
            type: Boolean,
            default: true
        },
        boundary: {
            // String: `scrollParent`, `window` or `viewport`
            // Object: HTML Element reference
            type: [String, Object],
            default: 'scrollParent'
        }
    },
    computed: {
        dropdownClasses() {
            let position = '';
            // Position `static` is needed to allow menu to "breakout" of the scrollParent boundaries
            // when boundary is anything other than `scrollParent`
            // See https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
            if(this.boundary !== 'scrollParent' || !this.boundary) {
                position = 'position-static';
            }

            return [
                'c-nav-dropdown__container',
                this.visible ? 'show' : '',
                position
            ];
        },
        menuClasses() {
            return [
                'c-nav-dropdown',
                'dropdown-menu',
                this.right ? 'dropdown-menu-right' : ''
            ];
        },
        toggleClasses() {
            return [{
                'dropdown-toggle': !this.noCaret || this.split,
                'dropdown-toggle-split': this.split
            },
            this.toggleClass];
        }
    }
};
