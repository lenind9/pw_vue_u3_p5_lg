<template>
  <h1>Página Eliminar</h1>
  <input v-model="id" type="text" placeholder="Ingrese ID" />
  <button @click="eliminar">Eliminar</button>
</template>

<script>

import {eliminarFachada} from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style>
</style>