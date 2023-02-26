import React, {Component} from 'react'

export default class ColorBox extends Component {
    color: string

    constructor(props: any) {
        super(props)
        this.color = this.generateColor()
    }

    generateRandomRGB() {
        return Math.floor(Math.random() * 256)
    }

    generateColor() {
        const r = this.generateRandomRGB()
        const g = this.generateRandomRGB()
        const b = this.generateRandomRGB()
        return `rgb(${r},${g},${b})`
    }

    RGBToHex(rgb: any) {
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

    render(){
        return(
            <div className='bg-[green]' style={{backgroundColor: this.color}}>
                <div className=''>
                    {this.RGBToHex(this.color)}
                </div>
            </div>
        )
    }
}