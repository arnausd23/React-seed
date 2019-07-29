import React from 'react';
import {useGetPlayer} from "../services/PlayerService";
import {useTranslation} from "react-i18next";


export const PlayerComponent = (props) => {
    const [ t, i18n ] = useTranslation();
    const player1 = useGetPlayer();
    return (
        <>
            <h1 onClick={() => props.onPlayerAdd(player1)}>{t('click_to_dispatch')}</h1>
            <br/>
            <br/>
            <br/>
            { player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
        </>
    );
};
