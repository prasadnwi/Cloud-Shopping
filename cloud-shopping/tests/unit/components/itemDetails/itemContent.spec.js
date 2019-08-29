import {mount} from '@vue/test-utils'
import ItemContent from "../../../../src/components/itemDetails/ItemContent";

describe("component -> Item.vue", () => {
    const wrapper = mount(ItemContent);

    // check attributes
    it('renders the correct attributes', () => {
        expect(wrapper.attributes('id')).toBe('product-detail-content');
    })

    // check class
    it('renders the correct attributes', () => {
        expect(wrapper.classes()).toContain('ProductDetailsContent');
    })

    it('has a created hook', () => {
        expect(typeof ItemContent.data).toBe('function')
    })

})
