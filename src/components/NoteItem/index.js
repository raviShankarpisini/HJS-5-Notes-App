// Write your code here
const NoteItem = props => {
  const {notesDetails} = props
  const {title, notes} = notesDetails
  return (
    <li>
      <h1>{title}</h1>
      <p>{notes}</p>
    </li>
  )
}

export default NoteItem
