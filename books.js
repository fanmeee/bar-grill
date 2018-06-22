const form = document.forms.namedItem('button1');

form.addEventListener (
    'submit',
    (event) =>
    {
      event.preventDefault();
      document.location.href = "table.html";
    }
    );