<template lang="pug">
.block(:style='{gridArea: this.area}')
  .block_header(v-if='header') {{ header }}
  .block_body(:style='getStyle')
    slot
      span no content...
</template>

<script>
export default {
  name: 'Block',
  props: {
    header: {
      type: String,
      default: null,
    },
    area: {
      type: String,
      default: '',
    },
    col: {
      type: Boolean,
      default: true,
    },
    gap: {
      type: Number,
      default: 10,
    },

    padding: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    getStyle() {
      return {
        flexDirection: this.col ? 'column' : 'row',
        gap: `${this.gap}px`,
        padding: `${this.padding}px`,
      };
    },
  },
};
</script>

<style lang="less">
@import '../less/global.less';
.block {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  min-height: 100%;

  background: @bg_0;
  border: @border_0;

  &_header {
    padding: 10px;
    color: @text_100;
    background: @bg_100;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
  }

  &_body {
    display: flex;
    overflow-y: auto;
  }
}
</style>
