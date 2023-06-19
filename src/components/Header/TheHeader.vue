<script setup>
</script>
<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/quick-deal">Quick Deal</RouterLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quick-deal">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quick-deal/task-manager">Task manager</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar {
  background-color: #e3f2fd
}

.nav-item:active {
  text-decoration: underline;
}
</style>