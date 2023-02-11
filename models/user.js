const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    minlength: 4
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s]+$/
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/
    },
    geo: {
      lat: {
        type: String,
        required: true
      },
      lng: {
        type: String,
        required: true
      }
    }
  },

  website: {
    type: String,
    required: true,
    match: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  },

  phone: {
    type: String,
    required: true,
    match: /^\d{1}-\d{3}-\d{3}-\d{4}$/
  },
  company:{
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    }
  }


});

const User = mongoose.model('User', userSchema);

module.exports = User