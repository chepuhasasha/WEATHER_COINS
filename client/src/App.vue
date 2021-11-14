<template lang='pug'>
#app
  button(@click='Massage') NEW MASSAGE
</template>

<script>
export default {
  name: 'App',
  sockets: {
    connect() {
      console.log('CLIENT IO CONNECTED');
    },
  },
  data() {
    return {
      something: [
        // ... something here for the data if you need.
      ],
    };
  },
  methods: {
    Massage() {
      this.$socket.emit('createMassage', {
        text: 'CLIENT MASSAGE',
      });
    },
  },
  mounted() {
    // this.$socket.subscribe("kebab-case", function (data) {
    //   console.log("This event was fired by eg. sio.emit('kebab-case')", data);
    // });
  },
};
</script>

<style lang="less">
</style>
