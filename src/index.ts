import { User } from './models/User';

const user = new User({ name: 'donkim', age: 33 });

user.on('change', () => {
  console.log('aef');
});
user.on('change', () => {
  console.log('ijojiojio');
});
user.on('hi', () => {
  console.log('hihi');
});
user.trigger('change');
user.trigger('hi');
console.log(user);
