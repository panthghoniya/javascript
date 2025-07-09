     let cartCount = 0;
      const cartCountSpan = document.getElementById("cartCount");
      const cardContainer = document.getElementById("cardContainer");

      const products = [
        {
          id: 1,
          name: "4K LED TV",
          desc: "Ultra HD smart TV with vibrant display.",
          price: "₹59,999",
          img: "TV",
        },
        {
          id: 2,
          name: "Air Conditioner",
          desc: "Energy-efficient cooling for summer.",
          price: "₹34,999",
          img: "AC",
        },
        {
          id: 3,
          name: "Refrigerator",
          desc: "Double-door fridge with freezer.",
          price: "₹28,499",
          img: "Fridge",
        },
        {
          id: 4,
          name: "Microwave Oven",
          desc: "Quick and even cooking solution.",
          price: "₹9,299",
          img: "Microwave",
        },
        {
          name: "Gaming Console",
          desc: "Next-gen gaming with ultra-fast load.",
          price: "₹49,999",
          img: "Console",
        },
        {
          name: "Tablet Pro 11",
          desc: "Smooth multitasking on a vivid display.",
          price: "₹19,999",
          img: "Tablet",
        },
        {
          name: "Smart LED Bulbs",
          desc: "Control lighting with your phone.",
          price: "₹1,299",
          img: "Bulb",
        },
        {
          name: "Washing Machine",
          desc: "Top-load washing machine with dryer.",
          price: "₹22,999",
          img: "Washer",
        },
        {
          name: "Electric Kettle",
          desc: "Boil water quickly with auto shut-off.",
          price: "₹1,099",
          img: "Kettle",
        },
        {
          name: "Portable Projector",
          desc: "Big-screen experience in your palm.",
          price: "₹11,999",
          img: "Projector",
        },
      ];

      cardContainer.innerHTML = products
        .map(
          (p) => `
      <div class="card" id="${p.id}">
        <div class="image">
          <img src="https://via.placeholder.com/200x200.png?text=${p.img}" alt="${p.name}">
        </div>
        <div class="details">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <p><strong>${p.price}</strong></p>
          <button class="btn" onclick="addToCart(${p.id})">Buy Now</button>
        </div>
      </div>
    `
        )
        .join("");

      function addToCart() {
        cartCount++;
        cartCountSpan.textContent = cartCount;
      }