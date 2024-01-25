<template>
  <q-page
    padding
    class="bg-accent"
  >
    <ProjectsCard :projects="internationalProjects" />
  </q-page>
</template>

<script setup>
import ProjectsCard from 'src/components/ProjectsCard.vue'
import { ref } from 'vue'

const internationalProjects = ref([
  {
    name: 'Training Course "Art of inclusion 2023"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2023
  },
  {
    name: 'Training Course "Art of inclusion 2021-1"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2021
  },
  {
    name: 'Training Course "Art of inclusion 2021-3"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2021
  },
  {
    name: 'Training Course "Art of inclusion 2021-3"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2021
  },
  {
    name: 'Training Course "Art of inclusion 2022"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2022
  },
  {
    name: 'Training Course "Art of inclusion 2021-2"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2021
  },
  {
    name: 'Training Course "Art of inclusion 2020"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2020
  },
  {
    name: 'Training Course "Art of inclusion 2020-2"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2020
  },
  {
    name: 'Training Course "Art of inclusion 2019"',
    category: 'international',
    photoUrl: '/projectPic/natureProject.jpg',
    year: 2019
  }
])

</script>
