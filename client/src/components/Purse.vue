<template lang='pug'>
.purse
  .purse_name {{ name }}
  .purse_val {{ val }}
</template>

<script>
export default {
  name: 'Event',
  props: {
    name: {
      type: String,
      default: 'BTC',
    },
    val: {
      type: String,
      default: '00',
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.purse {
  display: flex;
  flex-direction: column;
  width: 100%;
  // background: @bg_200;
  border: @border_0;
  gap: 10px;
  padding: 10px;
  &_name {
    letter-spacing: 2px;
    font-size: 12px;
  }
  &_val {
    font-size: 20px;
    color: @text_0;
    font-weight: 200;
  }
}
</style>
