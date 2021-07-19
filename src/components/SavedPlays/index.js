import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PlayCard from '../PlayCard';

function SavedPlays() {
    return (
    <Card className="categoryCard">
        <h2>Your Saved Plays</h2>
        <ListGroup>
            <ListGroupItem className="listItems">
                <PlayCard />
            </ListGroupItem>
            <ListGroupItem className="listItems">
                <PlayCard />
            </ListGroupItem>
            <ListGroupItem className="listItems">
                <PlayCard />
            </ListGroupItem>
        </ListGroup>
    </Card>
    )
}

export default SavedPlays;
