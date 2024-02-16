<template>
  <div class="container">
    <div class="formulario">
      <h1>Componente Estudiante</h1>
      <div class="consultar">
        <input v-model="id" type="text" placeholder="Ingrese ID"/>
        <div class="boton">
          <button @click="consultarPorId">Consultar</button>
        </div>
      </div>
      <div class="insertar">
        <p type="Nombre: "><input v-model="nombre" type="text" placeholder="Nombre"/></p>
        <p type="Apellido: "><input v-model="apellido" type="text" placeholder="Apellido"/></p>
        <p type="Género: "><input v-model="genero" type="text" /></p>
        <p type="Fecha de nacimiento: "><input v-model="fechaNacimiento" type="datetime-local" /></p>
        <p type="Dirección: "><input v-model="direccion" type="text" /></p>
        <p type="Correo electrónico: "><input v-model="correoElectronico" type="text" /></p>
        <p type="Edad: "><input v-model="edad" type="text" /></p>
        <p type="Teléfono: "><input v-model="telefono" type="text" /></p>
        <p type="Carrera: "><input v-model="carrera" type="text" /></p>

        <div>
          <button @click="insertar">Insertar</button>
          <button @click="actualizar">Actualizar</button>
          <button @click="eliminar">Eliminar</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {consultarEstudianteFachada, insertarFachada, actualizarFachada, eliminarFachada} from "../helpers/clienteEstudiante.js";

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
      console.log("Desde componente");
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
    async eliminar() {
      await eliminarFachada(this.id);
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}

h1 {
  padding-bottom: 15px;
  color: #00268f;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 17px;
  color: #4b4b4b;
}

p {
  text-align: left;
}

input {
  width: 350px;
  height: 17px;
  background-color: #c3def7;
}

.boton{
  margin: 12px;
}

button{
  border-radius: 5px;
  padding: 7px;
  font-size: 14px;
  background: #8bb5dd;
}
</style>