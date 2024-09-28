import express from 'express'
import UserSchema from './schema/user.schema.js'
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/testdb')

const app = express()
app.listen(8000)



app.get('/user', async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.json(200).json(users);

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

app.get('/user/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const user = await UserSchema.findById(id);
        res.json(200).json(user);

    } catch (err) {
        res.status(400).json({
            message: err.message

        });
    }


})



app.post('/user', async (req, res) => {
    try {


        const user = new UserSchema({
            name: "karan",
            email: "karan@gmail.com",
            password: "karan123",
            mobile: 8888888,
            status: "active",
            adhar: 232323,
            panno: "axklsl"
        })

        await user.save()
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


app.put('/user/:id', (req, res) => {
    try {

        const id = req.params.id;
        const user = UserSchema.findByIdAndUpdate(id, { mobile: 234567 }, { new: true })

        if (!user)
            return res.status(404).json({
                message: 'Failed to update product with id value because id is not available'
            })

        res.status(200).json(user)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }

})




app.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserSchema.findByIdAndDelete(id)

        if (!user)
            return res.status(404).json({
                message: 'Failed to delete the user because user is not available with id value'
            })

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})