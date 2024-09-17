document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.querySelectorAll(".quantity-btn.plus");
  const minusButton = document.querySelectorAll(".quantity-btn.minus");

  plusButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
      const input =
        this.closest(".quantity-control").querySelector(".quantity-input");
      let value = parseInt(input.value);
      value++;
      input.value = value;
    });
  });
  minusButton.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
      const input =
        this.closest(".quantity-control").querySelector(".quantity-input");
      let value = parseInt(input.value);
      if (value > 0) {
        value--;
      }
      input.value = value;
    });
  });
});
