<template>
  <q-page>
    <q-parallax

      src="../assets/loadPage_main.jpg"
      :height="1000"
      :speed="1"
    >
      <h1 class="text-white">
        Windmill Tree
      </h1>
    </q-parallax>
    <div
      class="text-center row justify-center contacts"
    >
      <i
        class="fa-regular fa-envelope fa-4x cursor-pointer"
        style="padding: 10px 45px"
      />

      <i
        class="fa-brands fa-facebook fa-4x cursor-pointer"
        style="padding: 10px 45px"
      />

      <i
        class="fa-brands fa-instagram fa-4x cursor-pointer"
        style="padding: 10px 45px"
      />

      <i
        class="fa-brands fa-youtube fa-4x cursor-pointer"
        style="padding: 10px 45px"
      />

      <i
        class="fa-brands fa-whatsapp fa-4x cursor-pointer"
        style="padding: 10px 45px"
      />
    </div>

    <!-- <q-img
      src="../assets/loadPage_main.jpg"
      style=""
    /> -->
  </q-page>
</template>

<script>

export default {
  name: 'WhoAreWe'
}
</script>
