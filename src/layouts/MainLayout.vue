<template>
  <q-layout view="hhh lpR fff">
    <q-header
      reveal
      elevated
      class="bg-primary text-white row justify-between items-center q-px-lg q-mx-auto"
      style=""
      height-hint="98"
    >
      <q-img
        src="../assets/logoWindmilltree_color.png"
        style="width: 200px"
      />

      <div class="q-pa-md">
        <div class="q-gutter-md row items-center">
          <q-btn
            class="text-black"
            color="primary"
            label="Who are we?"
            to="/"
            unelevated
          />
          <q-btn
            class="text-black"
            color="primary"
            label="Projects"
            unelevated
          >
            <q-menu
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list>
                <q-item clickable>
                  <q-item-section>
                    Volunteering programs
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu
                    anchor="top end"
                    self="top start"
                  >
                    <q-list>
                      <q-item clickable>
                        <q-item-section>Coordinating</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Hosting</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
                <q-item
                  clickable
                  :to="{ name: 'InternationalProjects'}"
                >
                  <q-item-section>
                    International
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  clickable
                  :to="{ name: 'ForUkraine'}"
                >
                  <q-item-section>
                    4 Ukraine
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    LOCAL
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    Partner
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-item-section>
              <q-icon name="keyboard_arrow_down" />
            </q-item-section>
          </q-btn>
          <q-btn
            class="text-black"
            color="primary"
            label="Our Team"
            :to="{ name: 'OrTeam'}"
            unelevated
          />
          <q-btn
            class="text-black"
            color="primary"
            label="Latest news"
            to="/LatestNews"
            unelevated
          />
          <q-btn
            color="primary"
            class="text-black"
            label="We need you (open call)"
            to="/Opencall"
            unelevated
          />
          <q-btn
            color="primary"
            class="text-black"
            label="Toolbox"
            to="/Toolbox"
            unelevated
          />
        </div>
      </div>
      <div
        class="row q-pa-md"
      >
        <div class="q-px-sm">
          PL
        </div>
        <div class="q-px-sm">
          EN
        </div>

        <div class="q-px-sm">
          UA
        </div>
      </div>
    </q-header>

    <!-- pro obrazek, kdyz budu chtit misto parallax -->
    <q-page-container
      style=""
      class="bg-accent"
    >
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white q-py-md"
      style=""
    >
      <div class="footer row q-mx-auto">
        <div class="footer-left col-6 self-center">
          <p>
            Paderewskiego str. 10,   <br>
            58-506 Jelenia Góra,  <br>
            Poland
          </p>
        </div>
        <div class="footer-right col-6 text-right self-center">
          <p>
            National Court Register No.: 0000784824 <br>
            VAT No.: 6161567287 <br>
            National Official Register: 383942113
          </p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.footer {
  width: 60%;

}
.footer p {
  font-size: 1.1em;
  line-height: 2em;
  margin: 0;
}
</style>
