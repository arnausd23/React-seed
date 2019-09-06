import React from 'react';
import {useGetPlayer} from "../services/PlayerService";
import {useTranslation} from "react-i18next";

import './PlayerComponent.scss';
import {Player} from "../models/Player";

export const PlayerComponent = (props) => {
    const [t] = useTranslation();
    const player1 = useGetPlayer();
    const {players} = props;

    return (
        <>
            <button onClick={() => props.onPlayerAdd(player1)}>{t('click_to_dispatch')}</button>
            {players.map((player: Player, key: string) => (
                <section key={key}>
                    {props.players.map((player, index) =>
                        <div className="player-container" key={`${player.id}-${index}`}>
                            <img className="player-container__image" src={require('../../../assets/images/Morty.png')} alt='Morty' width={'100px'}/>
                            <div className="player-container__text-container">
                                {Object.keys(player).map((key: string) => <p key={key}><strong>{key}:</strong> {player[key]}</p>)}
                            </div>
                        </div>
                    )}
                </section>
            ))}
        </>
    );
};
