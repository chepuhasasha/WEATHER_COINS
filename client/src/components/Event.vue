<template lang='pug'>
.event(
  :title='event.msg'
  @click='minimize = !minimize')
  .event_body
    .event_time {{ getTime }}
    .event_msg(:class='{[$style.minimize]: minimize}') {{ event.msg }}
  .event_status(:class='getClasses')
</template>

<script>
const moment = require('moment');

export default {
  name: 'Event',
  props: {
    event: {
      type: Object,
      default: () => ({
        msg: 'No massage',
        time: 'no time',
        status: 'danger', // 'danger' || 'warning' || 'sucsess'
      }),
    },
  },
  data: () => ({
    minimize: true,
  }),
  computed: {
    getClasses() {
      return {
        [this.event.status]: true,
      };
    },
    getTime() {
      return moment(Number(this.event.time) * 1000).format('h:mm:ss');
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.event {
  cursor: pointer;
  display: flex;
  transition: opacity ease .3s;
  width: 100%;
  background: @bg_0;
  border-radius: 2px;
  border: @border_100;
  padding: 5px;
  opacity: 0.9;
  gap: 5px;
  &:hover {
    opacity: 1;
    background: @bg_100;
  }
  &_body {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: calc(100% - 10px);
  }
  &_status {
    min-height: 100%;
    max-height: 100%;
    min-width: 2px;
    max-width: 2px;
  }
  &_time {
    font-size: 10px;
    line-height: 8px;
  }
  &_msg {
    transition: all ease 3s;
    font-size: 12px;
    line-height: 12px;
    font-weight: 300;
    color: @text_0;
    max-width: 100%;
  }
}
</style>
<style lang="less" module>
.minimize {
  height: 0px;
  overflow: hidden;
}
</style>
