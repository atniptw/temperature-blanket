import React from "react";
import ColorBox from "./colorBox";

interface props {
    colorCount: number
}

function randomKey(){
    return '_' + Math.random().toString(36).substring(2,9)
}

export default function PalletteBox({colorCount}: props) {
    return (
        <div className="rounded-lg m-auto grid sm:grid-cols-1 md:grid-cols-5">
            {[...Array(colorCount)].map(() => {
                return <ColorBox key={randomKey()}/>
            })}
        </div>
    )
}