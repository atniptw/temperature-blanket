import React, { useState } from "react";
import PalletteBox from "./palletteBox";

export default function Pallette() {
    const [render, setRender] = useState(0)

    const handleNewPalette = () => {
        let newRender = render
        setRender(++newRender)
    }

    return (
        <div className="m-10 text-center">
            <h1 className="text-lg font-bold">Generate Your Color Palette</h1>
            <PalletteBox colorCount={10}/>
            <button className="mt-4 border p-4 bg-pink-500 rounded-full hover:bg-pink-800 text-white font-bold" onClick={handleNewPalette}>Generate a new random palette</button>
        </div>
    )
}