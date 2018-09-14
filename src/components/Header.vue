<template>
    <div class="header">
      <div class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 60px;
    background-color: white;
    line-height: 60px;
    padding-left: 200px;
    padding-right: 200px;
    box-shadow: 0 0 2px 2px #eee;
  }
  ul{
    height: 100%;
    list-style-type: none;
    overflow: hidden;
  }

  ul li{
    float: left;
    width:200px;
    text-align: center;
  }

  a{
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }

</style>
