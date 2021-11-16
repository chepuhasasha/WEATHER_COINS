<template lang="pug">
button.button(
  @click='onClick'
  :class='getClasses'
) {{ text }}
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    load: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: null, // 'danger' || 'warning' || 'sucsess'
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
  computed: {
    getClasses() {
      return {
        [this.$style.active]: this.active,
        [this.$style.disable]: this.disable,
        [this.$style.load]: this.load,
        [this.status]: true,
      };
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.button {
  width: max-content;
  max-width: max-content;
  min-width: max-content;
  height: max-content;
  max-height: max-content;
  min-height: max-content;

  transition: filter ease-in-out .2s;
  cursor: pointer;
  padding: 4px;
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 2px;
  background: @bg_0;
  color: @text_0;
  letter-spacing: 2px;
  line-height: 8px;
  border:1px solid rgba(255,255,255,0.15);
  &:hover {
    filter: brightness(120%);
    border:1px solid rgba(255,255,255,0.2);
  }
}
</style>

<style lang="less" module>
@import '../less/global.less';
.active {
  box-shadow: inset 2px 0px 0px 0px @primary_100;
}
.disable {
  cursor: not-allowed;
  background: @bg_200;
  color: @text_200;
}
.load {
  background: green;
}
</style>
