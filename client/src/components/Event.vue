<template lang='pug'>
.event(:title='event.status')
  .event_status(:class='getClasses')
  .event_body
    .event_time {{ getTime }}
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
  }
  &_status {
    background: gray;
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
