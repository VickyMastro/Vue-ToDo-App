<template>
  <div class="home-container">
    <SearchAndFilter />
    <Notes />
  </div>
</template>

<script>
import SearchAndFilter from '@/components/SearchAndFilter.vue'
import Notes from './Notes.vue'

export default {
  name: 'Home',
  components: {
    SearchAndFilter,
    Notes,
  }
}
</script>

// contiene: searchAndFilter, boton +, cards de notas