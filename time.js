const form = document.forms.namedItem('button1');

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;

form.addEventListener (
    'submit',
    (event) =>
    {
      event.preventDefault();
      document.location.href = "books.html";
    }
    );