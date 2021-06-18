import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PlayCard from '../PlayCard';
import firebase from "../../utils/firebase";

function RecentPlays() {
    const [plays, setPlays] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const ref = firebase.firestore().collection("SickPlays");
    
    function getPlays(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPlays(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPlays();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
    <Card className="categoryCard">
        <h2 style={{color: "white"}}>Recent Plays</h2>
        <ListGroup>
            {plays.map((play) => (
                <div key={play.id}>
                <ListGroupItem className="listItems">
                    <PlayCard 
                    title = {play.title}
                    description = {play.description}
                    url = {play.url}
                    player = {play.player}
                    />
                </ListGroupItem>
                </div>
            ))}
        </ListGroup>
    </Card>
    )
}

export default RecentPlays;
