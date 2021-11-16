<template lang='pug'>
.event
  .event_header(:title='event.status')
    .event_time {{ getTime }}
    .event_status(:class='getClasses')
  .event_msg {{ event.msg }}
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
  computed: {
    getClasses() {
      return {
        [this.$style.danger]: this.event.status === 'danger',
        [this.$style.warning]: this.event.status === 'warning',
        [this.$style.sucsess]: this.event.status === 'sucsess',
      };
    },
    getTime() {
      return moment(this.event.time * 1000).format('h:mm:ss');
    },
  },
};
</script>

<style lang='less'>
@import '../less/global.less';
.event {
  transition: opacity ease .3s;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: @bg_0;
  border-radius: 4px;
  border: @border_100;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    background: @bg_100;
  }
  &_status {
    background: gray;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  &_header {
    padding: 0 5px;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
  &_time {
    font-size: 10px;
  }
  &_msg {
    font-size: 12px;
    color: @text_0;
    padding: 0 5px;
  }
}
</style>
<style lang="less" module>
@import '../less/global.less';
.danger {
  background: @danger;
}
.warning {
  background: @warning;
}
.sucsess {
  background: @sucsess;
}
</style>
