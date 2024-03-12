<template>
  <q-page
    padding
    class="bg-accent"
  >
    <div v-if="dataLoaded">
      <ProjectsCard :projects="documents" />
    </div>

    <!-- Loading spinner -->
    <div
      v-else
      class="text-center vertical-center"
      style="padding-top: 8vh"
    >
      <q-spinner-hourglass
        color="grey"
        size="8em"
        class=""
      />
    </div>
  </q-page>
</template>

<script setup>
import ProjectsCard from 'src/components/ProjectsCard.vue'

import getProjects from 'src/composables/getProjects'

const { documents, load, error, dataLoaded } = getProjects()

load('international')
if (error.value != null) {
  console.log(error)
}
console.log('InternationalProjects', documents)

</script>
