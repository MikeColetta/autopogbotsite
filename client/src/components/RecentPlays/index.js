import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PlayCard from '../PlayCard';
import firebase from '../../utils/firebase';
import PlayPagination from '../PlayPagination';
import './style.css';

function RecentPlays() {
    const [plays, setPlays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [playsPerPage] = useState(5);

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

    //Get current plays
    const indexOfLastPlay = currentPage * playsPerPage;
    const indexOfFirstPlay = indexOfLastPlay - playsPerPage;
    const currentPlays = plays.slice(indexOfFirstPlay, indexOfLastPlay)

    useEffect(() => {
        getPlays();
    }, []);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Card className="categoryCard">
            <h2 style={{ color: "white" }}>Recent Plays</h2>
            <ListGroup className="playList">
                {currentPlays.map((play) => (
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
            <PlayPagination
                playsPerPage={playsPerPage}
                totalPlays={plays.length}
                paginate={paginate}
            />
        </Card>
    )
}

export default RecentPlays;
