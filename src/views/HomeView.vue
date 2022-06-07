<template>
  <div class="home">
    <ProductBanner />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ProductBanner from '@/components/ProductBanner.vue'

export default {
  name: 'HomeView',
  components: { ProductCard, ProductBanner }
}
</script>
