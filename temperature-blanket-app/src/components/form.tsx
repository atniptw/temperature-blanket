import React from 'react'

export default function Form() {
    return (
        <form className="m-auto grid sm:cols-span-1 md:cols-span-3 justify-center gap-4 mt-8">
            <label>
                <h2>Project Name</h2>
                <input className="border-4 border-neutral-200" type="text"/>
            </label>
            <label>
                <h2>Year</h2>
                <input className="border-4 border-neutral-200" type="text"/>
            </label>
            <label>
                <h2>Location</h2>
                <input className="border-4 border-neutral-200" type="text"/>
            </label>
        </form>
    )
}