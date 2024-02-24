import React from 'react'
import { delet, edit } from '../../redux/reducer/todo';
import { useDispatch } from 'react-redux';
import { Form } from '../form/form';

export const Card = ({taskname, taskDate, id}) => {
  const [shou, setShou] = React.useState(false);
  const [name, setName] = React.useState(taskname);
  const [date, setDate] = React.useState(taskDate);
  const dispatch = useDispatch();

  const deletItem = ()=> {
    dispatch(delet({id}))
  }

  const editItem = ()=> {

  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(edit({taskname:name, taskDate:date, id}))
    setShou(false)
  }


  return (
    <div className="bg-sky-950 text-center mt-3 py-6">
      {shou ? (
        <form
          className="form-control flex justify-center items-center gap-6"
          onSubmit={submit}
        >
          <input
            className="px-7 py-2 bg-teal-200 rounded-xl"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
          />
          <input
            className="px-7 py-2 bg-teal-200 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
        </form>
      ) : (
        <>
          <h2 className="text-white text-[44px]">{taskname}</h2>
          <h3 className="text-red-50 text-[28px]">
            Tug'ilgan sanasi: {taskDate}
          </h3>
        </>
      )}
      {!shou && (
        <>
          <div className="flex gap-8 justify-center">
            <button
              onClick={deletItem}
              className="py-2 bg-red-400 w-40 rounded-xl"
            >
              Delet
            </button>
            <button
              onClick={() => setShou(true)}
              className="py-2 bg-green-400 w-40 rounded-xl"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
