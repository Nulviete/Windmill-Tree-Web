<template>
  <q-page
    padding
    class="justify-center text-center"
  >
    <div v-if="document">
      <div class="text-h2 q-pb-xl q-pt-lg">
        {{ props.name }}
      </div>

      <!-- slide gallery -->
      <div
        class="q-mx-auto"
        style="width: 650px"
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
            v-for="doc in document[0].photos"
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
      </div>
    </div>
    <div
      v-else
      class="text-center vertical-center"
      style="padding-top: 8vh"
    >
      <q-spinner-hourglass
        color="grey"
        size="8em"
        class=""
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from 'src/config/supabaseClient'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  projectCategory: {
    type: String,
    default: ''
  }
})
const document = ref(null)
const dataLoaded = ref(false)
const fullscreen = ref(false)
const slide = ref('')

const loadProject = async (name) => {
  try {
    const { data, error, status } = await supabase.from('projects').select().eq('name', name)

    if (error && status !== 406) {
      throw Error('no data available')
    }
    if (data) {
      document.value = data
      dataLoaded.value = true
      slide.value = document.value[0].photos[0]
    }
  } catch (error) {
    alert(error.message)
  }
}
loadProject(props.name)

</script>

<style scoped>
.q-carousel {
  border: 5px solid #D4E7C5;
  border-radius: 15px;
}
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #C7C8CC;
}
</style>
