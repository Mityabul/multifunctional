<template>
  <v-app>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <v-container fluid :class="{ 'background-route-home' : isBackgroundRoute }">
      <app-header></app-header>
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </v-container>
  </v-app>
</template>

<script>
import AppHeader from '@/components/app/AppHeader';
import AppSidebar from '@/components/app/AppSidebar';
import AppContent from '@/components/app/AppContent';
import router from '@/router';

export default {
  name: 'App',
  components: { AppSidebar, AppContent, AppHeader },

  data () {
    return {
      isBackgroundRoute: false,
    };
  },
  mounted () {
    this.isBackgroundRoute = router.currentRoute.name === 'Home';
    this.$router.afterEach((to) => {
      this.isBackgroundRoute = to.name === 'Home';
    });
  },
}
</script>

<style lang="scss">
body,
#app {
  font-size: 16px;
  line-height: 16px;
}

.background-route-home {
  background: linear-gradient(135deg, #21408D 12%, #1C1654 100%);
}
</style>
