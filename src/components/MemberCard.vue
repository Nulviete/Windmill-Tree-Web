<template>
  <div
    class="cards row q-col-gutter-md justify-center"
    style="border-bottom: 1px solid"
  >
    <div
      v-for="member in headMembers"
      :key="member"
      class="col-4 text-center q-pb-lg"
      style=""
    >
      <q-card
        style="width: 350px; min-width: 350px"
        class="my-content q-mx-auto bg-primary"
      >
        <q-card-section>
          <h5>{{ member.name }}</h5>
        </q-card-section>
        <q-card-section>
          <img
            :src="member.photoUrl"
            height="200px"
          >
        </q-card-section>
        <q-card-section>
          {{ member.position }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div
    class="cards row q-col-gutter-md justify-center"
    style="border-bottom: 1px solid"
  >
    <div
      v-for="member in secondHeadMembers"
      :key="`md-${member}`"
      class="col-3 text-center q-pb-lg q-pt-xl"
      style=""
    >
      <q-card
        style="width: 350px; min-width: 350px"
        class="my-content q-mx-auto bg-primary"
      >
        <q-card-section>
          <h5>{{ member.name }}</h5>
        </q-card-section>
        <q-card-section>
          <img
            :src="member.photoUrl"
            height="200px"
          >
        </q-card-section>
        <q-card-section>
          {{ member.position }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div
    class="cards row q-col-gutter-md justify-center"
    style=""
  >
    <div
      v-for="member in volunteers"
      :key="`md-${member}`"
      class="col-3 text-center q-pb-lg q-pt-xl "
      style=""
    >
      <q-card
        style="width: 350px; min-width: 350px"
        class="my-content q-mx-auto bg-primary"
      >
        <q-card-section>
          <h5>{{ member.name }}</h5>
        </q-card-section>
        <q-card-section>
          <img
            :src="member.photoUrl"
            height="200px"
          >
        </q-card-section>
        <q-card-section>
          {{ member.position }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['members'])

const headMembers = computed(() => props.members.filter((member) => member.position === 'Head'))
const secondHeadMembers = computed(() => props.members.filter((member) => member.position === 'SecondHead'))
const volunteers = computed(() => props.members.filter((member) => member.position === 'Volunteer'))

</script>
