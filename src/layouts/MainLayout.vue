<template>
  <q-layout view="hhh lpR fff">
    <q-header
      reveal
      elevated
      class="bg-primary text-white row justify-between items-center q-px-lg"
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
                <q-item clickable>
                  <q-item-section>
                    International
                  </q-item-section>
                </q-item>
                <q-item clickable>
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
            to="/OurTeam"
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

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <h5-text class="full-width">
            Copyright © 2024 Windmill Tree | All Rights Reserved
          </h5-text>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
