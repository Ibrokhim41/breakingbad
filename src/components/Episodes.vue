<template>
  <div>
    <div class="container">
      <div class="seasons">
        <div v-for="(season, index) in seasons" :key="index">
          <button @click="seasonSelected = season.id">
            {{ season.title }}
          </button>
        </div>
      </div>

      <div class="episode_card">
        <div class="episode_card_title" v-show="seasonSelected">
          <h3>Season {{ seasonSelected }}</h3>
        </div>
        <div class="episode_card" v-for="(item, index) in episodes" :key="index">
          <div v-show="item.season == seasonSelected">
            <h5>Episode: {{ item.episode }}</h5>
            <h5>Title: {{ item.title }}</h5>
            <h5>Air date: {{ item.air_date }}</h5>
            <h5>Characters:</h5>
            <div class="epi_char">
              <div v-for="(item, index) in item.characters" :key="index">
                <router-link
                  :to="{ name: 'Character', query: { charName: item }}"
                  @click="setSearch(item)"
                  ><p>{{ item }}</p></router-link
                >
                <!-- <a
                  @click="setSearch(item)"
                  ><p>{{ item }}</p></a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      episodes: [],
      seasons: this.$store.state.seasons,
      characters: [],
      seasonSelected: 1,
      search: "",
    };
  },
  // components: {
  //   char: Character
  // },
  methods: {
    setSearch(val) {
      this.$emit('setChar', val)
    }
  },
  mounted() {
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => (this.episodes = data));

    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => (this.characters = data));
  },
  created() {},
};
</script>

<style scoped>
.seasons {
  display: flex;
  justify-content: center;
}
.episode_card_title {
  text-align: center;
  color: #ffffff;
}
.epi_char {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.epi_char p {
  color: #528644;
}
</style>
