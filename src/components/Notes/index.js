// Write your code here
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import {Heading} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, UseTitle] = useState('')
  const [notes, UseNotes] = useState('')
  const [newNote, UseNewNote] = useState([])

  const onSubmitForm = event => {
    event.preventDefault()
    const creatingNewNote = {
      id: uuid(),
      title,
      notes,
    }
    UseNewNote(prevState => [...prevState, creatingNewNote])
    UseTitle('')
    UseNotes('')
  }
  console.log(newNote)

  const onChangeTitle = event => UseTitle(event.target.value)

  const onChangeTextArea = event => UseNotes(event.target.value)

  const renderEmptyView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <h1>No Notes Yet</h1>
      <p>Notes you add will appear here</p>
    </div>
  )

  return (
    <div>
      <Heading>Notes</Heading>
      <div>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <textarea
            placeholder="Take a Note..."
            value={notes}
            onChange={onChangeTextArea}
          />
          <button type="submit">Add </button>
        </form>
      </div>
      {newNote.length === 0 ? (
        renderEmptyView()
      ) : (
        <ul>
          {newNote.map(each => (
            <NoteItem key={each.id} notesDetails={each} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Notes
