<template lang="pug">
  .buffer
    .buffer_body
      .buffer_cell {{ item.sold.name }}: {{ item.sold.val }}
      .buffer_cell {{ item.bought.name }}: {{ item.bought.val }}
    .buffer_body
      .buffer_cell MIN: 10%
      .buffer_cell NOW: -10%
    button.buffer_btn
      .buffer_status(:class='getClass')
      | ➔
</template>

<script>
export default {
  name: 'Buffer',
  props: {
    profit: {
      type: Number,
      default: 0.1,
    },
    item: {
      type: Object,
      default: () => ({
        id: '123',
        time_open: '1637060400',
        profit: 0.3,
        commision: {
          taker: 0.3,
          maker: 0.3,
        },
        sold_price: 1234,
        sold: {
          name: 'RUB',
          val: 1000,
        },
        bought: {
          name: 'BTC',
          val: 0.0013,
        },
      }),
    },
  },
  data: () => ({
    minimize: false,
  }),
  computed: {
    status() {
      const statuses = ['danger', 'warning', 'sucsess'];
      return statuses[2];
    },
    getClass() {
      return {
        [this.status]: true,
      };
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.buffer {
  transition: opacity ease .3s;
  display: flex;
  align-items: center;
  background: @bg_0;
  border: @border_100;
  border-radius: 2px;
  padding-left: 5px;
  gap: 5px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    border: 1px solid @bg_100;
    background: @bg_100;
  }
  &_body {
    display: flex;
    flex-direction: column;
    // background: @bg_0;
    padding: 5px 0;
    gap: 5px;
  }
  &_cell {
    border-radius: 4px;
    width: 100%;
    line-height: 11px;
    font-size: 14px;
    color: @text_0;
    font-weight: 300;
  }
  &_status {
    min-width: 8px;
    max-width: 8px;
    min-height: 8px;
    max-height: 8px;
    border-radius: 50%;
  }
  &_btn {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    height: 100%;
    border-radius: 0;
    background: @bg_100;
    font-weight: 300;
    color: @text_0;
    padding: 0 10px;
    margin-left: auto;
    &:hover {
      filter: brightness(150%);
    }
  }
}
</style>
