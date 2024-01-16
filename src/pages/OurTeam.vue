<template>
  <q-page
    padding
    class="bg-accent"
  >
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
          class="my-content q-mx-auto bg-secondary"
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
          class="my-content q-mx-auto bg-secondary"
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
          class="my-content q-mx-auto bg-secondary"
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
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const members = ref([
  {
    name: 'Hrystia',
    photoUrl: 'src/assets/members/Hrystia.jpg',
    position: 'Head'

  },
  {
    name: 'Ola',
    photoUrl: 'src/assets/members/Ola.jpg',
    position: 'Head'

  },
  {
    name: 'Vira',
    photoUrl: 'src/assets/members/Vira.jpg',
    position: 'Head'

  },
  {
    name: 'Kassia',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Kuba',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Czapi',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Misa',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Milana',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Rodrigo',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Yassim',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Alvaro',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Dani',
    photoUrl: 'src/assets/members/xyz.jpg',
    position: 'Volunteer'

  }
])

const headMembers = members.value.filter((member) => member.position === 'Head')
const secondHeadMembers = members.value.filter((member) => member.position === 'SecondHead')
const volunteers = members.value.filter((member) => member.position === 'Volunteer')

</script>
