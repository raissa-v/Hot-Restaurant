module.exports = (app) => {
    app.get('/api/customers', (req, res) => {
        return res.json(customers);
    });

    app.post('/api/characters', (req, res) => {
        let newCustomer = req.body;
        newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();
        console.log(newCustomer);
        customers.push(newCustomer);
        res.json(newCustomer);
    });
}