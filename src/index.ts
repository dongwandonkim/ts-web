import axios from 'axios';
import { User } from './models/User';

// axios.post('http://localhost:3000/users', { name: 'dondon', age: 12 });

const user = new User({ id: 1 });
user.set({ name: 'donkim' });
user.save();
