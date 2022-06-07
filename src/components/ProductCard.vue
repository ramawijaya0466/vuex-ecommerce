<template>
	<h1>All Products</h1>
	<div class="row border border-3 rounded-3 py-3" style="background-color: #f8f9fa;">
		<div class="col-md-3 mb-3" v-for="product in getProducts" :key="product.id">
			<div class="card">
				<img :src="product.image" class="card-img-top" alt="#">
				<div class="card-body">
					<h4 class="card-title">{{ product.name }}</h4>
					<h5 class="card-title">${{ product.price }}</h5>
					<p class="card-text">{{ product.description }}</p>
					<router-link 
						class="btn btn-primary" 
						:to="{ name: 'product-detail', params: { id: product.id } }"
					>
						Detail Product
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductCard',

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
}
</script>
