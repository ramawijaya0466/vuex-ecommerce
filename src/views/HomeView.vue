<template>
  <div class="home">
    <ProductCard />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: { ProductCard },

  data() {
    return {
      // 
    }
  },
  methods: {
    // 
  },
  computed: {
    ...mapGetters({
      getProducts: 'product/getProducts'
    })
  },
  
  created() {
    this.$store.dispatch('product/fetchProducts')
  },
  mounted() {
    // 
  },
  updated() {
    // log json in here ...
  }
}
</script>
