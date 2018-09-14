<template>
  <div id="app">
    <Header></Header>
    <div class="news-list">
      <News></News>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
import Header from './components/Header'
import News from './components/News'
export default {
  name: 'App',
  components: {
    Header, News
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.news-list{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
