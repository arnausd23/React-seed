import React from 'react';

import { useCreatePlayer, useGetPlayer } from "./services/PlayerService";


const App: React.FC = () => {
    const player1 = useGetPlayer();


    return (
        <div>
            Test
            { player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
        </div>
    );
};

export default App;
