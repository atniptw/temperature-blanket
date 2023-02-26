import { Cipher } from "crypto";
import React from "react";
import ColorBox from "./colorBox";

interface props {
    colorCount: number
}

export default function PalletteBox({colorCount}: props) {
    return (
        <div className="m-auto grid sm:grid-cols-1 md:grid-cols-5">
            {[...Array(colorCount)].map(() => {
                return <ColorBox/>
            })}
        </div>
    )
}