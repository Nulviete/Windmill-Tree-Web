<template>
  <div class="row justify-center q-gutter-lg">
    <!-- front side -->
    <div
      class="flip-card row justify-center q-gutter-md text-center items-center"
    >
      <q-card
        v-for="year in years"
        :key="year"
        class="flip-card-inner col-4 bg-primary"
        :class="{ flipped: clicked }"
        style=""

        @click="
          clicked = true;
          selYear = year;
          years = clickedYear(selYear)
        "
      >
        <q-card-section class="flip-card-front q-pa-none">
          <div
            class=""
            style="text-align: center"
          >
            <img
              :src="'/projectPic/natureProject.jpg'"
              class=""
              style="
            border-radius: 5px;
            width: 100%;
            height: 450px;
            background-size: cover
            "
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

        <!-- rear side -->

        <q-card-section class="flip-card-back bg-accent column justify-center">
          <q-item
            v-for="project in projectsByYear(year)"
            :key="project"
            clickable
            class=""
            style=""

            @click="projectSel = project"
          >
            <q-item-section
              class=""
              style="height: 60px"
              @click="loadProject(project.name)"
            >
              {{ project.name }}
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>

    <div
      v-if="projectSel"
      class="row justify-center"
      style="margin-top: 40px"
    >
      <q-card
        class="col-4 bg-accent justify-center"
        style=""
      >
        <q-card-section class="text-center">
          <h6>{{ projectSel.name }}</h6>
          <p>{{ projectSel.description }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div
    v-if="dataLoaded"
    class="q-mx-auto q-pt-md"
    style="width: 800px"
  >
    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      thumbnails
      infinite
      :fullscreen="fullscreen"
    >
      <q-carousel-slide
        v-for="doc in data[0].photos"
        :key="doc"
        :name="doc"
        :img-src="doc"
      />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import getProject from 'src/composables/getProject'

const props = defineProps({
  projects: {
    type: Array,
    default: () => []
  }
})

const slide = ref()

const { data, dataLoaded, load, firstPic } = getProject()

const loadProject = async (project) => {
  await load(project)
  if (dataLoaded) {
    slide.value = firstPic.value
  }
}

/* testing */
console.log(props.projects, 'ProjectCard - props')

const years = ref([])
const selYear = ref()
const projectSel = ref(false)

const clicked = ref(false)
const fullscreen = ref(false)

for (let i = 0; i < props.projects.length; i++) {
  if (!years.value.includes(props.projects[i].year)) {
    years.value.push(props.projects[i].year)
  }
}

years.value.sort(function (a, b) {
  return b - a
})

const projectsByYear = (rok) => {
  return props.projects.filter((project) => project.year === rok)
}
console.log(projectsByYear(2150))

const clickedYear = (rok) => {
  return years.value.filter((item) => item === rok)
}

console.log(clickedYear(2021))

</script>

<style scoped>
.flip-card {

  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 0.6s;
  transform-style: preserve-3d;

}

/* .flip-card-inner:hover {
  transform: rotateY(180deg);
} */

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {

  transform: rotateY(180deg);
}

:checked + .flip-card-inner {
  transform: rotateY(180deg);
  -webkit-transform: rotateX(180deg);
}

.q-card {
  width: 350px; height: 450px; border-radius: 5px
}

</style>
