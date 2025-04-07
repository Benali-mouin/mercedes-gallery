$(".logo").click(function () {
    window.location.href = "home.html";
  });
  
  var cartString = window.localStorage.getItem("cart") || "[]";
  var cartArray = window.JSON.parse(cartString);
  
  for (i = 0; i < cartArray.length; i++) {
    $(".cards").append( `<div class="card">
          <img class="carImg" src="${cartArray[i].image}">
          <h4 class="car-name">${cartArray[i].name}</h4>
          <p class="car-disc">${cartArray[i].description}</p>
      </div>` );
  }
  
  
  $(".clear").click(function () {
    window.localStorage.removeItem("cart");
    window.location.reload()
  });
  