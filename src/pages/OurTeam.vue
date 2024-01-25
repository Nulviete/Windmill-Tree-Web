<template>
  <q-page
    padding
    class="bg-accent"
    style=""
  >
    <MemberCard :members="members" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import MemberCard from 'components/MemberCard.vue'

const members = ref([
  {
    name: 'Hrystia',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Head'

  },
  {
    name: 'Ola',
    photoUrl: '/members/Ola.jpg',
    position: 'Head'

  },
  {
    name: 'Vira',
    photoUrl: '/members/Vira.jpg',
    position: 'Head'

  },
  {
    name: 'Kassia',
    photoUrl: '/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Kuba',
    photoUrl: '/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Czapi',
    photoUrl: '/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Misa',
    photoUrl: '/members/xyz.jpg',
    position: 'SecondHead'

  },
  {
    name: 'Milana',
    photoUrl: '/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Rodrigo',
    photoUrl: '/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Yassim',
    photoUrl: '/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Alvaro',
    photoUrl: '/members/xyz.jpg',
    position: 'Volunteer'

  },
  {
    name: 'Dani',
    photoUrl: '/members/xyz.jpg',
    position: 'Volunteer'

  }
])

</script>
