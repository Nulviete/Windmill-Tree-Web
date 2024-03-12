<template>
  <q-page
    padding
    class="bg-accent"
    style=""
  >
    <div v-if="dataLoaded">
      <MemberCards :members="data" />
    </div>
    <div v-else>
      <q-spinner-hourglass
        color="grey"
        size="8em"
        class=""
      />
    </div>
  </q-page>
</template>

<script setup>

import getMembers from 'src/composables/getMembers'

import MemberCards from 'src/components/MemberCards.vue'

const { loadMembers, data, dataLoaded, error } = getMembers()

loadMembers()

if (error) {
  console.log(error)
}

</script>
