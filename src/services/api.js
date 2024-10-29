import axios from 'axios';
const i = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getBooks = async () => {
  const response = await i.get('/books');
  return response.data;
};


export const createBook = async (book) => {
  const response = await i.post('/books', book);
  return response.data;
}

export const deleteBook = async (id) => {
  const response = await i.delete(`/books/${id}`);
  return response.data;
}

export const updateBook = async (book) => {
  await i.put(`/books`, book);
  // return response.data;
}