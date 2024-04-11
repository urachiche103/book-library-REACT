import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { CardTitle, Container, Row } from "react-bootstrap";
import { BookCard } from "../bookCard/bookCard" 
import { useTranslation } from "react-i18next"
import "./bookCarousel.scss";


export default function BookCarousel() {
    // const [cookies] = useCookies();
    // const userToken = cookies.user;
    const routeToken = `http://localhost:3000/api/books?token=${userToken.token}`;
    const {t} = useTranslation()

    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get(routeToken)
        .then((response) => {
            setBooks([...books, ...response.data]);
        })
    .catch((err) => {
        console.log(err);
    });
}, []);

return (
    <>
        <CardTitle as="h1" className="mb-2 p-3">
            <p>{t('Book Library')}</p>
        </CardTitle>
        <Container fluid="flex" className="p-3  w-75 mx-auto">
            <Row>
                {books.map((book) => (
                    <BookCard key={book.id} book={book}></BookCard>
                ))}
            </Row>
        </Container>
    </>
    );
}
