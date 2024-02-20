<template>
  <q-page
    padding
    class="bg-accent"
  >
    <div v-if="dataLoaded">
      <ProjectsCard :projects="documents" />
    </div>
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

import getProject from 'src/composables/getProject'

const { documents, load, error, dataLoaded } = getProject()

load('forUkraine')
if (error.value != null) {
  console.log(error)
}
console.log(documents, 'ForUkraine - documents')
</script>
