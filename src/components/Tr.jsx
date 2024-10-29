import { useState } from 'react';
import { Button, Input, InputNumber } from 'antd';
import { deleteBook, updateBook } from '../services/api';

const Tr = ({ b, queryData }) => {
  const [book, setBook] = useState(b);

  const handleDelete = async () => {
    await deleteBook(book.id);
    queryData();
  }

  const handleUpdate = async () => {
    await updateBook(book);
    queryData();
  }
  return (
    <tr>
      <td>{book.id}</td>
      <td><input className="form-control" type="text" onChange={e => setBook({ ...book, title: e.target.value })} value={book.title} /></td>
      <td><input className="form-control" type="number" onChange={num => setBook({ ...book, price: num })} value={book.price} /></td>
      <td className='d-flex'>
        <button className="form-control" onClick={handleUpdate}>Edit</button>
        <button className="form-control" onClick={handleDelete}>Delete</button>
      </td>

    </tr>
  );
};

export default Tr;