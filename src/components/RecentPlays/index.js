import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import PlayCard from '../PlayCard';
import firebase from '../../utils/firebase';
import PlayPagination from '../PlayPagination';
import './style.css';
import Search from '../Search';

function RecentPlays() {
    const [plays, setPlays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [playsPerPage] = useState(5);

    function getPlays() {
        firebase.database().ref("sickplays").orderByChild("Time").limitToLast(50).on('value', snapshot => {
            let items = [];
            snapshot.forEach(snap => {
                items.push(snap.val());
                items.sort(function(a, b) {
                    var keyA = new Date(a.Time),
                        keyB = new Date(b.Time);
                    if (keyA > keyB) return -1;
                    if (keyA < keyB) return 1;
                    return 0;
                  });
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
