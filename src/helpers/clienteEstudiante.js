import axios from "axios";

const consultarEstudiante = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(res => res.data);
    console.log(data);
    return data;
}

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body).then(res => res.data);
    console.log(data);
}

const actualizar = (id, body) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, body).then(res => res.data);
    console.log(data);
}

const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(res => res.data);
    console.log(data);
}

// FACHADAS

export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}

export const actualizarFachada = async (id, body) => {
    await actualizar(id, body);
}

export const eliminarFachada = async (id) => {
    await eliminar(id);
}