<template>
  <div class="row justify-center q-gutter-lg">
    <!-- Left side - intro card -->
    <!-- front side -->
    <div
      class="flip-card row q-gutter-md"
    >
      <q-card
        v-for="year in years"
        :key="year"
        class="flip-card-inner"
        :class="{ flipped: clicked }"
        @click="
          clicked = true;
          selYear = year;
          years = clickedYear(selYear)
        "
      >
        <q-card-section class="flip-card-front q-pa-none text-center">
          <img
            :src="'/projectPic/natureProject.jpg'"
          >
          <h2 class="text-white full-width q-py-md">
            {{ year }}
          </h2>
        </q-card-section>

        <!-- rear side -->

        <q-card-section class="flip-card-back column justify-center">
          <q-item
            v-for="project in projectsByYear(year)"
            :key="project.id"
            clickable
            :class="{ active: project === projectSel}"
            active-class="text-white"
            @click="
              projectSel = project;

            "
          >
            <q-item-section
              style="height: 60px"
              @click="loadProject(project.name);
                      slide = firstPic"
            >
              {{ project.name }}
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>

    <!-- Right card - Project info -->
    <div
      v-if="projectSel"
      class="justify-center"
      style="margin-top: 40px; height: 450px"
    >
      <q-card
        class="col-4 justify-center"
        style="height: 100%"
      >
        <q-card-section
          class="text-center"
          style="box-sizing: border-box;
           max-height: 100%;
          display: flex;
          flex-direction: column;
          "
        >
          <h6
            style="box-sizing: border-box; "
            class="q-my-lg"
          >
            {{ projectSel.name }}
          </h6>

          <p style="box-sizing: border-box;  overflow-y: auto;">
            {{ projectSel.projectDescription }} <br>
            <span v-if="projectSel.countries"><b>Participants from:</b> <br> {{ projectSel.countries }}</span>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <!-- Gallery slide show -->
  <GalleryPhotos
    v-if="projectSel && dataLoaded"
    :photos="data[0].photos"
    :slide="slide"
  />
</template>

<script setup>
import { ref } from 'vue'
import getProject from 'src/composables/getProject'
import GalleryPhotos from './projectsCard/GalleryPhotos.vue'

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
  slide.value = firstPic.value
  console.log(slide.value)
}

const years = ref([])
const selYear = ref()
const projectSel = ref(false)

const clicked = ref(false)

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

const clickedYear = (rok) => {
  return years.value.filter((item) => item === rok)
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.flip-card-front img  {
width: 100%;
height: 450px;
background-size: cover
}
.flip-card-front h2 {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -100%);
  background: rgba(0, 0, 0, .5)
}

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
.flipped {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: all 0.3s;
}
.flip-card-back {
  transform: rotateY(180deg);
}
:checked + .flip-card-inner {
  transform: rotateY(180deg);
  -webkit-transform: rotateX(180deg);
}

.flip-card-front:hover {
  box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.5);
  scale: 1.04;
}
.active {
  color: rgb(220, 215, 215);
  background-color: #869b6c;
}
.q-btn.backBtn {
background-color: #B2D08E

}
.q-btn.backBtn:hover {
  color: rgb(220, 216, 216);
  background-color: #3c714b;

}
.q-card {
  box-sizing: border-box;
  width: 350px;
  max-height: 450px;
  border-radius: 40px;
  background-color: #b2d08e;
  min-height: 412px;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: #AAAAAA;
}
img{
  border-radius: 40px;
}

</style>
