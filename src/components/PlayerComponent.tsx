import React from 'react';
import {useGetPlayer} from "../services/PlayerService";
import {useTranslation} from "react-i18next";


export const PlayerComponent = (props) => {
    const [t, i18n] = useTranslation();
    const player1 = useGetPlayer();

    return (
        <>
            <br/>
            <button onClick={() => props.onPlayerAdd(player1)}>{t('click_to_dispatch')}</button>
            <br/>
            {props.players.map((player, index) =>
                <div key={`${player.id}-${index}`}>
                    <br/>
                    {player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : {player1[key]}</div>)}
                </div>
            )}
        </>
    );
};
