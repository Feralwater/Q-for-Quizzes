import { mount } from "@vue/test-utils";
import CountDown from "@/components/CountDown/CountDown.vue";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

describe("YourComponent.vue", () => {
  const pinia = createPinia();
  const vuetify = createVuetify();
  
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  const wrapper = mount(CountDown, {
    props: {
      time: 10,
    },
    global: {
      plugins: [pinia, vuetify],
    },
  });

  it("renders correctly", async () => {
    expect(wrapper.find(".countdown").exists()).toBe(true);
    expect(wrapper.find(".countdown__svg").exists()).toBe(true);
    expect(wrapper.find(".countdown__label").exists()).toBe(true);
    expect(wrapper.find(".countdown__label").text()).toBe("10");
  });

  it("renders correctly after 1 second", async () => {
    setTimeout(() => {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find(".countdown__label").text()).toBe("9");
      });
    }, 1000);
  });

  it('emits timeUp event when countdown reaches zero', async () => {
    await wrapper.setProps({ time: 0 });
    expect(wrapper.emitted().timeUp).toBeTruthy();
  });
});