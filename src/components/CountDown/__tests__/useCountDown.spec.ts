import { h, defineComponent } from 'vue';
import { useCountDown } from '../useCountDown';
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";

describe('useCountDown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks();
  })

  it('should decrease countdown after every 1s', async () => {

    const TestComponent = defineComponent({
      setup() {
        const { countdown } = useCountDown(5);
        return { countdown };
      },
      render() {
        return h('div')
      }
    })

    const wrapper = mount(TestComponent);

    await wrapper.vm.$nextTick();  // Making sure setup and onMounted are finished

    expect(wrapper.vm.countdown).toBe(5);

    vi.advanceTimersByTime(1000);

    await wrapper.vm.$nextTick();  // Wait for updates after advancing timer

    expect(wrapper.vm.countdown).toBe(4);
  });

  it('should stop countdown when it reaches 0', async () => {

    const TestComponent = defineComponent({
      setup() {
        const { countdown } = useCountDown(1);
        return { countdown };
      },
      render() {
        return h('div')
      }
    })

    const wrapper = mount(TestComponent);

    await wrapper.vm.$nextTick();  // Making sure setup and onMounted are finished

    expect(wrapper.vm.countdown).toBe(1);

    vi.advanceTimersByTime(1000);

    await wrapper.vm.$nextTick();  // Wait for updates after advancing timer

    expect(wrapper.vm.countdown).toBe(0);

    vi.advanceTimersByTime(1000);

    await wrapper.vm.$nextTick();  // Wait for updates after advancing timer

    expect(wrapper.vm.countdown).toBe(0); // Even after 1 second, the value should remain 0
  });
});