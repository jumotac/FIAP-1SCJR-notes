import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";

interface NoteProps {
  note: Note;
  handleDelete: (id: number) => void;
  handleEdit: (note: Note) => void;
}

function CardNote({ note, handleEdit, handleDelete }: NoteProps) {
  return (
    <>
      <Container>
        <p>{formatDate(new Date(note?.date))}</p>
        <p>{note.text}</p>
        {note.urgent && (
          <span className="material-icons" id="priority">
            priority_high
          </span>
        )}
        <span className="material-icons icon-edit" onClick={() => handleEdit(note)}>
        edit_note
        </span>
         <span className="material-icons" onClick={() => handleDelete(note.id)}>
          {" "}
          delete_forever{" "}
        </span>
      </Container>
    </>
  );
}

export default CardNote;
