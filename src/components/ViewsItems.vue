<template>
  <div>
    <div v-show="getItems" v-for="(item, key) in getItems" :key="key">
      <div @click="setItems(item)" class="views">
        <span class="views__image"><img :src="item.type === 'dir' ? '../folder.svg' : item.preview" alt=""></span>
        <span class="views__name">{{item.name}}</span>
        <span class="views__size">{{item.size}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'viewsItems',
    data() {
      return {}
    },
    methods: {
      setItems(e) {
        if (e.type === 'dir') {
          let path = e.path.slice(5, e.path.length)
          this.$router.push(path)
        }
      }
    },
    computed: {
      getItems() {
        return this.$store.getters.convertBytes
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .views
    padding: 10px 15px
    overflow: hidden
    font-size: 16px
    &:hover
      background: #f7f7f7
    &__image
      height: 40px
      width: 40px
      display: inline-block
      margin-right: 20px
      img
        width: inherit
        height: inherit
    &__name
      vertical-align: middle
    &__size
      float: right

</style>
