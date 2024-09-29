const formRef = document.querySelector(".order-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`)
  );

  e.currentTarget.reset();
}
