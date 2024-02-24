import React from 'react'

export const Form = () => {
    const [name, setName] = React.useState();
    const [date, setDate] = React.useState();
    const submit = (e) => {
        e
    }

  return (
    <form onSubmit={submit}>
        <input value={name} onChange={(e) => setName(e.target.value) } type="date" name="date" id="date" />
        <input value={date} onChange={(e) => setDate(e.target.value) } type="text" name="name" id="name" />
    </form>
  )
}
