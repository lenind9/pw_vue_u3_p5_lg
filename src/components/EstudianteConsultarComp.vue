<template>
  <div class="container">
    <div class="formulario">
      <div class="consultar">
        <input v-model="id" type="text" placeholder="Ingrese ID" />
        <div class="boton">
          <button @click="consultarPorId">Consultar</button>
        </div>
      </div>

      <div class="actualizar">
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

      </div>
    </div>
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";

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
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.fechaNacimiento = data.fechaNacimiento;
      this.direccion = data.direccion;
      this.correoElectronico = data.correoElectronico;
      this.edad = data.edad;
      this.telefono = data.telefono;
      this.carrera = data.carrera;
    },
  },
};
</script>

<style>
</style>