import {connect} from 'react-redux'

import {Player} from "../models/Player";
import {addPlayer} from "../store/actions/actions";

import {getPlayers} from "../store/selectors/selector";
import {PlayerComponent} from "../components";
import React from "react";


const mapStateToProps = state => {
    return {
        players: getPlayers(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlayerAdd: (player: Player) => {
            dispatch(addPlayer(player))
        }
    }
};

export const PlayerContainer: React.FC<string> = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerComponent);
