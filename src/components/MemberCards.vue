<template>
  <!-- head section -->
  <MemberCard :members="headMembers" />
  <!-- secondHead section -->
  <MemberCard :members="secondHeadMembers" />
  <!-- volunteer section -->
  <MemberCard :members="volunteers" />
</template>

<script setup>
import { computed } from 'vue'
import MemberCard from 'src/components/MemberCard.vue'

const props = defineProps({
  members: {
    type: Array,
    default: () => []
  }
})

console.log(props.members, 'this is from Membercard')

const headMembers = computed(() => props.members.filter((member) => member.position === 'Head of the Foundation' || member.position === 'Vice'))
const secondHeadMembers = computed(() => props.members.filter((member) => member.position === 'Root Member'))
const volunteers = computed(() => props.members.filter((member) => member.position === 'Volunteer'))

</script>
