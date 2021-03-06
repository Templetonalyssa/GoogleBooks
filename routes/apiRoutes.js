const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&key=AIzaSyCmiS44Ve_xk80wGTI14rcJ-y07DEua23Q`)
    .then(results => res.json(results.data.items))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
