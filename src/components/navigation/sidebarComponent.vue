<template>
  <div>
    <b-sidebar bg-variant="dark" text-variant="light" id="sidebar-1" title="Sidebar" shadow no-close-on-route-change visible no-header>
      <div class=" tony-sidebar">
        <div class=" tony-sidebar-content p-3">
          <h4 id="sidebar-no-header-title">Menu</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item  href="#/inicio">Incio</b-nav-item>
              <b-nav-item href="#/form">Form</b-nav-item>
              <b-nav-item href="#/pagination">Pagination</b-nav-item>
            </b-nav>
          </nav>
          <b-button style="background-color: #4935ff;" @click="navigate" block >Go to landpage</b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
    methods: {
        navigate() {
            this.$router.push('/')
        }
    },
    name: 'sidebarComponent'
}
</script>
<style scoped>
.tony-sidebar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.tony-sidebar-content {
    margin-top: 58px;
    display: flex;
    flex-direction: column;
    align-items:start;
}
</style>