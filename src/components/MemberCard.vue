<template>
  <!-- head section -->
  <div
    class="head q-pb-xl q-pt-xl"
    style="border-bottom: 1px solid"
  >
    <div
      class="row q-gutter-sm justify-center"
    >
      <div
        v-for="member in headMembers"
        :key="member"
        class="text-center "
        style="width: 350px;"
      >
        <q-card
          style=""
          class="my-content bg-primary"
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
  </div>
  <!-- secondHead section -->
  <div
    class="secondHead q-pb-xl q-pt-xl"
    style="border-bottom: 1px solid"
  >
    <div
      class="row q-gutter-sm justify-center"
      style=""
    >
      <div
        v-for="member in secondHeadMembers"
        :key="member"
        class="text-center"
        style="width: 350px"
      >
        <q-card
          style=""
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
  </div>
  <!-- volunteer section -->
  <div class="volunteer q-mb-lg q-pt-xl">
    <div
      class="row q-gutter-sm justify-center"
      style=""
    >
      <div
        v-for="member in volunteers"
        :key="member"
        class="col-3 text-center"
        style="width: 350px;"
      >
        <q-card
          style=""
          class="my-content bg-primary"
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
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  members: {
    type: Array,
    default: () => []
  }
})

const headMembers = computed(() => props.members.filter((member) => member.position === 'Head'))
const secondHeadMembers = computed(() => props.members.filter((member) => member.position === 'SecondHead'))
const volunteers = computed(() => props.members.filter((member) => member.position === 'Volunteer'))

</script>

<style scoped>
.q-card {
  border-radius: 10px;

}
</style>
