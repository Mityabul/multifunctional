<template>
  <v-container class="home pa-0 pr-0" fluid>
    <div class="hero">
      <div class="hero-body">
        <p class="title">Добро пожаловать!</p>
      </div>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'BaseHome',
  data () {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>

section {
  width: 100%;
}

.hero {
  background: linear-gradient(135deg, #21408D 0%, #1C1654 100%);
  &-body {
    height: 560px;
    width: auto;
    text-align: center;
  }
  &-btn {
    padding-bottom: 10%;
  }
}
.title {
  color: #fff;
  padding-top: 10%;
  padding-bottom: 1%;
  font-weight: 600;
}

</style>
