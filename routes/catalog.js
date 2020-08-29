var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    const catalog=[
        {id:1, name:'Sansumg J7', price:500.00},
        {id:2, name:'Nokia 23', price:300.00},
        {id:3, name:'Huawei P30', price:580.00},
        {id:4, name:'Iphone 6S', price:1500.00},
    ];

    response.send(catalog);
  });

  module.exports = router;