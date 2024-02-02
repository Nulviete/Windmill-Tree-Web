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

import getCollection from 'src/composables/getCollection'

const { documents, load, error, dataLoaded } = getCollection()

load('forUkraine')
if (error.value != null) {
  console.log(error)
}
</script>
