<template>
    <div class="frontend">
        <side-bar></side-bar>
        <router-view></router-view>
    </div>
</template>

<script>
  import SideBar from "./SideBar";

  export default {
    name: "FrontendLayout",
    components: {
      SideBar
    }
  }
</script>

<style lang="scss" scoped>

</style>
