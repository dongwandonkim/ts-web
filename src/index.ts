import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'dondon', age: 12 });

const user = new User({ name: 'test kim', age: 33 });

console.log(user.get('name'));
