```javascript
const form = document.getElementById("surveyForm");

const genderOther = document.getElementById("genderOther");
const charCount = document.getElementById("charCount");
const message = document.getElementById("message");

// Đếm số ký tự
genderOther.addEventListener("input", function () {
    charCount.textContent = this.value.length;
});

// Khi nhấn Submit
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const income = document.getElementById("income").value;

    // Kiểm tra tuổi và thu nhập
    if (age === "" || income === "") {
        message.textContent = "Please complete the required fields.";
        message.className = "error";
        return;
    }

    // Kiểm tra sản phẩm
    const products = document.querySelectorAll(
        'input[name="product"]:checked'
    );

    if (products.length === 0) {
        message.textContent =
            "Please select at least one product.";
        message.className = "error";
        return;
    }

    // Thông báo gửi thành công
    message.textContent =
        "Thank you! Your survey has been submitted successfully.";

    message.className = "success";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

// Khi nhấn Reset
form.addEventListener("reset", function () {
    setTimeout(function () {
        charCount.textContent = "0";
        message.textContent = "";
        message.className = "";
    }, 10);
});
```
