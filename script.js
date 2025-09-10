console.log("Script loaded");
document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
  console.log(website.value, username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({
      username: website.value,
      username: username.value,
      password: password.value,
    });
    alert("Password added successfully!");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    json.push({ username: username.value, password: password.value });
    alert("Password added successfully!");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});

/*document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          if (confirm("Are you sure you want to delete this password?")) {
            this.closest("tr").style.opacity = "0";
            setTimeout(() => {
              this.closest("tr").remove();
            }, 300);
          }
        });
      });

      // Form submission
      document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Password added successfully! (This is a demo)");
        this.reset();
      });*/
