<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(initProps) {
    // const ctx = getCurrentInstance();

    const iconName = computed(() => {
      console.log('initProps---', initProps);
      return `#icon-${initProps.iconClass}`;
    });

    const svgClass = computed(() => {
      if (initProps.className) {
        return 'svg-icon ' + initProps.className;
      } else {
        return 'svg-icon';
      }
    });

    return {
      iconName,
      svgClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
