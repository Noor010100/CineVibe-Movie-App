import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODcxZTcxZTM5NTdhNDE5MDRlMjdhNTg2MDBlZDBhMyIsIm5iZiI6MTcyNDM1NzA2OC4yMTUzNiwic3ViIjoiNjZjNzg3ODY5YWMzYTZhMDkxZDdmMzMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7sLphpzJae5G512ETohZeuSL775N86t2TAJ5SH3Djn8'
  },
});

export default instance