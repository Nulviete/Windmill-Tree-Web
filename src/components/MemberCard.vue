<template>
  <!-- head section -->
  <div
    class="head q-pb-xl q-pt-xl"
    style=""
  >
    <div
      class="row q-gutter-lg justify-center"
    >
      <div
        v-for="member in headMembers"
        :key="member"
        class="card text-center "
        style=""
      >
        <q-card
          style=""
          class=""
        >
          <q-card-section
            class=""
          >
            <div class="text-white text-h5 q-pa-none q-ma-none">
              <b>{{ member.name }}</b> <br>
            </div>
            <p class="text-white q-pa-none q-ma-none">
              {{ member.positionDescription }}
            </p>
          </q-card-section>
          <q-card-section class="q-pa-none">
            <img
              :src="member.photoUrl"
              width="100%"
              class="q-ma-none q-pa-none"
              style="border-radius: 0 0 10px 10px;"
            >
            <p
              class="q-mb-sm text-white"
              style=""
            >
              {{ member.role }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <!-- secondHead section -->
  <div
    class="head q-pb-xl q-pt-xl"
    style=""
  >
    <div
      class="row q-gutter-lg justify-center"
    >
      <div
        v-for="member in secondHeadMembers"
        :key="member"
        class="card text-center "
        style=""
      >
        <q-card
          style=""
          class=""
        >
          <q-card-section
            class=""
          >
            <p class="text-white q-pa-none q-ma-none">
              <b>{{ member.name }}</b> <br> {{ member.positionDescription }}
            </p>
          </q-card-section>
          <q-card-section class="q-pa-none">
            <img
              :src="member.photoUrl"
              width="100%"
              class="q-ma-none q-pa-none"
              style="border-radius: 0 0 10px 10px;"
            >
            <p
              class="q-mb-sm text-white"
              style="height: 42px"
            >
              {{ member.role }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <!-- volunteer section -->
  <div
    class="head q-pb-xl q-pt-xl"
    style=""
  >
    <div
      class="row q-gutter-lg justify-center"
    >
      <div
        v-for="member in volunteers"
        :key="member"
        class="card text-center "
        style=""
      >
        <q-card
          style=""
          class=""
        >
          <q-card-section
            class="row justify-center"
          >
            <p class="text-white q-pa-none q-ma-none">
              <b>{{ member.name }}</b>
            </p>
            <img
              :src="'/nation_flag/'+member.country+'_flag.png'"
              alt=""
              class="q-pl-sm"
              style="width: 40px"
            >
          </q-card-section>
          <q-card-section class="q-pa-none">
            <img
              :src="member.photoUrl"
              width="100%"
              class="q-ma-none q-pa-none"
              style="border-radius: 0 0 10px 10px;"
            >
            <p
              class="q-mb-sm text-white"
              style=""
            >
              {{ member.position }} <br> {{ member.date }} <br>{{ member.role }}
            </p>
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

console.log(props.members, 'this is from Membercard')

const headMembers = computed(() => props.members.filter((member) => member.position === 'Head'))
const secondHeadMembers = computed(() => props.members.filter((member) => member.position === 'SecondHead'))
const volunteers = computed(() => props.members.filter((member) => member.position === 'Volunteer'))

</script>

<style scoped>
.q-card {
  border-radius: 40px;
  border: solid 2px green;
background-color: #6D9B7A;

}
.card {
  width: 310px;
}
img {
height: auto;
}
</style>
