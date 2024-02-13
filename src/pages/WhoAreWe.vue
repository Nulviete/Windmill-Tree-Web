<template>
  <q-page>
    <div
      class="hero text-center q-ma-auto vertical-center q-mx-auto"
      style="position: relative"
    >
      <h1
        class=""
      >
        Windmill Tree
      </h1>

      <h3
        class="q-mx-auto full-width"
        style=""
      >
        ,,Give a person a little of yourself. <br> For this, the soul is filled with light." -Lina Kostenko
      </h3>
    </div>
    <!-- socials -->
    <div
      class="text-center row justify-center contacts bg-grey-5 q-py-md"
    >
      <a href="mailto:nulvietz@gmail.com"><i
        class="fa-regular fa-envelope fa-4x cursor-pointer"
      /></a>

      <a href="https://www.facebook.com/FundacjaWindmillTree/photos_by"><i
        class="fa-brands fa-facebook fa-4x cursor-pointer"
      /></a>
      <a href="https://www.instagram.com/foundation_windmill_tree/"><i
        class="fa-brands fa-instagram fa-4x cursor-pointer"
      /></a>
      <a href="https://www.youtube.com/@foundationwindmilltree8203"><i
        class="fa-brands fa-youtube fa-4x cursor-pointer"
      /></a>

      <a href="https://wa.me/+48796369201"><i
        class="fa-brands fa-whatsapp fa-4x cursor-pointer"
      /></a>
    </div>

    <div
      style="width: 55%"
      class="about-us text-justify q-mx-auto text-h4 q-py-lg"
    >
      Windmill Tree is not just a foundation: we are a family on a true-hearted journey.<br><br> Our goal? To fill this world with creativity, make youth and social work even better. We are connecting with rural youth and creating bonds between countries.
      <br><br>Located in the breathtaking Izery Mountains region, our diverse team is a bland of individuals from Poland, Ukraine, Germany and Czech Republic. We're inviting you to be part of something special. <br><br> Let's build a world where everyone is included, and every little bit of effort transforms into something wonderfully positive. <br><br> Welcome home!
    </div>
  </q-page>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,300;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');

.hero {
  background-image: url("assets/Windmill_Tree.png");
  height: 85vh;
background-position: center;
background-size: cover;

color: white;
}
h1 {
  margin: 0;
  padding: 100px 0;
  font-family: 'Alice', serif;
  font-size: 8em;
  color: #E9FDD5;
}
h3 {
  background: rgba(0, 0, 0, .5);
line-height: 1.8em;
font-size: 2.5em;
padding: 20px 0px ;
position: absolute;
bottom: 0;
margin: 0;
color: #E9FDD5;

}
a {
  color: inherit;
  padding: 10px 45px;
}
.about-us {
font-family: 'Fira Sans', sans-serif;
line-height: 1.4em;
}
</style>
