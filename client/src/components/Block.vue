<template lang="pug">
.block(:style='{gridArea: this.area}')
  .block_header(v-if='header') {{ header }}
  .block_body(:style='getStyle')
    .block_load(v-if='load')
      Loader
    slot(v-else)
      span no content...
</template>

<script>
export default {
  name: 'Block',
  components: {
    Loader: () => import('@/components/Loader.vue'),
  },
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
    load: {
      type: Boolean,
      default: false,
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

  &_body, &_load {
    display: flex;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
  &_load {
    align-items: center;
    justify-content: center;
  }
}
</style>
