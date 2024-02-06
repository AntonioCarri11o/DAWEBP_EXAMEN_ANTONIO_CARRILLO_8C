<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import vehicleService from './services/vehicleService';
export default {
  mounted() {
    this.setVehicles();
  },
  methods: {
    setVehicles() {      
      vehicleService.setVehicles();
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
