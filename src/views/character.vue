<template>
  <div>
    <div
      class="character"
      v-for="(character, index) in characters"
      :key="index"
    >
      <img :src="character.img" alt="" />
      <div>
        <h5><strong>Name:</strong> {{ character.name }}</h5>
        <h5><strong>Nickname:</strong> {{ character.nickname }}</h5>
        <h5><strong>Birthday:</strong> {{ character.birthday }}</h5>
        <h5>
          <strong>Occupation:</strong>
          <span v-for="(item, index) in character.occupation" :key="index">
            {{ item }} <br />
          </span>
        </h5>
        <h5><strong>Status:</strong> {{ character.status }}</h5>
        <h5><strong>Portrayed:</strong> {{ character.portrayed }}</h5>
        <h5>
          <strong>Appearance:</strong>
          <span v-for="season in character.appearance" :key="season">
            {{ season }}
          </span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      search: this.$route.query.charName,
    };
  },
  mounted() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        this.characters = data.filter((item) => {
          return item.name == this.search;
        });
      });

    console.log(this.characters);
  },
};
</script>

<style scoped>
.character {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.character img {
  width: 350px;
}
</style>
