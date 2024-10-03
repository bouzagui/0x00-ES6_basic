export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('foo');
    reject(new Error('bar'));
  });
}
