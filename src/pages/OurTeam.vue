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

import MemberCard from 'components/MemberCard.vue'
import { ref } from 'vue'

const members = ref([
  {
    name: 'Hrystia Pavlutska',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Head',
    positionDescription: 'Head of organization',
    role: 'Faciliator, project manager'

  },
  {
    name: 'Ola',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Head',
    positionDescription: 'Vice president',
    role: 'Faciliator, project manager'

  },
  {
    name: 'Vira Pavlutska',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Head',
    positionDescription: 'Vice president',
    role: 'Project manager'

  },
  {
    name: 'Kasia',
    photoUrl: '/members/Hrystia.JPG',
    position: 'SecondHead',
    positionDescription: '',
    role: 'Coordinator of Erasmus + acreditation projects, financial department'

  },
  {
    name: 'Kuba',
    photoUrl: '/members/Hrystia.JPG',
    position: 'SecondHead',
    positionDescription: '',
    role: 'Coordinator of European Solidarity corps program, logistic and transportation manager'

  },
  {
    name: 'Czapi',
    photoUrl: '/members/Hrystia.JPG',
    position: 'SecondHead',
    positionDescription: '',
    role: 'Foundation photografer, fairy elf '

  },
  {
    name: 'Misa',
    photoUrl: '/members/Hrystia.JPG',
    position: 'SecondHead',
    positionDescription: '',
    role: 'Foundation web design master'

  },
  {
    name: 'Milana',
    country: 'ua',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Project manager, children, youth animation',
    date: 'September 2023 - now'
  },
  {
    name: 'Rodrigo',
    country: 'sp',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Project manager, children, youth animation'

  },
  {
    name: 'Yassim',
    country: 'sp',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'children and youth animation'

  },
  {
    name: 'Alvaro',
    country: 'sp',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'children and youth animation'

  },
  {
    name: 'Dani',
    country: 'it',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Children and youth animation'

  }
])

</script>
