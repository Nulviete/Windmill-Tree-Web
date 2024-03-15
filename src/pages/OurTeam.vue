<template>
  <q-page
    padding
    class="bg-accent"
    style=""
  >
    <div v-if="dataLoaded">
      <!-- head section -->
      <MemberCard
        :members="headMembers"
        :data-loaded="dataLoaded"
      />
      <!-- secondHead section -->
      <MemberCard
        :members="secondHeadMembers"
        :data-loaded="dataLoaded"
      />
      <!-- volunteer section -->
      <MemberCard
        :members="volunteers"
        :data-loaded="dataLoaded"
      />
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
import MemberCard from 'src/components/MemberCard.vue'
import { onMounted, computed } from 'vue'

const { loadMembers, data, dataLoaded, error } = getMembers()

onMounted(async () => {
  await loadMembers()
})

const headMembers = computed(() => data.value.filter((member) => member.position === 'Head of the Foundation' || member.position === 'Vice'))
const secondHeadMembers = computed(() => data.value.filter((member) => member.position === 'Root Member'))
const volunteers = computed(() => data.value.filter((member) => member.position === 'Volunteer'))

if (error.value) {
  console.log(error)
}

</script>
