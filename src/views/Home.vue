<template>
  <v-container>
    <div class="home">
      <h1>¡Hola Janna!!!</h1>
      <h2>¿Estas lista para aprender?</h2>
      <!--Las Flashcards-->

      <h3 v-if="this.cards.length == 0" style="margin-top: 200px; opacity: 0.7">
        Aun no tienes una Flashcard <br />
        Crea una Flashcard!!!
        <b-icon-arrow-down
          style="font-size: 1em !important; transform: rotate(-35deg)"
        ></b-icon-arrow-down>
      </h3>

      <div v-else v-for="(card, idx) in cards" :key="idx">
        <h2>{{ idx }}</h2>
        <flashcard :front="card.front" :back="card.back" :colorFront="'#d4b0d9'">
        </flashcard>
        <b-icon-pencil-square
          v-on:click="predit(idx)"
          class="mr-4"
        ></b-icon-pencil-square>
        <b-icon-trash v-on:click="del(idx)" animation="spin" color="red"></b-icon-trash>
        <hr />
      </div>
      <!--Boton para añadir mas flascards-->
      <b-icon
        style="position: fixed; bottom: 20px; right: 25px; font-size: 2em !important"
        icon="plus-circle-fill"
        variant="primary"
        v-on:click="FormGroup = true"
      ></b-icon>
      <!-- Dialogo para crear Flashcard-->
      <v-dialog v-model="FormGroup">
        <v-card style="padding: 20px">
          <h2>Crea tu Flashcard</h2>
          <v-text-field
            style="max-width: 100%"
            name="input-7-1"
            filled
            label="Parte delantera"
            auto-grow
            v-model="PartF"
            outlined
            clearable
          ></v-text-field>
          <v-text-field
            style="min-width: 100% !important"
            name="input-7-1"
            filled
            label="Parte trasera"
            auto-grow
            outlined
            clearable
            v-model="PartB"
          ></v-text-field>
          <v-color-picker
            dot-size="29"
            hide-canvas
            mode="rgba"
            show-swatches
            swatches-max-height="100"
          ></v-color-picker>
          <v-btn v-on:click="FormGroup = false" style="margin-right: 15px"
            >Cancelar</v-btn
          >
          <v-btn v-on:click="add()">Crear</v-btn>
        </v-card>
      </v-dialog>
      <!-- Dialogo para editar Flashcard-->
      <v-dialog v-model="editar">
        <v-card style="padding: 20px">
          <h2>Edita tu Flashcard</h2>
          <v-text-field
            name="input-7-1"
            label="Parte delantera"
            auto-grow
            outlined
            clearable
            v-model="PartEF"
          ></v-text-field>
          <v-text-field
            style="max-width: 100%"
            name="input-7-1"
            label="Parte trasera"
            auto-grow
            outlined
            clearable
            v-model="PartEB"
          ></v-text-field>
          <v-btn v-on:click="editar = false" style="margin-right: 15px">Cancelar</v-btn>
          <v-btn v-on:click="edit(ind)">Crear</v-btn>
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
      cards: [],
      ind: 0,
      FormGroup: false,
      PartF: "",
      PartEF: "",
      PartB: "",
      PartEB: "",
      editar: false,
    };
  },
  components: { flashcard: Flashcard },
  methods: {
    add() {
      this.cards.push({
        front: this.PartF,
        back: this.PartB,
        ind: Number,
      });
      console.log(ind);
      //Subiendo valores al localStorage
      localStorage.setItem("cards", JSON.stringify(this.cards));
      //Valores por default
      this.FormGroup = false;
      this.PartF = "";
      this.PartB = "";
    },
    del(ind) {
      this.cards.splice(ind, 1);
      console.log("Fue eliminado!!! ", ind, this.cards.length);
      localStorage.setItem("cards", JSON.stringify(this.cards));
    },
    predit(i) {
      this.PartEF = this.cards[i].front;
      this.PartEB = this.cards[i].back;
      this.editar = true;
      this.ind = i;
    },
    edit() {
      this.cards[this.ind] = {
        front: this.PartEF,
        back: this.PartEB,
        ind: this.cards.length,
      };
      console.log(this.ind);
      //Subiendo valores al localStorage
      localStorage.setItem("cards", JSON.stringify(this.cards));
      //Valores por default
      this.editar = false;
    },
  },
  async mounted() {
    //Establece el LocalStorage sino esta establecido
    // O hace que "cards" sea igual a localStorage si existe
    if (localStorage.getItem("cards") == null) {
      localStorage.setItem("cards", []);
    } else {
      this.cards = JSON.parse(localStorage.getItem("cards"));
    }
  },
};
</script>

<style>
svg {
  font-size: 2em;
}
</style>
