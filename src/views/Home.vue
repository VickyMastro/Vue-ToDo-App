<template>
  <div class="home-container">
    <SearchAndFilter />
    <Notes />
    <ToDos />
  </div>
</template>

<script>
import SearchAndFilter from '@/components/SearchAndFilter.vue'
import Notes from './Notes.vue'
import ToDos from './ToDos.vue'


export default {
  name: 'Home',
  components: {
    SearchAndFilter,
    Notes,
    ToDos,
  }
}
</script>

// contiene: searchAndFilter, boton +, cards de notas