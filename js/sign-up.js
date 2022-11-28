const logo = document.getElementById("logo");
const displayLogo = document.getElementById("displayLogo");

logo.onchange = () => {
    const [file] = logo.files
    if (file) {
        displayLogo.src = URL.createObjectURL(file)
    }
  }