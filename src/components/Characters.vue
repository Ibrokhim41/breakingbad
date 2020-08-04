<template>
  <div class="container">
    <div class="search">
      <input type="text" placeholder="Search character" v-model="search" />
    </div>
    <!-- <h2 v-show="result" style="text-align: center">No Result</h2> -->
    <div class="characters">
      <div
        class="character"
        v-for="(character, index) in findCharacters"
        :key="index"
      >
        <router-link :to="{ name: 'Character', query: { charName: character.name } }">
          <img :src="character.img" alt="" />
          <h5>{{ character.name }}</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: this.$store.state.search,
      characters: [],
      characterFromEpisode: [],
      result: false,
    };
  },
  computed: {
    findCharacters() {
      return this.characters.filter((character) => {
        return character.nickname.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
  },
  mounted() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => (this.characters = data));
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
.characters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.character {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}
.character img {
  width: 180px;
  height: 175px;
}
.character_info {
  padding: 15px 50px;
}
</style>
