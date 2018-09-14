<template>
    
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "NewsDetail",
        computed: {
          ...mapState['news']
        }
    }
</script>

<style scoped>

</style>
