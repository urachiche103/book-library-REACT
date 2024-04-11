import Form from 'react-bootstrap/Form';
import CreateBook from "../createBook/CreateBook";
import DeleteBook from "../deleteBook/DeleteBook";

export default function BooksAdmin(){
    return (
        <>
            <Form>
                    <Form.Group className="p-2">
                        <DeleteBook></DeleteBook>
                    </Form.Group>
                    <Form.Group className="p-2">
                        <CreateBook></CreateBook>
                    </Form.Group>
            </Form>
        </>
    );
}