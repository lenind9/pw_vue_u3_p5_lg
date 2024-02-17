<template>
  <div class="container">
    <div class="formulario">
      <input v-model="id" type="text" placeholder="Ingrese ID" />

      <div class="actualizar">
        <p type="Nombre: ">
          <input v-model="nombre" type="text" placeholder="Nombre" />
        </p>
        <p type="Apellido: ">
          <input v-model="apellido" type="text" placeholder="Apellido" />
        </p>
        <p type="Género: "><input v-model="genero" type="text" placeholder="Género"/></p>
        <p type="Fecha de nacimiento: ">
          <input v-model="fechaNacimiento" type="datetime-local" />
        </p>
        <p type="Dirección: "><input v-model="direccion" type="text" placeholder="Dirección"/></p>
        <p type="Correo electrónico: ">
          <input v-model="correoElectronico" type="text" placeholder="Correo electrónico"/>
        </p>
        <p type="Edad: "><input v-model="edad" type="text" placeholder="Edad"/></p>
        <p type="Teléfono: "><input v-model="telefono" type="text" placeholder="Teléfono"/></p>
        <p type="Carrera: "><input v-model="carrera" type="text" placeholder="Carrera"/></p>

        <div>
          <button @click="actualizar">Actualizar</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { actualizarFachada } from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      direccion: null,
      correoElectronico: null,
      edad: null,
      telefono: null,
      carrera: null,
    };
  },
  methods: {
    async actualizar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        correoElectronico: this.correoElectronico,
        edad: this.edad,
        telefono: this.telefono,
        carrera: this.carrera,
      };
      await actualizarFachada(this.id, estuBody);
    },
  },
};
</script>

<style>
</style>