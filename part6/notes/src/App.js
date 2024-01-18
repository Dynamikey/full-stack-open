import { useQuery } from "@tanstack/react-query";
import { getNotes } from "./requests";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
  useMatch,
} from "react-router-dom";
import Notes, { Note } from "./components/Notes";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import { useState } from "react";
import { Alignment, Navbar } from "@blueprintjs/core";
const App = () => {
  const [user, setUser] = useState(null);

  const padding = {
    padding: 5,
  };

  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    refetchOnWindowFocus: false,
  });

  console.log(JSON.parse(JSON.stringify(result)));

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const notes = result.data;

  const note = notes[0];
  // const match = useMatch("/notes/:id");

  // const note = match
  //   ? notes.find((note) => note.id === Number(match.params.id))
  //   : null;

  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>My first app</Navbar.Heading>
          <Navbar.Divider />

          <Link style={padding} to="/">
            home
          </Link>
          <Link style={padding} to="/notes">
            notes
          </Link>
          <Link style={padding} to="/users">
            users
          </Link>
          {user ? (
            <em>{user} logged in</em>
          ) : (
            <Link style={padding} to="/login">
              login
            </Link>
          )}
        </Navbar.Group>
      </Navbar>
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={(user) => setUser(user)} />}
        />
      </Routes>
      <footer>
        <br />
        <em>Note app. Made with love by Michael Zhao</em>
      </footer>
    </div>
  );
};

export default App;
