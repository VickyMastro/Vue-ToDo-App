<template>
  <div class="home-container">
    <SearchAndFilter @filters="applyFilters" />
    <Notes ref="noteRef" v-show="showNotes" :filters="filters" />
    <ToDos ref="toDoRef" v-show="showToDos" :filters="filters" />
  </div>
</template>

<script>
import SearchAndFilter from "@/components/SearchAndFilter.vue";
import Notes from "./Notes.vue";
import ToDos from "./ToDos.vue";

export default {
  name: "Home",
  data() {
    return {
      filters: {},
    };
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    },
  },
  computed: {
    showNotes() {
      return (
        this.filters.listOption === "nota" ||
        this.filters.listOption === "all" ||
        !this.filters.listOption
      );
    },
    showToDos() {
      return (
        this.filters.listOption === "toDo" ||
        this.filters.listOption === "all" ||
        !this.filters.listOption
      );
    },
  },
  components: {
    SearchAndFilter,
    Notes,
    ToDos,
  },
};
</script>