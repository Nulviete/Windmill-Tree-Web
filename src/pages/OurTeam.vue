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
    name: 'Kassia',
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
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Project manager, children, youth animation'

  },
  {
    name: 'Rodrigo',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Project manager, children, youth animation'

  },
  {
    name: 'Yassim',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'children and youth animation'

  },
  {
    name: 'Alvaro',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'children and youth animation'

  },
  {
    name: 'Dani',
    photoUrl: '/members/Hrystia.JPG',
    position: 'Volunteer',
    role: 'Children and youth animation'

  }
])

</script>
