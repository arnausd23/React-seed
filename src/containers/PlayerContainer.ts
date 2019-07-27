import {connect} from 'react-redux'

import {Player} from "../models/Player";
import {addPlayer} from "../store/actions/actions";

import {PlayerComponent} from "../components/PlayerComponent";


const mapStateToProps = state => {
    return {
        player: state.player
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlayerAdd: (player: Player) => {
            dispatch(addPlayer(player))
        }
    }
};

const PlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerComponent);

export default PlayerContainer;