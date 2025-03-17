const express = require('express');
const axios = require('axios'); // Reikalingas Python API užklausoms siųsti

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Leisti dirbti su JSON duomenimis

// Pagrindinis puslapis
app.get('/', (req, res) => {
  res.send('Stovyklavietės rezervacijos sistema');
});

// Užsakymo kūrimas
app.post('/book', async (req, res) => {
  const { username, days } = req.body;

  try {
    // Siųsti užsakymo duomenis į Python API
    const response = await axios.post('https://your-python-api-url/book', {
      username,
      days,
    });

    // Atsakymas iš Python API
    res.json({ message: `Užsakymas atliktas sėkmingai ${username} už ${days} dienų` });
  } catch (error) {
    console.error('Klaida siunčiant užsakymą:', error);
    res.status(500).json({ message: 'Įvyko klaida apdorojant užsakymą' });
  }
});

app.listen(port, () => {
  console.log(`Serveris veikia ant ${port}`);
});
