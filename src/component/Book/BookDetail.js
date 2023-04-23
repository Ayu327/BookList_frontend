import {
    Box,
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const BookDetail = () => {
    const [inputs, setInputs] = useState({
      title: "",
      author: "",
      description: "",
      image: "",
    });
  
    const { id } = useParams();
    const history = useNavigate();
  
    useEffect(() => {
      const fetchBook = async () => {
        const res = await axios.get(`/books/${id}`);
        setInputs(res.data.book);
      };
      fetchBook();
    }, [id]);
  
    const updateBook = async () => {
      await axios.patch(`/books/${id}`, {
        title: inputs.title,
        author: inputs.author,
        description: inputs.description,
        image: inputs.image,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateBook().then(() => history("/books"));
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            maxWidth={700}
            alignSelf="center"
            marginLeft="auto"
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel>Title</FormLabel>
            <TextField
              value={inputs.title}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="title"
            />
  
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
  
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
  
            <FormLabel>Image URL</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
  
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      </div>
    );
  };
  
  export default BookDetail;
  