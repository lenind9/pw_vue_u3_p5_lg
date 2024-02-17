<template>
  <div class="container">
    <div class="formulario">
      <div class="insertar">
        <p type="Nombre: ">
          <input v-model="nombre" type="text" placeholder="Nombre" />
        </p>
        <p type="Apellido: ">
          <input v-model="apellido" type="text" placeholder="Apellido" />
        </p>
        <p type="Género: "><input v-model="genero" type="text" /></p>
        <p type="Fecha de nacimiento: ">
          <input v-model="fechaNacimiento" type="datetime-local" />
        </p>
        <p type="Dirección: "><input v-model="direccion" type="text" /></p>
        <p type="Correo electrónico: ">
          <input v-model="correoElectronico" type="text" />
        </p>
        <p type="Edad: "><input v-model="edad" type="text" /></p>
        <p type="Teléfono: "><input v-model="telefono" type="text" /></p>
        <p type="Carrera: "><input v-model="carrera" type="text" /></p>

        <div>
          <button @click="insertar">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { insertarFachada } from "../helpers/clienteEstudiante";

export default {
  data() {
    return {
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
    async insertar() {
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
      await insertarFachada(estuBody);
    },
  },
};
</script>

<style>
</style>