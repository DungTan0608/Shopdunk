const products = [
  {
    id: 1,
    name: "iPhone 15 Pro 128 GB",
    image:
      "https://shopdunk.com/images/thumbs/0022263_iphone-15-pro-128gb_240.png",
    price: "27,490,000",
  },
  {
    id: 2,
    name: "iPhone 15 128 GB",
    image: "https://shopdunk.com/images/thumbs/0022255_iphone-15-128gb_240.png",
    price: "21,790,000",
  },
  {
    id: 3,
    name: "iPhone 15 Plus 128 GB",
    image:
      "https://shopdunk.com/images/thumbs/0020318_iphone-15-plus-256gb_240.webp",
    price: "28,490,000",
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max 128 GB",
    image:
      "https://shopdunk.com/images/thumbs/0022266_iphone-15-pro-max-256gb_240.png",
    price: "32,690,000",
  },
];

let productInCart = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

// lưu vào local storage
function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(productInCart));
}

// test 2
function renderProducts() {
  let data = ``;
  products.map((value, index) => {
    data += /*html*/ `
      <div class="col-lg-3 col-md-4 col-6">
        <a href="../product/product.html" onclick="renderProductsItem(${index}); return false;">
          <div class="item-box">
            <div class="product-item">
              <div class="product-tag"></div>
              <div class="product-picture">
                <img src="${value.image}" alt="" />
              </div>
              <div class="product-detail">
                <h3 class="product-title">
                  <a href="">${value.name}</a>
                </h3>
                <div class="add-infor">
                  <span class="price actual-price">${value.price}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      `;
  });
  document.getElementById("products").innerHTML = data;
}
// Hàm renderProductsItem

function renderProductsItem(index) {
  // Tìm sản phẩm trong mảng products dựa trên chỉ mục
  let selectedProduct = products.find((products) => products.id === index + 1);
  // console.log(selectedProduct);
  localStorage.setItem("sanpham", JSON.stringify(selectedProduct));
}
// function showDetail() {
//   // let objectSP = JSON.parse(localStorage.getItem("sanpham"));

//   let dataIt = ``;
//   selectedProduct.map((value) => {
//     dataIt += /*html*/ `
//   <div class="col-lg-6 col-12">
//       <div class="picture">
//         <div class="product-img">
//           <a href="">
//             <img
//               src="${objectSP.image}"
//               alt=""
//             />
//           </a>
//         </div>

//         <div class="product-slick-track">
//           <div class="owl-carousel owl-theme">
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019796_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019797_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019799_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019800_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019801_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019802_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019803_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019804_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//             <div class="item">
//               <img
//                 src="https://shopdunk.com/images/thumbs/0019805_black_550.jpeg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="col-lg-6 col-12">
//       <div class="info-product">
//         <div class="wrap-info">
//           <div class="product-name">
//             <h1>${objectSP.name}</h1>
//           </div>
//           <div class="all-content-rv">
//             <div class="review-product d-flex">
//               <div class="product-review-box">
//                 <div class="rating">
//                   <i class="bi bi-star"></i>
//                   <i class="bi bi-star"></i>
//                   <i class="bi bi-star"></i>
//                   <i class="bi bi-star"></i>
//                   <i class="bi bi-star"></i>
//                 </div>
//               </div>
//               <div class="product-no-review">
//                 <a href="" class="evaluate">Đánh giá</a>
//               </div>
//               <div class="product-notable">
//                 <i class="bi bi-plus-circle-fill"></i>
//                 <span>So sánh</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="price d-flex">
//           <div class="product-price">
//             <span>${objectSP.price}</span>
//           </div>
//           <div class="old-product-price">
//             <span>24.990.000đ</span>
//           </div>
//         </div>

//         <div class="attributes">
//           <label for="">Dung lượng</label>
//           <div class="product-attributes">
//             <ul class="dung-luong d-flex">
//               <li class="phien-ban"><span>128 GB</span></li>
//               <li class="phien-ban"><span>256 GB</span></li>
//               <li class="phien-ban"><span>512 GB</span></li>
//             </ul>
//           </div>
//           <label for="" class="collor"> Màu sắc:</label>
//           <ul class="product-collor d-flex">
//             <li class="color-pr"><div class="black"></div></li>
//             <li class="color-pr"><div class="pink"></div></li>
//             <li class="color-pr"><div class="yellow"></div></li>
//             <li class="color-pr"><div class="green"></div></li>
//             <li class="color-pr"><div class="blue"></div></li>
//           </ul>
//         </div>

