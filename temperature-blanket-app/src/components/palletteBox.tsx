import { Cipher } from "crypto";
import React from "react";
import ColorBox from "./colorBox";

interface props {
    colorCount: number
}

export default function PalletteBox({colorCount}: props) {
    return (
        <div className="flex m-auto">
            {[...Array(colorCount)].map(() => {
                return <ColorBox/>
            })}
        </div>
    )
}