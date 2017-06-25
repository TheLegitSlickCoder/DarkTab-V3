//Client.js
//Validates URLs.

//validURL(URL)
//Checks if a URL is valid or not.
function Client_validURL(URL) {
      var regex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
  if(!regex .test(URL)) {
    return false;
  } else {
    return true;
  }
}