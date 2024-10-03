export default function getFullResponseFromAPI(success) {
  if (typeof success === 'boolean') {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'succes' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
