import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/ItemListContent.vue'

describe('ItemListContent.vue', () => {
  it('renders props.msg when passed', () => {
      const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg)
  })
});
