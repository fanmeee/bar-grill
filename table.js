const form1 = document.forms.namedItem('button1');

form1.addEventListener (
    'submit',
    (event) =>
    {
      event.preventDefault();
      document.location.href = "time.html";
    }
    );