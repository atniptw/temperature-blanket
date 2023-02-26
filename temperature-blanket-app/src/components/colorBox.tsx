import React, {useState} from 'react'

function generateRandomRGB() {
    return Math.floor(Math.random() * 256)
}

function generateColor() {
    const r = generateRandomRGB()
    const g = generateRandomRGB()
    const b = generateRandomRGB()
    return `rgb(${r},${g},${b})`
}

function RGBToHex(rgb: any) {
    const seperator = rgb.indexOf(",") > -1 ? "," : ""
    const newRGB = rgb.substr(4).split(")")[0].split(seperator)
    let r = (+newRGB[0]).toString(16)
    let g = (+newRGB[1]).toString(16)
    let b = (+newRGB[2]).toString(16)

    if(r.length === 1) r = "0" + r
    if(g.length === 1) r = "0" + g
    if(b.length === 1) r = "0" + b

    return `#${r}${g}${b}`.toUpperCase()
}

// handleBoxClick() {
//     this.setState({color: this.generateColor()})
// }

export default function ColorBox() {
    const [color, setColor] = useState(generateColor())

    const handleBoxClick = () => {
        setColor(generateColor())
    }

    return(
        <div className='bg-[green]' style={{backgroundColor: color}} onClick={handleBoxClick}>
            <div className=''>
                {RGBToHex(color)}
            </div>
        </div>
    )
}