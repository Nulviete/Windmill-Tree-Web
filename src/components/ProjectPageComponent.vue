<template>
  <!-- slide gallery -->
  <div
    class="q-mx-auto"
    style="width: 600px"
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
        v-for="doc in props.project.photos"
        :key="doc"
        :name="doc"
        :img-src="doc"
      />

      <template #control>
        <q-carousel-control position="bottom-right">
          <q-btn
            color="white"
            icon="fullscreen"
            text-color="black"

            @click="fullscreen=!fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="text-h5 text-left q-py-md">
      <p>{{ props.project.projectDescription }}</p>
      <p v-if="props.project.countries">
        Participants from: <br> {{ props.project.countries }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  project: {
    type: Object,
    default: () => {}
  }
})

const slide = ref(props.project.photos[0])
const fullscreen = ref(false)
console.log(props.project.name, 'ProjectPageComp')

</script>

<style scoped>
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #C7C8CC;
}
</style>
