/* import TableAdminFilms from "../../components/tableAdminFilms/TableAdminFilms"; */
import BooksAdmin from "../../components/bookAdmin/bookAdmin";
import { Form } from 'react-bootstrap';

export default function BookAdmin(){
    return (
        <>
            <Form className="mt-4 p-8">
                <Form.Label className="h5 m-5 p-2">Welcome Admin</Form.Label>
                    <Form.Labelm.Label className="h6 m-0 p-2">
                        In this area you can create or delete books from the database
                    </Form.Labelm.Label>
                        <Form.Group className="m-3 p-5">
                            <BooksAdmin></BooksAdmin>
                        </Form.Group>            
            </Form>
        </>
    );
}