//         <div class="short-des" id="shortDes">
//           <p class="title ud"><i class="bi bi-gift"></i> Ưu đãi</p>
//           <div class="short-description position-relative">
//             <p>
//               <span style="color: #e03e2d"
//                 ><strong>I. Ưu đãi thanh toán</strong></span
//               >
//             </p>
//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Giảm tới
//                 <strong>600.000đ</strong> Qua cổng thanh toán
//                 <span style="color: #007edb">(Xem chi tiết)</span></span
//               >
//             </p>
//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Giảm tới
//                 <strong>2.000.000đ</strong> Khi thanh toán qua thẻ tín
//                 dụng
//                 <span style="color: #007edb">(Xem chi tiết)</span></span
//               >
//             </p>
//             <p>
//               <span style="color: #e03e2d"
//                 ><strong>II. Ưu đãi trả góp (1/12 - 31/12)</strong></span
//               >
//             </p>
//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Giảm tới
//                 <strong>600.000đ</strong> Qua cổng thanh toán
//                 <span style="color: #007edb">(Xem chi tiết)</span></span
//               >
//             </p>

//             <p>
//               <span style="color: #e03e2d"
//                 ><strong
//                   >III. Ưu đãi mua kèm iPhone 15 series</strong
//                 ></span
//               >
//             </p>
//             <p>
//               <span
//                 ><img src="../img/best-offer.gif" alt="" /> Mua kèm giảm
//                 sâu sự kiện Apple
//                 <span style="color: #007edb">(Xem chi tiết)</span></span
//               >
//             </p>

//             <p>
//               <span
//                 ><img src="../img/best-offer.gif" alt="" /> Mua kèm giảm
//                 sâu sự kiện Non Apple
//                 <span style="color: #007edb">(Xem chi tiết)</span></span
//               >
//             </p>

//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Giảm 10% Khi mua
//                 bảo hành tiêu chuẩn mở rộng (6 tháng - 12 tháng)
//               </span>
//             </p>

//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Giảm 20% Khi mua
//                 bảo hành kim cương Bảo hành VIP (Rơi vỡ, vào nước)
//               </span>
//             </p>

//             <p>
//               <span style="color: #e03e2d"
//                 ><strong
//                   >IV. Ưu đãi cán bộ công nhân viên Viettinbank,
//                   Vietcombank, VinFast</strong
//                 ></span
//               >
//             </p>

//             <p>
//               <span
//                 ><i class="bi bi-check-circle-fill"></i> Tặng voucher giảm
//                 giá
//                 <strong>500.000đ</strong>
//               </span>
//             </p>
//           </div>
//         </div>

//         <div class="product-button">
//           <div class="add-to-cart">
//             <button class="buy-now" onclick="addToCart(${value.id})">Mua ngay</button>
//           </div>
//           <div class="all-btn-button d-flex">
//             <div class="btn-tra-gop">
//               <button class="tra-gop">Trả góp</button>
//             </div>
//             <div class="btn-thu-cu">
//               <button class="thu-cu">Thu cũ đổi mới</button>
//             </div>
//           </div>
//         </div>

//         <div class="product-policy">
//           <div class="prd-policy">
//             <ul class="elementor-icon-item-list">
//               <li class="element-item">
//                 <i class="bi bi-check-circle-fill"></i>
//                 Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
//                 Type C
//               </li>
//               <li class="element-item">
//                 <i class="bi bi-check-circle-fill"></i>
//                 Bảo hành chính hãng 1 năm
//                 <span style="color: #007edb">
//                   <a href="">(Chi tiết)</a>
//                 </span>
//               </li>
//               <li class="element-item">
//                 <i class="bi bi-check-circle-fill"></i>
//                 Giao hàng nhanh toàn quốc
//                 <span style="color: #007edb">
//                   <a href="">(Chi tiết)</a>
//                 </span>
//               </li>
//               <li class="element-item">
//                 <i class="bi bi-check-circle-fill"></i>
//                 Gọi đặt mua
//                 <span style="color: #007edb">
//                   <a href="">(Chi tiết)</a>
//                 </span>
//                 (8:00 - 22:00)
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
//   });
//   document.getElementById("products-item").innerHTML = dataIt;
// }
// function renderItem(){
//   let prItem = ``

// }

// render san pham ra trang product

// function renderProductsItem(index) {
//   let item = ``;
//   // find
//   products.map((value, id) => {
//   item += /*html*/ `
// <div class="col-lg-6 col-12">
//   <div class="picture">
//     <div class="product-img">
//       <a href="">
//         <img
//           src="${value.image}"
//           alt=""
//         />
//       </a>
//     </div>

