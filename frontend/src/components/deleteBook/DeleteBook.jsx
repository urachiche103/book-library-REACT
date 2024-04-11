import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";

export default function DeleteBook() {
    const { user } = useContext(SessionContext);
    const [id, setId] = useState("");
    const [bookDeleted, setBookDeleted] = useState([""]);

    function deleteBook(id) {
    const DeleteBookById = `http://localhost:3000/api/books/${id}?token=${user.token}`;
    axios.delete(DeleteBookById)
        .then((response) => {
            setBookDeleted((prevBooks) => [...prevBooks]);
            Swal.fire({title:"Process completed!",
            text: "Book has been deleted.",
            icon: "sucess"});
            setId("");
        })
        .catch((error) => {
            console.error("Error deleting book:", error);
            setBookDeleted((prevBooks) => [...prevBooks]);
            Swal.fire({title:"Error",
            text: "Failed to delete book",
            icon: "error"});
        });
    }

    useEffect(() => {
        if (bookDeleted[bookDeleted.length - 1] === "Book was deleted") {
            setId("");
        }
    }, [bookDeleted]);

    return (
        <Form className="container p-3">
        <Form.Label className="h3">Delete Comic</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter ID of the comic to be deleted"
            value={id}
            onChange={(e) => setId(e.target.value)}
        />
        <Button className="p-2 mt-2" onClick={() => deleteBook(id)}>Delete Book</Button>
        <p>{bookDeleted[bookDeleted.length - 1]}</p>
        </Form>
    );
}