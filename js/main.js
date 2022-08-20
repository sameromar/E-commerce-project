
// start header js
$(".responsive-header").click(function () {
  $(".layer").css("display", "block");
  $(".sideBarHeader").animate({ left: 0 }, 500);
});
$(".closeBtn").click(function () {
  $(".layer").css("display", "none");
  $(".sideBarHeader").animate({ left: `-350px` }, 500);
});
$(".wishlistItem").click(function(){
  $(".layer").css("display", "block");
  $("#wishList").animate({ right: 0 }, 500);
})
$(".close").click(function () {
  $(".layer").css("display", "none");
  $("#wishList").animate({ right: `-350px` }, 500);
});
$(".bi-bag").click(function(){
  $(".layer").css("display", "block");
  $("#shoppingCart").animate({ right: 0 }, 500);
})
$(".close").click(function () {
  $(".layer").css("display", "none");
  $("#shoppingCart").animate({ right: `-350px` }, 500);
});
$("#navWishlist").click(function(){
  $("#wishList").animate({ right: 0 }, 500);
  $(".layer").css("display", "block");
  $(".sideBarHeader").animate({ left: `-350px` }, 500);
})
  // end header js
  // start homepage js
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
let $owlCarousel = $('#owl-old');
$owlCarousel.owlCarousel({
  loop: false,
  nav: true,
  dots:false,
  responsive: {
    0: {
      items: 1,
    }
  }
});
let sleepTimeOut = 5000;
let transitionSpeedTime = 500;
let direction = 'next';
let owlTimer;

moveToNextSlide(transitionSpeedTime, sleepTimeOut);

$owlCarousel.on('translated.owl.carousel', function () {
  moveToNextSlide(transitionSpeedTime, sleepTimeOut);
});

$owlCarousel.on('mouseover', function () {
  window.clearTimeout(owlTimer);
});

$owlCarousel.on('mouseout', function () {
  moveToNextSlide(transitionSpeedTime, sleepTimeOut);
});

function moveToNextSlide(autoplayTimeout, autoplaySpeed) {

  window.clearTimeout(owlTimer);
  owlTimer = window.setTimeout(function () {

    setSlideDirection();

    $owlCarousel.trigger(direction + '.owl.carousel', [autoplayTimeout]);
  }, autoplaySpeed);
}