//     <div class="product-slick-track">
//       <div class="owl-carousel owl-theme">
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019796_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019797_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019799_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019800_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019801_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019802_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019803_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019804_black_550.jpeg"
//             alt=""
//           />
//         </div>
//         <div class="item">
//           <img
//             src="https://shopdunk.com/images/thumbs/0019805_black_550.jpeg"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="col-lg-6 col-12">
//   <div class="info-product">
//     <div class="wrap-info">
//       <div class="product-name">
//         <h1>${value.name}</h1>
//       </div>
//       <div class="all-content-rv">
//         <div class="review-product d-flex">
//           <div class="product-review-box">
//             <div class="rating">
//               <i class="bi bi-star"></i>
//               <i class="bi bi-star"></i>
//               <i class="bi bi-star"></i>
//               <i class="bi bi-star"></i>
//               <i class="bi bi-star"></i>
//             </div>
//           </div>
//           <div class="product-no-review">
//             <a href="" class="evaluate">Đánh giá</a>
//           </div>
//           <div class="product-notable">
//             <i class="bi bi-plus-circle-fill"></i>
//             <span>So sánh</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="price d-flex">
//       <div class="product-price">
//         <span>${value.price}</span>
//       </div>
//       <div class="old-product-price">
//         <span>24.990.000đ</span>
//       </div>
//     </div>

//     <div class="attributes">
//       <label for="">Dung lượng</label>
//       <div class="product-attributes">
//         <ul class="dung-luong d-flex">
//           <li class="phien-ban"><span>128 GB</span></li>
//           <li class="phien-ban"><span>256 GB</span></li>
//           <li class="phien-ban"><span>512 GB</span></li>
//         </ul>
//       </div>
//       <label for="" class="collor"> Màu sắc:</label>
//       <ul class="product-collor d-flex">
//         <li class="color-pr"><div class="black"></div></li>
//         <li class="color-pr"><div class="pink"></div></li>
//         <li class="color-pr"><div class="yellow"></div></li>
//         <li class="color-pr"><div class="green"></div></li>
//         <li class="color-pr"><div class="blue"></div></li>
//       </ul>
//     </div>

//     <div class="short-des" id="shortDes">
//       <p class="title ud"><i class="bi bi-gift"></i> Ưu đãi</p>
//       <div class="short-description position-relative">
//         <p>
//           <span style="color: #e03e2d"
//             ><strong>I. Ưu đãi thanh toán</strong></span
//           >
//         </p>
//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Giảm tới
//             <strong>600.000đ</strong> Qua cổng thanh toán
//             <span style="color: #007edb">(Xem chi tiết)</span></span
//           >
//         </p>
//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Giảm tới
//             <strong>2.000.000đ</strong> Khi thanh toán qua thẻ tín
//             dụng
//             <span style="color: #007edb">(Xem chi tiết)</span></span
//           >
//         </p>
//         <p>
//           <span style="color: #e03e2d"
//             ><strong>II. Ưu đãi trả góp (1/12 - 31/12)</strong></span
//           >
//         </p>
//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Giảm tới
//             <strong>600.000đ</strong> Qua cổng thanh toán
//             <span style="color: #007edb">(Xem chi tiết)</span></span
//           >
//         </p>

//         <p>
//           <span style="color: #e03e2d"
//             ><strong
//               >III. Ưu đãi mua kèm iPhone 15 series</strong
//             ></span
//           >
//         </p>
//         <p>
//           <span
//             ><img src="../img/best-offer.gif" alt="" /> Mua kèm giảm
//             sâu sự kiện Apple
//             <span style="color: #007edb">(Xem chi tiết)</span></span
//           >
//         </p>

//         <p>
//           <span
//             ><img src="../img/best-offer.gif" alt="" /> Mua kèm giảm
//             sâu sự kiện Non Apple
//             <span style="color: #007edb">(Xem chi tiết)</span></span
//           >
//         </p>

//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Giảm 10% Khi mua
//             bảo hành tiêu chuẩn mở rộng (6 tháng - 12 tháng)
//           </span>
//         </p>

//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Giảm 20% Khi mua
//             bảo hành kim cương Bảo hành VIP (Rơi vỡ, vào nước)
//           </span>
//         </p>

//         <p>
//           <span style="color: #e03e2d"
//             ><strong
//               >IV. Ưu đãi cán bộ công nhân viên Viettinbank,
//               Vietcombank, VinFast</strong
//             ></span
//           >
//         </p>

//         <p>
//           <span
//             ><i class="bi bi-check-circle-fill"></i> Tặng voucher giảm
//             giá
//             <strong>500.000đ</strong>
//           </span>
//         </p>
//       </div>
//     </div>

//     <div class="product-button">
//       <div class="add-to-cart">
//         <button class="buy-now" onclick="addToCart(${value.id})">Mua ngay</button>
//       </div>
//       <div class="all-btn-button d-flex">
//         <div class="btn-tra-gop">
//           <button class="tra-gop">Trả góp</button>
//         </div>
//         <div class="btn-thu-cu">
//           <button class="thu-cu">Thu cũ đổi mới</button>
//         </div>
//       </div>
//     </div>

