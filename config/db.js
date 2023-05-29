const mongoose = require('mongoose');

exports.Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.isw7r4w.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      dbName: 'crud_db',
    }); // old parse is depreciated

    console.log('db connected succesfully');
  } catch (error) {
    console.log('db error', error);
  }
};
