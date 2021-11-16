<template lang='pug'>
.event(
  :title='event.msg'
  @click='minimize = !minimize')
  .event_status(:class='getClasses')
  .event_body
    .event_time {{ getTime }}
    .event_msg(:class='{[$style.minimize]: minimize}') {{ event.msg }}
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
  border-radius: 4px;
  border: @border_100;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    background: @bg_100;
  }
  &_body {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100%;
  }
  &_status {
    height: 100%;
    min-width: 2px;
    max-width: 2px;
  }
  &_time {
    font-size: 10px;
    line-height: 8px;
  }
  &_msg {
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