//     <div class="product-policy">
//       <div class="prd-policy">
//         <ul class="elementor-icon-item-list">
//           <li class="element-item">
//             <i class="bi bi-check-circle-fill"></i>
//             Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
//             Type C
//           </li>
//           <li class="element-item">
//             <i class="bi bi-check-circle-fill"></i>
//             Bảo hành chính hãng 1 năm
//             <span style="color: #007edb">
//               <a href="">(Chi tiết)</a>
//             </span>
//           </li>
//           <li class="element-item">
//             <i class="bi bi-check-circle-fill"></i>
//             Giao hàng nhanh toàn quốc
//             <span style="color: #007edb">
//               <a href="">(Chi tiết)</a>
//             </span>
//           </li>
//           <li class="element-item">
//             <i class="bi bi-check-circle-fill"></i>
//             Gọi đặt mua
//             <span style="color: #007edb">
//               <a href="">(Chi tiết)</a>
//             </span>
//             (8:00 - 22:00)
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
// `;
//   });
//   document.getElementById("products-item").innerHTML = item;
// }

// add to cart

function addToCart(id) {
  // kiểm tra xem trong localstorage có sp chưa
  let checkProduct = productInCart.some((value) => value.id === id);
  if (!checkProduct) {
    let product = products.find((value) => value.id === id);
    productInCart.unshift({
      ...product,
      quantity: 1,
    });
    saveToLocalStorage();
    calculatorTotal();
  } else {
    let product = productInCart.find((value) => value.id === id);
    let getIndex = productInCart.findIndex((value) => value.id === id);
    productInCart[getIndex] = {
      ...product,
      quantity: ++product.quantity,
    };
    saveToLocalStorage();
  }
}

function calculatorTotal() {
  document.getElementById("total").innerHTML = productInCart.length;
}

// in ra gio hang
function renderProductsToTable() {
  let data = ``;
  productInCart.map((value, index) => {
    data += /*html*/ `
    <tr>
        <td class="product-picture">
          <a href=""
            ><img
              src="${value.image}"
              alt=""
          /></a>
        </td>
        <td class="product-name">
          <a href="">${value.name}</a>
          <div class="attributes">Màu sắc: Đen</div>
          <div class="edit-item">
            <a href="">Sửa</a>
          </div>
        </td>
        <td class="unit-price">
          <span class="product-unit-price">${value.price}</span>
        </td>
        <td class="quantity">
          <div class="cart-quantity-input-container">
            <i onclick="minusQuantity(${index}, ${value.quantity})" class="bi bi-dash"></i>
            <input
              type="text"
              value="${value.quantity}"
              class="qty-input"
              aria-label="Số lượng"
            />
            <i onclick="plusQuantity(${index})" class="bi bi-plus"></i>
          </div>
        </td>
        <td class="subtotal d-none"></td>
        <td class="remove-from-cart">
          <button onclick="deleteProductInCart(${index})" class="remove-btn">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });
  document.getElementById("products-cart").innerHTML = data;
}
/**test */

// tong tien
function renderTotalToTable() {
  let sumTotal = ``;
  productInCart.map((value, index) => {
    sumTotal += /*html*/ `
    <tr class="order-subtotal">
      <td class="cart-total-left">
        <label>Tổng phụ:</label>
      </td>
      <td class="cart-total-right">
        <span class="value-summary">${(
          value.quantity * value.price.replace(/,/g, "")
        ).toLocaleString()}₫</span>
      </td>
    </tr>
    `;
  });
  document.getElementById("total-card").innerHTML = sumTotal;
}
// tang so luong
function plusQuantity(index) {
  productInCart[index] = {
    ...productInCart[index],
    quantity: ++productInCart[index].quantity,
  };
  saveToLocalStorage();
  renderProductsToTable();
}
// giarm so luong
function minusQuantity(index, quantity) {
  if (quantity > 1) {
    productInCart[index] = {
      ...productInCart[index],
      quantity: --productInCart[index].quantity,
    };
    saveToLocalStorage();
    renderProductsToTable();
    // totalMoney();
  } else {
    alert("Quantity min is 1");
  }
}
// xoa san pham
function deleteProductInCart(index) {
  productInCart.splice(index, 1);
  saveToLocalStorage();
  renderProductsToTable();
  renderTotalToTable();
  // renderSumTotalToTable();
  // totalMoney();
}

function indexLoadPage() {
  renderProducts();
  calculatorTotal();
  renderProductsItem();
}

function cartLoadPage() {
  renderProductsToTable();
  renderTotalToTable();
  renderProductsItem();
  renderTotalCart();
}

function productLoadPage() {
  renderProductsItem();
  // showDetail();
}
