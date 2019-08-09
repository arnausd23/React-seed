import React from 'react';
import {useGetPlayer} from "../services/PlayerService";
import {useTranslation} from "react-i18next";

import './PlayerComponent.scss';

export const PlayerComponent = (props) => {
    const [t, i18n] = useTranslation();
    const player1 = useGetPlayer();

    return (
        <>
            <button onClick={() => props.onPlayerAdd(player1)}>{t('click_to_dispatch')}</button>
            {props.players.map((player, index) =>
                <div className="player-container" key={`${player.id}-${index}`}>
                    {player1 && Object.keys(player1).map((key: string) => <p key={key}><strong>{key}:</strong> {player1[key]}</p>)}
                </div>
            )}
        </>
    );
};
