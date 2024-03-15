<template>
  <div

    class="q-mx-auto q-pt-md"
    style="width: 600px"
  >
    <q-carousel
      v-model="slideE"
      swipeable
      animated
      arrows
      thumbnails
      infinite
      :fullscreen="fullscreen"
      style="border-radius: 25px"
    >
      <q-carousel-slide
        v-for="doc in props.photos"
        :key="doc"
        :name="doc"
        :img-src="doc"
        style="background-size: contain; background-repeat: no-repeat; background-color: #4a5859"
        @click="fullscreen=!fullscreen"
      />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  photos: {
    type: Array,
    default: () => []
  },
  slide: {
    type: String,
    default: ''
  }
})

const slideE = ref(props.slide)

watchEffect(() => {
  if (props.photos) {
    slideE.value = props.slide
  }
})

document.onkeydown = (evt) => {
  if (evt.keyCode === 27) {
    fullscreen.value = false
  }
}

const fullscreen = ref(false)

</script>
