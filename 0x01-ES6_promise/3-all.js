import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [body, firstName, lastName] = [results[0].body,
        results[1].firstName, results[1].lastName];
      console.log(`${body} ${firstName} ${lastName}`);
    }, (() => console.error('Signup system offline')));
}
