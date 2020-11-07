<template>
  <div id="app">
    <BaseForm></BaseForm>
    <FormItem/>
    <FormItem/>
    <FormItem/>
    <FormItem/>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm'
import FormItem from './components/FormItem'

export default {
  name: 'App',
  components: {
    BaseForm,
    FormItem
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Some global flexbox classes shared throughout the app */
  .layout {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .flex {
    flex: 0 1 auto;
  }
</style>
