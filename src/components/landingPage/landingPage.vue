<template>
    <div class="principal">
        <div class="header">
            <h1>This is the landing page header</h1>            
        </div>
        <div class="body-landPage">
            <div class="card">
                <img src="https://wallpapercave.com/wp/wp12766756.jpg">
                <router-link class="next-button" to="/inicio">Go to inicio</router-link>
            </div>
        </div>
        <div class="header">
            <h1>
                This is the landing page footer
            </h1>
        </div>
    </div>
</template>
<style>
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {};
    },
    methods: {
        redirect: function() {
            this
        }
    }
})
</script>