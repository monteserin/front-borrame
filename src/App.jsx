import { useEffect, useState } from "react"
import { createBook, deleteBook, getBooks } from "./services/api"
import { Button, Input, InputNumber, Table } from "antd"
import { RedInput } from "./styles";
import Tr from "./components/Tr";


// const columns = [

//   {
//     title: 'Id',
//     dataIndex: 'id',
//     key: 'id',
//   }, {
//     title: 'Title',
//     dataIndex: 'title',
//     key: 'title',
//   },
//   {
//     title: 'Price',
//     dataIndex: 'price',
//     key: 'price',
//   }
// ]
function App() {

  const [books, setBooks] = useState();
  const [newBook, setNewBook] = useState({ title: '', price: 0 });

  useEffect(() => {
    queryBooks()
  }
    , [])


  const queryBooks = async () => {
    getBooks().then(d => {
      console.log(d);
      setBooks(d)
    })
  }

  const handleInsert = async () => {
    await createBook(newBook);
    queryBooks();
    setNewBook({ title: '', price: 0 });
  }



  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      {/* <Table dataSource={books} columns={columns} /> */}
      <table className="table">

        <tr>
          <th className="table-primary">Id</th>
          <th className="table-primary">Title</th>
          <th className="table-primary">Price</th>
          <th className="table-primary"></th>
        </tr>
        {
          books?.map(b => <Tr key={b.id} b={b} queryData={queryBooks} />)
        }
        <tr>
          <td></td>
          <td><input className="form-control" type="text" onChange={e => setNewBook({ ...newBook, title: e.target.value })} value={newBook.title} /></td>
          <td><input className="form-control" type="number" onChange={num => setNewBook({ ...newBook, price: num })} value={newBook.price} /></td>
          <td><button className="form-control" onClick={handleInsert}>Alta</button></td>
        </tr>
      </table>

    </div>
  )
}

export default App
