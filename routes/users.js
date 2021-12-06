const axios = require('axios').default;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log(req.query);

  // obtain the users from an API call
  axios.get('http://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      console.log(response.data);

      let users = response.data
        .filter(user => {
          if (req.query.userName) {
            return user.name.includes(req.query.userName);
          }
          return true;
        }).filter(user => {
          if (req.query.cities) {
            return req.query.cities.includes(user.address.city);

          }
          return true;
        });

        console.log(users);

      let cities = response.data.map(user => user.address.city);

      res.render('users', { title: 'Users', users: users, cities: cities });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

module.exports = router;
