<template lang="pug">
  .buffer
    .buffer_status(:class='getClass')
    .buffer_body
      .buffer_cell {{ item.sold.val }} {{ item.sold.name }}
      .buffer_cell {{ item.bought.val }} {{ item.bought.name }}
    Button(text='➔')
</template>

<script>
export default {
  name: 'Buffer',
  components: {
    Button: () => import('@/components/Button.vue'),
  },
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
  gap: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    border: 1px solid @bg_100;
    background: @bg_100;
  }
  &_body {
    display: flex;
    flex-direction: column;
    background: @bg_0;
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
    min-width: 2px;
    max-width: 2px;
    height: 100%;
  }
}
</style>
