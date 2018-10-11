<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-color">
      <li @click="setItems()" class="breadcrumb-item" :class="getBreadCrumbs.length <= 1 ? '? breadcrumb__home' : ''">
        Files
      </li>
      <li v-for="(item, key) in getBreadCrumbs" @click="setItems(item.path)" :key="key"
          v-if="key !== Number(getBreadCrumbs.length -1)" class="breadcrumb-item">
        {{item.title}}
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'about',
    methods: {
      setItems(path) {
        path = path || ''
        this.$router.push(`/${path}`)
      }
    },
    computed: {
      getBreadCrumbs() {
        return this.$store.getters.breadCrumbs
      }
    }
  }
</script>

<style lang="sass">
  .breadcrumb
    &-color
      background: #fff !important
      margin: 0
    &__home
      font-size: 20px
      font-weight: bold
</style>
