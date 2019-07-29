import React from 'react';

import PlayerContainer from "./containers/PlayerContainer";
import {CustomToast} from "./toast";

const App: React.FC = () => {
    return (
        <>

            <CustomToast/>
            <PlayerContainer/>
        </>
    );
};

export default App;
