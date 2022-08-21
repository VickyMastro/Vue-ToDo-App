<template>
  <div class="home-container">
    <SearchAndFilter @filters="applyFilters" />

    <div
      v-show="showMessage"
      class="text-center mt-5 fs-3 w-50"
      style="
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 10px;
        margin-left: 25%;
      "
    >
      <span> Aún no se crearon notas ni toDos </span>
    </div>

    <div v-show="!showMessage">
      <Notes
        ref="noteRef"
        v-show="showNotes"
        :filters="filters"
        @countNotes="counting"
      />
      <ToDos
        ref="toDoRef"
        v-show="showToDos"
        :filters="filters"
        @countToDos="counting"
      />
    </div>
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
      hasNotes: true,
      hasToDos: true,
      filters: {},
    };
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    },
    counting(option, have) {
      if (option === "notes") {
        this.hasNotes = have;
      } else if (option === "toDos") {
        this.hasToDos = have;
      }
    },
  },
  computed: {
    showMessage() {
      return this.hasNotes === false && this.hasToDos === false;
    },
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