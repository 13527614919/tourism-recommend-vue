<template>
    <div>
      <li v-for="(item,index) in list" :key="">
        <img :src="item.active?url:urls" alt=""  @click.stop="up(index)"/>
        {{item.id}}
      </li>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          id: 1,
          active: false
        }, {
          id: 2,
          active: false
        }, {
          id: 3,
          active: false
        }]
      }
    },
    methods: {
      selectTimer (index) {
        this.timeIndex = index
      }
    }
  }
</script>

<style>
  default{
    color: #404040;
    background: #f8f8f8;
  }
  .default-active{
    color: #fff;
    background: #f00;
  }
</style>
