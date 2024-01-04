import { mount } from "@vue/test-utils";
import CountDown from "@/components/CountDown/CountDown.vue";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("YourComponent.vue", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correctly", async () => {
    const wrapper = mount(CountDown, {
      props: {
        time: 10,
      },
    });

    // Let's assert that component is properly rendered
    expect(wrapper.find(".countdown").exists()).toBe(true);
    expect(wrapper.find(".countdown__svg").exists()).toBe(true);
    expect(wrapper.find(".countdown__label").exists()).toBe(true);
  });

  it("renders correctly with time prop", async () => {
    const wrapper = mount(CountDown, {
      props: {
        time: 56,
      },
    });

    // Let's assert that component is properly rendered
    expect(wrapper.find(".countdown__label").text()).toBe("56");
  });

  it("renders correctly", () => {
    const wrapper = mount(CountDown, {
      props: {
        time: 10,
      },
    });

    setTimeout(() => {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find(".countdown__label").text()).toBe("9");
      });
    }, 1000);
  });
});