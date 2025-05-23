function copyEmail() {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  }