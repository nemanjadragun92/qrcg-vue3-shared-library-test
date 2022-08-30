<template>
  <button
    id="0.0.4"
    type="button"
    :class="classes"
    :disabled="disabled"
    data-test="qrcg-button"
    @click="onClick"
  >
    <svg
      v-if="loading"
      class="animate-spin m-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
        fill="#E6EDF0"
      />
      <path
        d="M17.8182 3.25938C18.2773 2.56976 19.2159 2.37623 19.8429 2.91767C20.6529 3.6171 21.3674 4.42323 21.966 5.31572C22.8438 6.62446 23.4552 8.09329 23.7653 9.63834C24.0754 11.1834 24.0782 12.7744 23.7735 14.3205C23.4688 15.8666 22.8625 17.3376 21.9893 18.6494C21.1161 19.9612 19.993 21.0882 18.6843 21.966C17.3755 22.8438 15.9067 23.4552 14.3617 23.7653C12.8166 24.0754 11.2256 24.0782 9.67949 23.7735C8.62513 23.5657 7.60573 23.2176 6.64791 22.7404C5.90644 22.3709 5.72274 21.4302 6.18178 20.7406C6.64083 20.051 7.56874 19.8772 8.32496 20.2155C8.94315 20.492 9.59204 20.6985 10.2596 20.8301C11.4192 21.0587 12.6125 21.0566 13.7712 20.824C14.93 20.5914 16.0316 20.1328 17.0132 19.4745C17.9948 18.8161 18.8371 17.9709 19.492 16.987C20.1469 16.0032 20.6016 14.9 20.8301 13.7404C21.0587 12.5808 21.0566 11.3875 20.824 10.2288C20.5914 9.06997 20.1328 7.96835 19.4745 6.98679C19.0955 6.4217 18.6545 5.90278 18.1608 5.43919C17.5569 4.8721 17.3592 3.94899 17.8182 3.25938Z"
        fill="#FD64A3"
      />
    </svg>
    <slot name="icon-prepend"></slot>
    <span>
      <slot>
        {{ text }}
      </slot>
    </span>
    <slot name="icon-append"></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, onMounted, useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: "md",
    validator: function (value: string) {
      return ["xsm", "sm", "md", "lg", "xlg"].indexOf(value) !== -1;
    },
  },
  variant: {
    type: String,
    default: "primary",
    validator: function (value: string) {
      return ["primary", "danger"].indexOf(value) !== -1;
    },
  },
  outline: {
    type: Boolean,
    required: false,
  },
  block: {
    type: Boolean,
    required: false,
  },
  uppercase: {
    type: Boolean,
    required: false,
    default: true,
  },
  fontBold: {
    type: Boolean,
    required: false,
    default: true,
  },
  dark: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
  },
});

const className = "qrcg-button";

const hasIconPrepend = computed(() => !!slots["icon-prepend"] || false);
const hasIconAppend = computed(() => !!slots["icon-append"] || false);

const classes = computed(() => {
  return [
    className,
    `${className}--${props.variant}`,
    `${className}--${props.size}`,
    {
      [`${className}--loading`]: props.loading,
      [`${className}--outline`]: props.outline,
      [`${className}--block`]: props.block,
      [`${className}--disabled`]: props.disabled,
      [`${className}--uppercase`]: props.uppercase,
      [`${className}--fontBold`]: props.fontBold,
      [`${className}--dark`]: props.dark,
      [`${className}__icon`]: hasIconPrepend.value || hasIconAppend,
      [`${className}__icon--prepend`]: hasIconPrepend,
      [`${className}__icon--append`]: hasIconAppend,
    },
  ];
});

const emit = defineEmits(["onClick"]);

function onClick($event: Event) {
  emit("onClick", $event);
}

onMounted(() => {
  console.log("Slots", slots);
  console.log('slots["icon-append"]', slots["icon-append"]);
  console.log('slots["icon-append"]', slots["icon-append"]);
});
</script>

<style lang="scss" scoped src="./QrcgButton.scss" />
