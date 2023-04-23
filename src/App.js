import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import BookDetail from "./component/Book/BookDetail";
import Books from "./component/Book/Books";
import Login from "./pages/SignIN";
import Register from "./pages/Register";
import { useAuthContext } from "./hooks/useAuthContext";
import SignInForm from "./component/SignINForm";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <main>
       
        <Routes>
        <Route
            path="/"
            element={<SignInForm/>} />
          <Route path="/books" element={user ? <Books /> : <Navigate to="/SignIn" />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />

       

          <Route
            path="/SignIn"
            element={!user ? <Login /> : <Navigate to="/books" />}
          ></Route>
          <Route
            path="/Register"
            element={!user ? <Register /> : <Navigate to="/SignIn" />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
