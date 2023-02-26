import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [ name, setName ] = useState('')
  const [ year, setYear ] = useState('')
  const [ locale, setLocale ] = useState('')

  const handleProjectName = (e: any) => {
    setName(e.target.value)
  }

  const handleYear = (e: any) => {
    setYear(e.target.value)
  }

  const handleLocale = (e: any) => {
    setLocale(e.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem('projectName', name)
    localStorage.setItem('year', year)
    localStorage.setItem('location', locale)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto grid sm:cols-span-1 md:cols-span-3 justify-center gap-4 mt-8"
    >
      <label>
        <h2>Project Name</h2>
        <input
          value={name || ''}
          onChange={handleProjectName}
          className="border-4 border-neutral-200"
          type="text"
        />
      </label>
      <label>
        <h2>Year</h2>
        <input
          value={year || ''}
          onChange={handleYear}
          className="border-4 border-neutral-200"
          type="text"
        />
      </label>
      <label>
        <h2>Location</h2>
        <input
          value={locale|| ''}
          onChange={handleLocale}
          className="border-4 border-neutral-200"
          type="text"
        />
      </label>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Start Knitting!"
          className="mt-4 mb-4 border p-4 bg-[#323176] rounded-full hover:bg-pink-800 text-white font-bold"
        />
      </div>
    </form>
  );
}