function setSlideDirection() {

  // Change the direction the next slide when in first slide.
  if ($(' .owl-stage > .owl-item').first().is('.active')) {
    direction = 'next';
  }

  // Change the direction the previous slide when in last slide.
  if ($('#owl-old .owl-stage > .owl-item').last().is('.active')) {
    direction = 'prev';
  }
}
  // end hompage js
  // start products js
  
  $(".owl-new").owlCarousel({
    loop:true,
    margin:2,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        610:{
          items:2
        },
        768:{
          items:3
        },
        1000:{
          items:4
        },
        1025:{
          items:5
        }
    }
})
  $(function () {
    $(".products nav ul li").on("click", function () {
        
        // Get The ID Of a When I Clicked
        var myID = $(this).attr("id");
        
        // Remove Class Inactive When I clicked And Add It In Siblings In Ul
        $(this).addClass("inactive").siblings().removeClass("inactive");
        
        // Hide The Div When i Clicked
        $(".products .container .insideTabs ").hide();
        
        // When Clicked In Li Get Div Same ID
        
        $("#" + myID + "-content").fadeIn(1000);
    });
});
  // end products js
  //start topselling
  $("#topSelling").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        610:{
          items:2
        },
        768:{
          items:3
        },
        1024:{
          items:5
        },
        2000:{
          items:6
        }
    }
})
  //end top selling
  // start blogSec
  $("#blogSec").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        768:{
          items:2
        },
        1024:{
          items:3
        },
        1200:{
          items:5
        }
    }
})
  //end blogSec
  // start scroller
  $(".scroller").click(function(){
    $("html, body").animate({ scrollTop:`0` }, 800);
  })
  window.onscroll= function(){
    if(scrollY >= 400){
      $(".scroller").css("visibility","visible")
    }
    else{
      $(".scroller").css("visibility","hidden")
    }
  }
  // end scroller
  // add to cart and favorite
  $(".card-body a").addClass("addtocart")
  let imgCard=document.querySelectorAll(".card img");
  let heading=document.querySelectorAll(".card .card-body h5");
  let price=document.querySelectorAll(".card .card-body .afterDis");
  let addToCartbtn=document.querySelectorAll(".addtocart");
  let shoppingM=document.querySelector(".shopping-cart")
  let shopcrtbody=shoppingM.children[1];
  let countNumber=document.querySelector("header .cart");
  let totalPrice=document.querySelector('.cartFooter .bill span');
  let spentMoney=document.querySelector(".spendMoney");
  let spentVal;
  let newprice=0;
  let counterCart=0;
  let pricVal=0;
  let productContainer;
  if(localStorage.getItem("products")===null){
    productContainer=[];
    shopcrtbody.style.display='flex';
}
else {
    shopcrtbody.style.display='none';
    productContainer=JSON.parse(localStorage.getItem("products"))
    showInCart();
}
if(window.localStorage.getItem("cartCount")===null){
    countNumber.innerHTML=0;
    counterCart=0;
}
else{
  countNumber.innerHTML=window.localStorage.getItem("cartCount");
  counterCart=parseInt(window.localStorage.getItem("cartCount"));
}
if(window.localStorage.getItem("totalvalue")===null){
console.log(newprice)
}
else{
  totalPrice.innerHTML=window.localStorage.getItem("totalvalue");
  newprice=parseInt(window.localStorage.getItem("totalvalue"));
  window.localStorage.setItem("totalvalue",newprice);
}
if(window.localStorage.getItem("spendingval")===null){
  spentMoney.innerHTML=500;
}
else{
  spentVal=window.localStorage.getItem("spendingval");
  spentMoney.innerHTML=spentVal;
  window.localStorage.setItem("spendingval",spentVal);
}
  for(let i=0; i<addToCartbtn.length ;i++){
    addToCartbtn[i].addEventListener("click",function(){
      shopcrtbody.style.display='none';
      var product={
        picture: imgCard[i].currentSrc,
        headTitle:heading[i].innerText,
        productPrice:price[i].innerText,
      };
        counterCart++;
        countNumber.innerHTML=counterCart;
        window.localStorage.setItem("cartCount",counterCart);
      productContainer.push(product);
      localStorage.setItem("products",JSON.stringify(productContainer));
      showInCart(); 
      newprice+=parseInt(price[i].children[0].innerHTML.slice(1));
      totalPrice.innerHTML=newprice;
      window.localStorage.setItem("totalvalue",newprice);
      spentVal=500-(newprice);
      spentMoney.innerHTML=spentVal;
      window.localStorage.setItem("spendingval",spentVal);
    })
  }
  if(counterCart===0){
    shopcrtbody.style.display='flex';
  }
  function showInCart(){
    let productDiv="";
    for(let i=0 ; i< productContainer.length ;i++){
      productDiv+=`
      <div class="newshow">
      <div class="imagenew">
      <img src=${productContainer[i].picture} alt="">
      </div>
      <h5>${productContainer[i].headTitle}</h5>
      <span>${productContainer[i].productPrice}</span>
      <button type="button" onclick="deleteItem(${i})"><i class="fa-solid fa-xmark removeBtn"></i></button>
      </div>
      `;
    }   
    
    document.getElementById("cartlist").innerHTML=productDiv;
  }
  function deleteItem(i){
      productContainer.splice(i,1);
      localStorage.setItem("products",JSON.stringify(productContainer));
      if(counterCart>0){
        counterCart--;
      countNumber.innerHTML=counterCart;
      window.localStorage.setItem("cartCount",counterCart);
      }
      else{
        counterCart=0;
        countNumber.innerHTML=0;
        window.localStorage.setItem("cartCount",counterCart);
      }
     
      showInCart();
      if(counterCart===0){
        shopcrtbody.style.display='flex';
      }
      if(newprice>0){
        newprice-=parseInt(price[i].children[0].innerHTML.slice(1));
        totalPrice.innerHTML=newprice;
        window.localStorage.setItem("totalvalue",newprice);
        spentVal=500-(newprice);
      spentMoney.innerHTML=spentVal;
      window.localStorage.setItem("spendingval",spentVal);
      }
      else{
        newprice=0;
        totalPrice.innerHTML=0.00;
        window.localStorage.setItem("totalvalue",newprice);
      }
     
  }
 
  const anchr = document.querySelectorAll('.card .icons a');
for (const a of anchr) {
  a.classList.add(
    'eye',
    'stack',
    'favorite'
  );
}
let countheart=0;
if(window.localStorage.getItem("heartNum")){
  $("header .heart").text(window.localStorage.getItem("heartNum"));
}
  $(".favorite").click(function(){
    countheart++;
    window.localStorage.setItem("heartNum",countheart);
    $("header .heart").text(countheart);
  })
// loading
$(window).on('load', function(){
  $('#loading').delay(5000).fadeOut('slow', function(){
      $('body').css("overflow","auto");
  });       
});
$(document).ready(function(){
  $("#loadtab1").fadeOut(5000)
}
)
$("#tab2").click(function(){
  $("#loadtab2").fadeOut(5000)
  $("#loadtab1").fadeIn()
  $("#loadtab3").fadeIn()
  $("#loadtab4").fadeIn()
})
$("#tab3").click(function(){
  $("#loadtab3").fadeOut(5000)
  $("#loadtab1").fadeIn()
  $("#loadtab2").fadeIn()
  $("#loadtab4").fadeIn()
})
$("#tab4").click(function(){
  $("#loadtab4").fadeOut(5000)
  $("#loadtab1").fadeIn()
  $("#loadtab3").fadeIn()
  $("#loadtab2").fadeIn()
})
$("#tab1").click(function(){
  $("#loadtab1").fadeOut(5000)
  $("#loadtab2").fadeIn()
  $("#loadtab3").fadeIn()
  $("#loadtab4").fadeIn()
})
// loaditems


