import QrcgButton from "./QrcgButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: QrcgButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    text: {
      name: "Content",
      type: { name: "string" },
      defaultValue: "Hello",
      description: "Button value",
      control: {
        type: "text",
      },
    },
    size: {
      name: "Size",
      type: { name: "string" },
      defaultValue: "md",
      description: "Button size",
      options: ["xsm", "sm", "md", "lg", "xlg"],
      control: { type: "radio" },
    },
    variant: {
      name: "Variant",
      type: { name: "string" },
      defaultValue: "primary",
      description: "Button variant",
      options: ["primary", "danger"],
      control: { type: "radio" },
    },
    outline: {
      name: "Outline",
      type: { name: "boolean" },
      description: "Button outlined state",
      control: "boolean",
      defaultValue: false,
    },
    block: {
      name: "Block",
      type: { name: "boolean" },
      description: "Button block state",
      control: "boolean",
      defaultValue: false,
    },
    uppercase: {
      name: "Uppercase",
      type: { name: "boolean" },
      description: "Button uppercase font",
      control: "boolean",
      defaultValue: true,
    },
    fontBold: {
      name: "Font style bold",
      type: { name: "boolean" },
      description: "Button font style bold",
      control: "boolean",
      defaultValue: true,
    },
    dark: {
      name: "Dark",
      type: { name: "boolean" },
      description: "Button dark variant state",
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      name: "Disabled",
      type: { name: "boolean" },
      description: "Button disable state",
      control: "boolean",
      defaultValue: false,
    },
    loading: {
      name: "Loading",
      type: { name: "boolean" },
      description: "Button loading state",
      control: "boolean",
      defaultValue: false,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { QrcgButton },
  setup() {
    return { args };
  },
  template: '<qrcg-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  text: "Button",
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  text: "Button",
  outline: true,
};

export const PrimaryBlock = Template.bind({});
PrimaryBlock.args = {
  text: "Button",
  block: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: "Button",
  dark: true,
};
PrimaryDark.parameters = {
  backgrounds: { default: "dark" },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  text: "Button",
  disabled: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  text: "Button",
  loading: true,
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Danger.args = {
  text: "Button",
  variant: "danger",
};

export const DangerOutlined = Template.bind({});
DangerOutlined.args = {
  text: "Button",
  outline: true,
  variant: "danger",
};

export const DangerBlock = Template.bind({});
DangerBlock.args = {
  text: "Button",
  block: true,
  variant: "danger",
};

export const DangerDark = Template.bind({});
DangerDark.args = {
  text: "Button",
  dark: true,
  variant: "danger",
};
DangerDark.parameters = {
  backgrounds: { default: "dark" },
};

export const DangerDisabled = Template.bind({});
DangerDisabled.args = {
  text: "Button",
  disabled: true,
  variant: "danger",
};

export const DangerLoading = Template.bind({});
DangerLoading.args = {
  text: "Button",
  loading: true,
  variant: "danger",
};
