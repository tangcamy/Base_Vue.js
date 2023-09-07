<script setup>
import { RouterView,RouterLink} from "vue-router"
</script>

<template>
  <nav class="px-6 py-4 text-xl shadow">
    <ul class="flex gap-4">
      <li><RouterLink to="/">設備管理系統首頁</RouterLink></li>
      <li><RouterLink to="/about">關於</RouterLink></li>
    </ul>
  </nav>
  <!-- 渲染模板的樣式 -->
  <main class="mx-12">  
    <RouterView> </RouterView>
  </main>
</template>