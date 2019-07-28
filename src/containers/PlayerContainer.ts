import {connect} from 'react-redux'

import {Player} from "../models/Player";
import {addPlayer} from "../store/actions/actions";

import {PlayerComponent} from "../components/PlayerComponent";
import {getPlayers} from "../store/selectors/selector";


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

const PlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerComponent);

export default PlayerContainer;