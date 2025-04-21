const books = [
  { id: 1, title: "ASSIGNMENT BOOK", author: "Author A", price: 30 },
  { id: 2, title: "RECORD BOOK", author: "Author B", price: 60 },
  { id: 3, title: "NOTE BOOK", author: "Author C", price: 50 }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>Price: ₹${book.price}</p>
    <button onclick="buyNow(${book.id})">Buy Now</button>
  `;
  bookList.appendChild(div);
});

function buyNow(bookId) {
  const book = books.find(b => b.id === bookId);
  var options = {
    "key": "rzp_test_1b9mrSciCMWtJX", 
    "amount": book.price , 
    "currency": "INR",
    "name": "My Bookstore",
    "description": `Buy ${book.title}`,
    "handler": function (response){
      alert("Payment successful! ID: " + response.razorpay_payment_id);
    },
    "prefill": {
      "name": "",
      "email": ""
    },
    "theme": {
      "color": "#ba68ed"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}
