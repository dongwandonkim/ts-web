import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'dondon', age: 12 });

// const user = new User({ name: 'kimkim', age: 99 });

// console.log(user.get('name'));

// user.on('save', () => {
//   console.log(user);
// });

// user.save();

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});
user.fetch();
