const UserModel = require ('../models/user.model'); // appel de userModel


module.exports.signUp = async (req, res) => {
    const {pseudo, email, password} = req.body; //Lors du signUp ds 1 1ier tps on ne dde que pseudo...

    try {
        const user = await UserModel.create({pseudo, email, password});
        res.status(201).json({user: user._id}) //si reponse ok renvoi l'id...
    }
    catch(err) {
        res.status(200).send({ err }) //si erreur renvoi l'erreur
    }
}