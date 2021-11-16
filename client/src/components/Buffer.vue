<template lang="pug">
  .buffer {{ getProfit.now }} {{ getProfit.buy }}
</template>

<script>
export default {
  name: 'Buffer',
  props: {
    profit: {
      type: Number,
      default: 0.01,
    },
    item: {
      type: Object,
      default: () => ({
        id: '',
        time: '',
        tool: {
          name: 'USD',
          val: 100,
        },
        target: {
          name: 'BTC',
          val: 0.003,
        },
        commission: 0.02,
        price: {
          now: 43924,
          buy: 44204,
        },
      }),
    },
  },
  data: () => ({
    minimize: false,
  }),
  computed: {
    getProfit() {
      const now = this.item.target.val * this.item.price.now;
      const buy = this.item.target.val * this.item.price.buy;
      return {
        now,
        buy,
        status: '',
      };
    },
  },
};
</script>

<style></style>
