// const express = require('express');
import express from 'express';
import {Videos} from './models/index.js';
const app = express();
const port = process.env.PORT || 3003;


app.use(express.json());


app.get('/videos', async (req, res) => {
  try {
    const videos = await Videos.findAll();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
