<template>
  <q-page
    padding
    class="justify-center text-center"
  >
    <div v-if="dataLoaded">
      <ProjectPageComponent :project="data[0]" />
    </div>
    <div v-else>
      <p>asd</p>
    </div>
  </q-page>
</template>

<script setup>
import ProjectPageComponent from 'src/components/ProjectPageComponent.vue'
import getProject from 'src/composables/getProject'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  projectCategory: {
    type: String,
    default: ''
  }
})

const { data, dataLoaded, load } = getProject()
load(props.name)

console.log(props.name, '        -- props in ProjectPage')

</script>

<style scoped>

</style>
