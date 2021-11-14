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
        [this.$style.danger]: this.status === 'danger',
        [this.$style.warning]: this.status === 'warning',
        [this.$style.sucsess]: this.status === 'sucsess',
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
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  background: @primary_100;
  color: @text_0;
  letter-spacing: 1px;
  &:hover {
    filter: brightness(120%);
  }
}
</style>

<style lang="less" module>
@import '../less/global.less';
.active {
  background: @bg_0;
  color: @primary_100;
  box-shadow: 0 0 0 2px @primary_100;
}
.disable {
  cursor: not-allowed;
  background: @bg_200;
  color: @text_200;
}
.load {
  background: green;
}
.danger {
  background: @danger;
}
.warning {
  background: @warning;
  color: @bg_100;
}
.sucsess {
  background: @sucsess;
  color: @bg_100;
}
</style>
