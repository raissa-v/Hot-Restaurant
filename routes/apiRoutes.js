let customers = [{
    routeName: 'meep',
    name: 'meep',
    phoneNumber: '1234567890',
    email: 'tes@yes.com',
    uniqueId: 'meepp'
}];




module.exports = (app) => {
    app.get('/api/customers', (req, res) => {
        return res.json(customers);
    });

    app.post('/api/customers', (req, res) => {
        let newCustomer = req.body;
        newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();
        console.log(newCustomer);
        customers.push(newCustomer);
        res.json(newCustomer);
    });
}