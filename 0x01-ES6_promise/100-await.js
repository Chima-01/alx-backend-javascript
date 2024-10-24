import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [uploadPhoto(), createUser()];

  try {
    return { photo: await promises[0], user: await promises[1] };
  } catch (error) {
    return { photo: null, user: null };
  }
}
