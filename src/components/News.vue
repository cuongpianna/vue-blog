<template>
    <div>
      <div class="news-item" v-for="item in news">
        <h3>{{item.title}}</h3>
        <p>
          {{item.body_slug}}
        </p>
        <h6>2018.07.05
          1023 readings
          0 comments
          11 people like it
        </h6>
        <div class="news-line"></div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "News",
        computed: {
          ...mapState(['news'])
        }
    }
</script>

<style scoped>
  .news-item{
    width: 550px;
    padding: 20px 0;
    position: relative;
    margin-bottom: 42px;
  }
  h3{
    color: black;
    font-size: 25px;
  }
  h6{
    color: #666;
    font-size: 12px;
    font-weight: 100;
  }
  p{
    color: #666;
    margin: 20px 0;
  }
  .news-line{
    background-color: #eee;
    height: 1px;
    width: 90px;
    position: absolute;
    top: 220px;
    left: -35px;
  }
</style>
