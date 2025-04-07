//=========================================================
//                   Cars data
//=========================================================
var cars = [
    {
      name: "Mercedes AMG A35",
      image:
        "https://i.pinimg.com/736x/61/e8/e9/61e8e9af3b4d666ed72f7c08bfc3f9e4.jpg",
      description:
        "A compact powerhouse with 302 horsepower, sharp handling, and AMG styling, perfect for urban driving and spirited escapes.",
    },
    {
      name: "Mercedes AMG C63",
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-mercedes-amg-c-63-s-coupe-2019-rt-hero-front.jpg",
      description:
        "The AMG C63 delivers thrilling performance with a 4.0L V8 engine, producing 469 horsepower. Its aggressive design and unmatched power make it a true sports sedan.",
    },
    {
      name: "Mercedes AMG C43",
      image:
        "https://www.motortrend.com/uploads/2022/06/002-2023-Mercedes-AMG-C43-First-Drive.jpg",
      description:
        "A blend of performance and practicality, the AMG C43 Estate features a 3.0L V6 engine with 385 horsepower, offering both speed and ample cargo space.",
    },
    {
      name: "Mercedes AMG GLC 43 SUV",
      image:
        "https://www.motortrend.com/uploads/sites/5/2020/06/2020-Mercedes-AMG-GLC-43-34.jpg",
      description:
        "The AMG GLC 43 SUV combines luxury with performance, featuring a 3.0L V6 engine producing 385 horsepower, perfect for both dynamic driving and everyday versatility.",
    },
    {
      name: "Mercedes AMG GLC 43 Coupe",
      image:
        "https://cargiant.co.in/uploads/car/511366586789.jpeg",
      description:
        "The AMG GLC 43 Coupe offers a powerful 3.0L V6 engine with 385 horsepower, blending aggressive styling with high-performance handling for an exhilarating driving experience.",
    },
    {
      name: "Mercedes AMG GLS 63",
      image:
        "https://cdn.motor1.com/images/mgl/P668r/s1/mercedes-amg-gls-63-2020.jpg",
      description:
        "The AMG GLS 63 is a luxury SUV with a 4.0L V8 engine delivering 603 horsepower, offering unmatched power, space, and refinement for those who demand the best.",
    },
    {
      name: "Mercedes AMG ONE",
      image:
        "https://www.topgear.com/sites/default/files/2022/08/1-Mercedes-AMG-One.jpg",
      description:
        "The AMG ONE is a hypercar that brings Formula 1 technology to the road, featuring a 1.6L turbo V6 hybrid enginewith 1,063 horsepower for unparalleled speed and innovation.",
    },
    {
      name: "Mercedes AMG GT 63 S",
      image:
        "https://www.turbo.fr/sites/default/files/2023-03/Mercedes-AMG%20GT%2063S%20Coup%C3%A9%204%20portes%20pr%C3%A9par%C3%A9e_0.jpg",
      description:
        "The AMG GT 63 S features a 4.0L twin-turbo V8 engine producing 630 horsepower, delivering extraordinary performance, precision, and luxury in a sleek, coupe-style design.",
    },
  ];
  
  //=========================================================
  //             Get data from Local storage
  //=========================================================
  var cartString = window.localStorage.getItem("cart") || "[]";
  var cart = JSON.parse(cartString);
  
  //=========================================================
  //               Add to cart function
  //=========================================================
  var addToCart = function (i) {
    var car = cars[i];
    cart.push(car);
    var convert = JSON.stringify(cart);
    window.localStorage.setItem("cart", convert);
    // redirect
    window.location.href = "cart.html";
  };
  
  //=========================================================
  //           Add cards Dynamically
  //=========================================================
  for (i = 0; i < cars.length; i++) {
    $(".cards").append(`<div class="card">
          
      <div class="card-content">
          <img class="carImg" src="${cars[i].image}">
          <h4 class="car-name">${cars[i].name}</h4>
          <p class="car-disc">${cars[i].description}</p>
          <div class="car-Buttons">
          <button type="button" class="car-toCart" onclick="addToCart(${i})">Add To Cart</button>
      </div>
      </div>
      </div>`);
  }
  
  //=========================================================
  //                    Navigation
  //=========================================================
  $(".logo").click(function () {
    window.location.href = "home.html";
  });
  
  //=========================================================
  //                    Search
  //=========================================================
  $(".searchBar").keydown(function () {
    var input = $(".searchBar").val().toLowerCase();
    var name = $(".car-name");
  
    name.each(function (index, element) {
      var carNameText = $(element).text().toLowerCase();
  
      if (carNameText.includes(input)) {
        $(element).closest(".card").show();
      } else {
        $(element).closest(".card").hide();
      }
    });
  });