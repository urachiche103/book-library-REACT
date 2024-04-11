import React from "react";
import { Card } from "react-bootstrap";

export default function BookCard({book}) {
    return (
        <Card style={{width: '18rem'}} className="pt-1 h-100 mx-auto">
            <Card.Img variant="top" src="{book.img}"></Card.Img> 
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-mute">{book.author}</Card.Subtitle>
                <Card.Text>Año: {book.year}</Card.Text>
                <Card.Text>Idioma: {book.language}</Card.Text>
                <Card.Text>País: {book.country}</Card.Text>
                <Card.Text>Páginas: {book.pages}</Card.Text>
            </Card.Body>
        </Card>
    );
}