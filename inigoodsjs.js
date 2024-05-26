$(document).ready(function () {
    alert("Tap the user icon to login or create account")
    var buybtn1 = $("#buy1");
    var buybtn2 = $("#buy2");
    var buybtn3 = $("#buy3");
    var buybtn4 = $("#buy4");
    var buybtn5 = $("#buy5");
    var buybtn6 = $("#buy6");
    var buybtn7 = $("#buy7");
    var buybtn8 = $("#buy8");
    var buybtn9 = $("#buy9");
    var buybtn10 = $("#buy10");
    var buybtn11 = $("#buy11");
    var buybtn12 = $("#buy12");
    

    var cart = [];
    var count = 0;
    
    buybtn1.click(function () {
       cart.push("1"); 
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="woodcoasteryellow.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Wood Coaster Dekiru Neko wa Kyou mo Yuuutsu Yukichi (Cooking)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 82.000</a><br>
            
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
        // rmv1 = $("#rmv1").click(function () {
            //   hapus isi kotakApp
            //   yang dihapus inner html nya
        //     keranjang.remove();
        //   });
      });
    buybtn2.click(function () {
       cart.push("2");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="woodcoasterblue.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Wood Coaster Dekiru Neko wa Kyou mo Yuuutsu Yukichi (Cleaning)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 82.000</a><br>
             
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
        rmv2 = $("#rmv2").click(function () {
            //   hapus isi kotakApp
            //   yang dihapus inner html nya
            keranjang.remove();
          });
      });
    buybtn3.click(function () {
       cart.push("3");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="sakuyuki2keychain.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Acrylic Keychain "Dekiru Neko wa Kyou mo Yuuutsu" 01/Saku & Yukichi (Released)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 105.000</a><br>
             
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn4.click(function () {
       cart.push("4");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="yukichikeychain.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Acrylic Keychain "Dekiru Neko wa Kyou mo Yuuutsu" 02/ Yukichi (Released)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 105.000</a><br>
            
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn5.click(function () {
       cart.push("5");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="tinbadge03.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Tin Badge Dekiru Neko wa Kyou mo Yuuutsu Yukichi (Knitting)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 51.000</a><br>
              
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn6.click(function () {
       cart.push("6");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="tinbadge02.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Tin Badge Dekiru Neko wa Kyou mo Yuuutsu Yukichi (Saku Plush)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 51.000</a><br>
            
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn7.click(function () {
       cart.push("7");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="yellowleathernotebook.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Leather Sticky Notes Book "Dekiru Neko wa Kyou mo Yuuutsu" 01/Yellow(Released)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 47.000</a><br>
            
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn8.click(function () {
       cart.push("8");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="blueleathernotebook.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Leather Sticky Notes Book "Dekiru Neko wa Kyou mo Yuuutsu" 01/Blue(Released)</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 47.000</a><br>
             
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn9.click(function () {
       cart.push("9");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="charapass.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Chara Pass "Dekiru Neko wa Kyou mo Yuuutsu" 01/In-a-row Design</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 132.000</a><br>
             
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn10.click(function () {
       cart.push("10");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="hairclip.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Trading Hair Clip Dekiru Neko wa Kyou mo Yuuutsu 5 Item Set</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 304.000</a><br>
             
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn11.click(function () {
       cart.push("11");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="ministand.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Trading Mini Stand Dekiru Neko wa Kyou mo Yuuutsu 5Pack BOX</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 227.000</a><br>
              
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    buybtn12.click(function () {
       cart.push("12");
       updateCartCount();
       var keranjang = document.querySelector("#inikeranjang");
       let isi="";
        isi = `

        <div class="card mb-3" style="max-width: 1300px;">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="badge01.jpg" class="img-fluid rounded-start" alt="..." style = "width : 100px; height : 100px;">
          </div>
          <div class="col-md-11">
            <div class="card-body">
              <h5 class="card-title">Tin Badge 2pcs Set "Dekiru Neko wa Kyou mo Yuuutsu" 01/Saku & Yukichi</h5>
              <a class="card-text fs-3" style = "text-decoration: none; color : rgb(255, 136, 0);">Rp 96.000</a><br>
              
            </div>
          </div>
        </div>
      </div>
        `
        $(keranjang).append(isi); 
      });
    //   count = cart.length;
    //   if (cart.length >= 1) {
    //     let container = document.querySelector("#circle");
    //     let isi="";
    //     isi = `
    //     <div id = "circle" style = "border: 1 px solid red; background-color: red; border-radius : 100%; width : 15px; height : 15px; margin-bottom : 35px; margin-left : -30px; color :white; line-height : 30px;">${count}</div>
    //         `
    //     $(container).append(isi);
    //   }
      

    $("#checkout").click(function () {
        cart.length = 0;
        updateCartCount();
        $("#inikeranjang").empty();
       
    });
    
    $("#remove").click(function () {
        cart.length = 0;
        updateCartCount();
        $("#inikeranjang").empty();
        
    });
   

    function updateCartCount() {
        var count = cart.length;
        var totalPrice = calculateTotalPrice();
        if (count >= 1) {
            // $("#circle").text(count);
            let container = document.querySelector("#circle");
        container.innerHTML =`
        <div id = "circle" style = "border: 1 px solid red; background-color: red; border-radius : 100%; width : 15px; height : 15px; color :white; margin-top : -5px; text-align : center; display: flex; justify-content: center; align-items: center; margin-left : -30px; margin-top : -25px;">${count}</div>
            `;
        
        } else {

        }
        $('#totalPrice').text('Total Price : ' +'Rp ' + totalPrice.toLocaleString());
    //     var keranjang = document.querySelector("#inikeranjang");
    //    let isi="";
    //     isi = `

    //           <button class="btn btn-success mt-2" id = "checkout" name = "checkout">Check out</button>
    //           <button class="btn btn-danger mt-2" id = "remove" name = "remove">Remove</button>
       
    //     `
    //     $(keranjang).append(isi); 
        
    }

    function calculateTotalPrice() {
        var totalPrice = 0;
        for (var i = 0; i < cart.length; i++) {
            // Tambahkan harga setiap item ke total harga
            switch (cart[i]) {
                case '1':
                    totalPrice += 82000;
                    break;
                case '2':
                    totalPrice += 82000;
                    break;
                case '3':
                    totalPrice += 105000;
                    break;
                case '4':
                    totalPrice += 105000;
                    break;
                case '5':
                    totalPrice += 51000;
                    break;
                case '6':
                    totalPrice += 51000;
                    break;
                case '7':
                    totalPrice += 47000;
                    break;
                case '8':
                    totalPrice += 47000;
                    break;
                case '9':
                    totalPrice += 132000;
                    break;
                case '10':
                    totalPrice += 304000;
                    break;
                case '11':
                    totalPrice += 227000;
                    break;
                case '12':
                    totalPrice += 96000;
                    break;
                default:
                    break;
            }
        }
        return totalPrice;
    }

});