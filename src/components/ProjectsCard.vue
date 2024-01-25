<template>
  <div

    class="row justify-center q-gutter-sm q-mx-auto"
  >
    <q-card
      v-for="year in years"
      :key="year"
      class="col-4 bg-primary"
      style="width: 350px; height: 500px; border-radius: 5px  "
    >
      <q-card-section class="q-pa-none">
        <div
          class=""
          style="text-align: center"
        >
          <img
            :src="'/projectPic/natureProject.jpg'"
            class="full-width"
            style="border-radius: 5px 5px 0px 0px"
            height=""
          >
          <h2
            class="text-white full-width q-py-md"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -100%); background: rgba(0, 0, 0, .5)"
          >
            {{ year }}
          </h2>
        </div>
      </q-card-section>
      <!-- <q-card-section>
        <div
          class="text-h2 text-center text-white "
          style="background-image: url('../../public/projectPic/natureProject.jpg');
          height: 350px;
          background-size: cover; align-self: center "
        >
          {{ year }}
        </div>
      </q-card-section> -->
      <div
        style="overflow: auto; height: 170px"
        class=""
      >
        <q-card-section>
          <q-item
            v-for="project in projectsByYear(year)"
            :key="project"
            clickable
            class="bg-accent"
          >
            <q-item-section>
              {{ project.name }}
            </q-item-section>
          </q-item>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    default: () => []
  }
})

const years = ref([])

for (let i = 0; i < props.projects.length; i++) {
  if (!years.value.includes(props.projects[i].year)) {
    years.value.push(props.projects[i].year)
  }
}

years.value.sort(function (a, b) {
  return b - a
})

function projectsByYear (rok) {
  return props.projects.filter((project) => project.year === rok)
}

</script>
