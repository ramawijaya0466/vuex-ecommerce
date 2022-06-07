<template>
  <NavigationBar />
  <div class="container py-4">
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: { NavigationBar }
}
</script>
