<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultarPorId">Consultar</button>
  <input v-model="nombre" type="text" />

  <input v-model="apellido" type="text" />
  <button @click="insertar">Insertar</button>
</template>

<script>
import { consultarEstudianteFachada, insertarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente");
      console.log(data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        nombre: "Juan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "2000-08-01T00:00:00",
        direccion: "Carcelen",
        correoElectronico: "jjacome@uce.edu.ec",
        edad: 20,
        telefono: "0914447021",
        carrera: "Filosofia",
      };
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>