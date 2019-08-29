import {mount} from '@vue/test-utils'
import CartContent from "../../../../src/components/cart/CartContent";

describe("component -> CartContent.vue", () => {
    const wrapper = mount(CartContent);

    // check attributes
    it('renders the correct attributes', () => {
        expect(wrapper.attributes('id')).toBe('cart-content');
    })

    // check class
    it('renders the correct attributes', () => {
        expect(wrapper.classes()).toContain('cart-content');
    })

    // check functions
    it('has a created hook', () => {
        expect(typeof CartContent.data).toBe('function')
    })

})
