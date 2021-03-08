<template>
  <div class="about">
    <h2>Hola</h2>
    <div v-for="(card, index) in cards" :key="index">
      <!--Las Flashcards-->
      <flashcard :front="card.front" :back="card.back"> </flashcard>
    </div>
  </div>
</template>

<script>
import Flashcard from "../components/Flashcard.vue";
export default {
  name: "Create",
  components: { Flashcard },
  data() {
    return {
      cards: [],
      collection: "",
      PartF: "",
      PartB: "",
      items: ["Coreano", "Ingles", "Otros"],
    };
  },
};
</script>
