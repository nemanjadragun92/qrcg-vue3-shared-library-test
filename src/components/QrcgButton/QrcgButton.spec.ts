import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import QrcgButton from "@/components/QrcgButton/QrcgButton.vue";

describe("QrcgButton.vue", () => {
  it("renders props.text when passed", () => {
    const text = "My button content";
    const wrapper = shallowMount(QrcgButton, {
      propsData: {
        text,
      },
    });
    expect(wrapper.text()).toBe(text);
  });
  it("emits event on button click", async () => {
    const text = "My button content";
    const wrapper = shallowMount(QrcgButton, {
      propsData: {
        text,
      },
    });
    const button = wrapper.find('[data-test="qrcg-button"]');
    await button.trigger("click");
    expect(wrapper.emitted("onClick")).toHaveLength(1);
  });
});
