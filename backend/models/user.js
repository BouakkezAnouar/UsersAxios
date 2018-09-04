const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true, minlength: 3, maxlength: 255 },
  email: { type: string, required: true, minlength: 8, maxlength: 255 },
  telephone: { type: string, minlength: 8, maxlength: 8 }
});

const User = mongoose.model("User", userSchema);

User.createUser = async function(nom, email, telephone) {
  const user = new User({
    nom,
    email,
    telephone
  });

  await user.save();
  return user;
};

User.modifyUser = async function(id, nom, email, telephone) {
  let user = await User.findById(id);

  user.nom = nom;
  user.email = email;
  user.telephone = telephone;

  const result = await user.save();
  return result;
};

User.deleteUser = async function(id) {
  return await User.findByIdAndRemove(id);
};

User.getUsers = async function() {
  return await User.find();
};

User.validateUser = function(User) {
  const Schema = {
    nom: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(8)
      .max(255)
      .required()
      .email(),
    telephone: Joi.string()
      .min(8)
      .max(8)
      .required()
  };

  return Joi.validate(User, Schema);
};

module.exports = User;
