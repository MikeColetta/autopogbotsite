import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PlayCard from '../PlayCard';
import firebase from "../../utils/firebase";

function RecentPlays() {
    const [plays, setPlays] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.database().ref("sickplays");


    function getPlays() {

        firebase.database().ref("sickplays").orderByChild("Time").on('value', snapshot => {
            let items = [];
            console.log(items)
            snapshot.forEach(snap => {
                items.push(snap.val());
                items.reverse();
            })
            setPlays(items);
        }
        )
    }

    useEffect(() => {
        getPlays();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Card className="categoryCard">
            <h2 style={{ color: "white" }}>Recent Plays</h2>
            <ListGroup>
                {plays.map((play) => (
                    <div key={play.id}>
                        <ListGroupItem className="listItems">
                            <PlayCard
                                champ={play.ChampionPlayed}
                                url={play.VideoURL}
                                player={play.Summoner}
                                playType={play.PlayType}
                            />
                        </ListGroupItem>
                    </div>
                ))}
            </ListGroup>
        </Card>
    )
}

export default RecentPlays;
