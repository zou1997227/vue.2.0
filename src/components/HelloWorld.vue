<template>
  <div class="hello">
    <!-- <div ref="main" style="width: 600px;height:400px;"></div> -->
  </div>
</template>

<script>
// import echarts from "echarts"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
