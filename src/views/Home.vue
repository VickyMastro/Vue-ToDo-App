<template>
  <div class="home container">
    <SearchAndFilter />
  </div>
</template>

<script>
import SearchAndFilter from '@/components/SearchAndFilter.vue'

export default {
  name: 'Home',
  components: {
    SearchAndFilter
  }
}
</script>

// contiene: searchAndFilter, boton +, cards de notas