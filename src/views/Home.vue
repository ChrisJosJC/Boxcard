<template>
  <v-container>
    <div class="home">
      <h1>¡Hola Janna!!!</h1>
      <h2>Korean</h2>
      <!--Las Flashcards-->

      <div v-for="card in cards" :key="card">
        <flashcard :front="card.front" :back="card.back"> </flashcard>
      </div>

      <!--Boton para añadir mas flascards-->
      <b-icon
        style="position: fixed; bottom: 20px; right: 25px; font-size: 2em"
        icon="plus-circle-fill"
        variant="primary"
        v-on:click="FormGroup = true"
      ></b-icon>
      <v-dialog v-model="FormGroup">
        <v-card style="padding: 20px">
          <v-text-field
            name="input-7-1"
            filled
            label="Parte delantera"
            auto-grow
            v-model="PartF"
          ></v-text-field>
          <v-text-field
            name="input-7-1"
            filled
            label="Parte trasera"
            auto-grow
            v-model="PartB"
          ></v-text-field>
          <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="collection"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Coreano"
              >Coreano</b-form-radio
            >
            <b-form-radio
              v-model="collection"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Ingles"
              >Ingles</b-form-radio
            >
            <b-form-radio
              v-model="collection"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="Otros"
              >Otros</b-form-radio
            >
          </b-form-group>

          <v-btn v-on:click="FormGroup = false" style="margin-right: 15px"
            >Cancelar</v-btn
          >
          <v-btn v-on:click="add()">Crear</v-btn>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import Flashcard from "../components/Flashcard.vue";

// @ is an alias to

export default {
  name: "Home",
  data() {
    return {
      value: 0,
      cards: [{ front: "배우다", back: "Aprender" }],
      collection: "",
      FormGroup: false,
      PartF: "",
      PartB: "",
      items: ["Coreano", "Ingles", "Otros"],
    };
  },
  components: { Flashcard },
  methods: {
    add() {
      this.cards.push({ front: this.PartF, back: this.PartB, group: this.collection });
      //Valores por default
      this.FormGroup = false;
      this.PartF = "";
      this.PartB = "";
      this.collection = "";
      //Subiendo valores al localStorage
      localStorage.setItem("cards", JSON.stringify(this.cards));
    },
    del() {
      this.cards.splice(1, this.value);
      localStorage.setItem("cards", JSON.stringify(this.cards));
      console.log(this.cards);
    },
  },
  async mounted() {
    //Establece el LocalStorage sino esta establecido
    // O hace que "cards" sea igual a localStorage si existe
    if (localStorage.getItem("cards") == null) {
      localStorage.setItem("cards", []);
    } else {
      this.cards = localStorage.getItem("cards");
    }
  },
};
</script>

<style>
svg {
  font-size: 2em;
}
</style>
