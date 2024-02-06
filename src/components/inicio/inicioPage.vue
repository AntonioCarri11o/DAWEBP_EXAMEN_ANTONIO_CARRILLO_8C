<script setup>
import navbarComponent from '../navigation/navbarComponent.vue';
import sidebarComponent from '@/components/navigation/sidebarComponent';
</script>
<template>
    <div class="principal">
        <navbarComponent></navbarComponent>
        <sidebarComponent style="width: 20%;"></sidebarComponent>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
.content {
    margin-top: 56px;
    margin-left: 15%;
    display: flex;
    width: calc(100% - 15%);
    height: 100%;    
}
</style>