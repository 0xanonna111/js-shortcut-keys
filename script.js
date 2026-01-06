const action = document.getElementById("action");

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    action.innerText = "Save shortcut triggered!";
  }

  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    action.innerText = "Clear shortcut triggered!";
  }

  if (e.ctrlKey && e.key === "h") {
    e.preventDefault();
    action.innerText = "Help shortcut triggered!";
  }
});
