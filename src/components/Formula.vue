<template>
  <div>
    <v-dialog v-model="Group">
      <v-card style="padding: 20px">
        <v-text-field
          name="input-7-1"
          filled
          label="Parte delantera"
          auto-grow
          v-model="F"
        ></v-text-field>
        <v-text-field
          name="input-7-1"
          filled
          label="Parte trasera"
          auto-grow
          v-model="B"
        ></v-text-field>
        <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="Coll"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Coreano"
            >Coreano</b-form-radio
          >
          <b-form-radio
            v-model="Coll"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Ingles"
            >Ingles</b-form-radio
          >
          <b-form-radio
            v-model="Coll"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Otros"
            >Otros</b-form-radio
          >
        </b-form-group>

        <v-btn v-on:click="Group = false" style="margin-right: 15px">Cancelar</v-btn>
        <v-btn v-on:click="add()">Crear</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Formula",
  props: {
    Group: { type: Boolean, default: false },
    F: { type: String, default: "" },
    B: { type: String, default: "" },
    Coll: { type: String, default: "" },
    tarjetas: { type: Object / Array, default: [] },
  },
  methods: {
    add() {
      this.tarjetas.push({ front: this.F, back: this.B, group: this.Coll });
      console.log(JSON.stringify(this.tarjetas));
      //Valores por default
      this.Group = false;
      this.F = "";
      this.B = "";
      this.Coll = "";
      //Subiendo valores al localStorage
      localStorage.setItem("cards", JSON.stringify(this.cards));
    },
  },
};
</script>
