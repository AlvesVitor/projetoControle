
function sendKeyboard(action, value) {
  return new Promise((resolver, reject) => {
    fetch(`http://192.168.0.106:8080/keyboard/${action}`, {
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