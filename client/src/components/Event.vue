<template lang='pug'>
.event
  .event_header(:title='status')
    .event_time {{ time }}
    .event_status(:class='getClasses')
  .event_msg {{ msg }}
</template>

<script>
export default {
  name: 'Event',
  props: {
    msg: {
      type: String,
      default: 'No massage',
    },
    time: {
      type: String,
      default: 'no time',
    },
    status: {
      type: String,
      default: 'danger', // 'danger' || 'warning' || 'sucsess'
    },
  },
  computed: {
    getClasses() {
      return {
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
.event {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: @bg_0;
  border-radius: 4px;
  border: @border_0;
  &:hover {
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
