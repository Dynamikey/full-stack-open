import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "../requests";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardList, InputGroup } from "@blueprintjs/core";
export const Note = ({ note }) => {
  const queryClient = useQueryClient();

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
  });

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
      <Button onClick={() => toggleImportance(note)}>toggle importance</Button>
    </div>
  );
};

const Notes = ({ notes }) => {
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(["notes"]);
      queryClient.setQueryData(["notes"], notes.concat(newNote));
    },
  });

  const addNote = (event) => {
    console.log("add note");
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({ content, important: true });
  };

  console.log(notes);

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <InputGroup type="text" fill={false} name="note" />
        <Button type="submit">Add</Button>
      </form>
      <CardList bordered={true} compact={true}>
        {notes.map((note) => (
          <Card key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default Notes;
