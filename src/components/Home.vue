<template>
  <div>
    <!-- main -->
    <main>
      <div class="container">
        <p><strong>{{ title }}</strong> {{ about }}</p>
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/ceqOTZnhgY8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Breaking Bad",
      about:
        "is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes. It was set and filmed in Albuquerque, New Mexico, and tells the story of Walter White (Bryan Cranston), an underemployed and depressed high school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime, partnering with his former student Jesse Pinkman (Aaron Paul), by producing and distributing crystallized methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. The title is a Southern colloquialism meaning to turn to a life of crime.[8] Gilligan characterized the series as showing Walter's transformation from a soft-spoken Mr. Chips into Scarface. ",
    };
  },
};
</script>

<style scoped></style>
