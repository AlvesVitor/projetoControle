import {URL_BACKEND} from '@env'

function sendKeyboard(action, value) {
  return new Promise((resolver, reject) => {
    fetch(`${URL_BACKEND}/keyboard/${action}`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json"
      },
    })
      .then(async (response) => {
        resolver(response);
        return;

      })
      .catch((err) => {
        console.log("Verifique sua conexão!")
        reject(err)
      });
  });
}
export default { sendKeyboard }