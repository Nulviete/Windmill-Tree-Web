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

      <q-tabs
        align="left"
        class="text-black"
      >
        <q-route-tab
          to="/"
          label="Who are we?"
        />
        <q-btn-dropdown
          unelevated
          transition-show="flip-right"
          transition-hide="flip-left"
          label="Projects"
        >
          <q-list class="bg-primary">
            <q-item
              clickable
            >
              <q-item-section>Volunteering programs</q-item-section>
            </q-item>
            <q-item
              clickable
            >
              <q-item-section>International</q-item-section>
            </q-item>
            <q-item
              clickable
            >
              <q-item-section>4 Ukraine</q-item-section>
            </q-item>
            <q-item
              clickable
            >
              <q-item-section>LOCAL</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-route-tab
          to="/OurTeam"
          label="Our Team"
        />

        <q-route-tab
          to="/page3"
          label="Photos"
        />
        <q-route-tab
          to="/page3"
          label="We need you (open call)"
        />
      </q-tabs>
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
