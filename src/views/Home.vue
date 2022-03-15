<template>
  <div class="home">
    <HelloWorld msg="Mi proyecto en Vue (TODO-App)"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
