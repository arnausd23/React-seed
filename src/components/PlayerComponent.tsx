import React from 'react';
import {useGetPlayer} from "../services/PlayerService";


export const PlayerComponent = (props) => {
    console.log(props.players);
    const player1 = useGetPlayer();

    return (
        <>
            <h1 onClick={() => props.onPlayerAdd(player1)}>CLICK TO DISPATCH</h1>
            <br/>
            <br/>
            <br/>
            { player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
        </>
    );
};
