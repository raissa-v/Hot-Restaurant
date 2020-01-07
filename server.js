
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


var customers = [
    {
        customerName: "Neil",
        phoneNumber: "6506536000",
        customerEmail: "neil.hammerle@marriott-sanmateo.com",
        customerID: "Neil"
    }
];
 
  app.get("/api/customers/:customers", function(req, res) {
    var chosen = req.params.customers;
  
    console.log(chosen);
  
    for (var i = 0; i < customers.length; i++) {
      if (chosen === customers[i].customerName) {
        return res.json(customers[i]);
      }
    }
  
    return res.json(false);
  });
  

  app.post("/api/customers", function(req, res) {
    var newCustomer = req.body;
  
    newCustomer.customerName = newCustomer.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCustomer);
  
    customers.push(newCustomer);
  
    res.json(newCustomer);
  });

app.listen(PORT, () => {
    console.log(`Currently listening on port: ${PORT}`);
});
