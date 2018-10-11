<template>
  <div id="app" class="container">
    <span class="brand">Jandex</span>
    <Breadcrumbs/>
    <Views/>
  </div>
</template>

<script>
  import Breadcrumbs from './views/Breadcrumbs.vue'
  import Views from './views/View'
  import 'bootstrap/dist/css/bootstrap.min.css'

  export default {
    name: 'App',
    components: { Breadcrumbs, Views }
  }
</script>

<style lang="sass">
  body
    background: #f5f5f5
    overflow-y: auto

    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      color: #2c3e50
      background: #fff
      margin: 70px auto 20px auto
      padding: 40px 60px 40px 30px
      box-shadow: 0 0 14px rgba(0, 0, 0, .2)
      position: relative
      min-height: 600px
    .brand
      font-size: 28px
      font-weight: 500
      position: absolute
      top: -60px
      color: #3eaf7c
      text-shadow: 0 0 18px rgba(0, 0, 0, .12)
      &:first-letter
        color: #1d523a
        font-size: 30px
        font-weight: bold
        text-shadow: 0 0 14px rgba(0, 0, 0, .2)
</style>
