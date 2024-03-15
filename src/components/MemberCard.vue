<template>
  <div
    class="head q-py-xl row q-gutter-lg justify-center"
  >
    <div
      v-for="member in props.members"
      :key="member.id"
      class="card text-center"
    >
      <q-card>
        <q-card-section
          class="row justify-center"
        >
          <p class="text-white q-pa-none q-ma-none">
            <b>{{ member.name }}</b>
          </p>
          <img
            :src="'/nation_flag/'+member.country+'_flag.png'"
            alt=""
            class="q-pl-sm flag"
          >
        </q-card-section>
        <q-card-section class="q-pa-none">
          <img
            :src="'/members/Hrystia.JPG'"
            width="100%"
            class="q-ma-none q-pa-none photo"
          >
          <p
            class="q-mb-sm text-white  q-px-xs"
          >
            <span v-if="member.position!='Root Member'"> {{ member.position }}  <br></span>
            <span v-else>{{ member.positionDescription }}  <br></span>
            <span v-if="member.position==='Volunteer'">{{ member.dateSince }} -
              {{ member.dateTill }}
              <br></span>
            <span v-if="member.position!='Root Member'"> {{ member.positionDescription }}</span>
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  members: {
    type: Array,
    default: () => []
  },
  dataLoaded: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.q-card {
  border-radius: 40px;
  border: solid 2px green;
background-color: #6D9B7A;
min-height: 412px;
}
.card {
  width: 310px;
}
img.photo {
height: 300px;
}
img.flag {
  width: 40px
}
p {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
