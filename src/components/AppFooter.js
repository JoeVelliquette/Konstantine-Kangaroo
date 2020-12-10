import React from 'react';
import {playerOpt} from "../util/Constants";
import YouTube from "react-youtube";

function AppFooter() {
    return (
        <div>
            A Joe Velli & Pat Moody Production
            <YouTube videoId="Z0ajuTaHBtM" opts={playerOpt} />
        </div>
    );
}

export default AppFooter;
