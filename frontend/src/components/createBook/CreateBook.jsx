import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import axios from "axios";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

export default function CreateComics() {
    const { user } = useContext(SessionContext);
    const [bookCreated, setBookCreated] = useState({
        author: "",
        country: "",
        language: "",
        pages: "",
        title: "",
        year: "",
        img: ""
});

    const handleSubmit = (event)=> {
        event.preventDefault();
        const PostBook = `http://localhost:3000/api/books?token=${user.token}`;
            axios.post(PostBook, bookCreated)
            .then((response)=>{
                console.log (response.data);
                Swal.fire({
                    title:"Process completed!",
                    text: "The book has been created.",
                    icon: "success"});
                setBookCreated({
                    author: "",
                    country: "",
                    language: "",
                    pages: "",
                    series: "",
                    title: "",
                    year: "",
                    img: ""
                });
            })
            .catch((error)=>{
                console.log(error)
                Swal.fire({
                    title:"Process error!",
                    text: "Error in the creation of the comic.",
                    icon: "error"});
            })
    }

    return(
        <>
            <Form className="container  p-3">
                <Form.Label className="h3">Create a new book</Form.Label>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Book title" onChange={(e)=>setBookCreated({...bookCreated, title:e.target.value})}></Form.Control>
                    </Form.Group>

                <Form.Group>
                    <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Book author" onChange={(e)=>setBookCreated({...bookCreated, author:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Published year</Form.Label>
                    <Form.Control type="number" placeholder="Published year" onChange={(e)=>setBookCreated({...bookCreated, year:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" placeholder="Language" onChange={(e)=>setBookCreated({...bookCreated, language:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" onChange={(e)=>setBookCreated({...bookCreated, country:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pages</Form.Label>
                    <Form.Control type="text" placeholder="Pages" onChange={(e)=>setBookCreated({...bookCreated, pages:e.target.value})}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Book Cover</Form.Label>
                    <Form.Control type="number" placeholder="Year published" onChange={(e)=>setBookCreated({...bookCreated, img:e.target.value})}></Form.Control>
                </Form.Group>

                <Button className="p-2 mt-2" variant="primary" type="button" onClick={handleSubmit}>Create a new book</Button>
            </Form>
        </>
    )
}
