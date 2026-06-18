const products=[{id:1,name:"Wireless Headphones",price:79.99,cat:"electronics",img:"https://atlasavu.ca/wp-content/uploads/2024/05/Feature_card_1.jpg",desc:"High-quality sound"},{id:2,name:"Smartphone Stand",price:24.99,cat:"electronics",img:"https://via.placeholder.com/180x150/4ECDC4/fff?text=Phone+Stand",desc:"Adjustable stand"},{id:3,name:"USB-C Cable",price:14.99,cat:"electronics",img:"https://via.placeholder.com/180x150/45B7D1/fff?text=USB+Cable",desc:"Fast charging"},{id:4,name:"Portable Charger",price:49.99,cat:"electronics",img:"https://via.placeholder.com/180x150/FFA07A/fff?text=Charger",desc:"20000mAh"},{id:5,name:"Webcam",price:59.99,cat:"electronics",img:"https://via.placeholder.com/180x150/98D8C8/fff?text=Webcam",desc:"1080p video"},{id:6,name:"Keyboard",price:99.99,cat:"electronics",img:"https://via.placeholder.com/180x150/F7DC6F/333?text=Keyboard",desc:"RGB lighting"},{id:7,name:"T-Shirt",price:19.99,cat:"clothing",img:"https://via.placeholder.com/180x150/BB8FCE/fff?text=T-Shirt",desc:"Cotton"},{id:8,name:"Jeans",price:49.99,cat:"clothing",img:"https://via.placeholder.com/180x150/85C1E2/fff?text=Jeans",desc:"Classic fit"},{id:9,name:"Hoodie",price:54.99,cat:"clothing",img:"https://via.placeholder.com/180x150/F8B88B/fff?text=Hoodie",desc:"Warm cozy"},{id:10,name:"Sneakers",price:89.99,cat:"clothing",img:"https://via.placeholder.com/180x150/52BE80/fff?text=Sneakers",desc:"Lightweight"},{id:11,name:"Cap",price:24.99,cat:"clothing",img:"https://via.placeholder.com/180x150/F1948A/fff?text=Cap",desc:"UV protect"},{id:12,name:"Jacket",price:129.99,cat:"clothing",img:"https://via.placeholder.com/180x150/1FB0C2/fff?text=Jacket",desc:"Waterproof"},{id:13,name:"Desk Lamp",price:34.99,cat:"home",img:"https://via.placeholder.com/180x150/F5B041/333?text=Lamp",desc:"USB charging"},{id:14,name:"Coffee Maker",price:89.99,cat:"home",img:"https://via.placeholder.com/180x150/AF7AC5/fff?text=Coffee",desc:"Programmable"},{id:15,name:"Plant Pot",price:19.99,cat:"home",img:"https://via.placeholder.com/180x150/58D68D/fff?text=Plant+Pot",desc:"Ceramic"},{id:16,name:"Wall Clock",price:29.99,cat:"home",img:"https://via.placeholder.com/180x150/85C1E9/fff?text=Clock",desc:"Silent"},{id:17,name:"Pillow",price:24.99,cat:"home",img:"https://via.placeholder.com/180x150/F5CBA7/fff?text=Pillow",desc:"Soft"},{id:18,name:"Rug",price:79.99,cat:"home",img:"https://via.placeholder.com/180x150/AED6F1/fff?text=Rug",desc:"Non-slip"},{id:19,name:"Yoga Mat",price:34.99,cat:"sports",img:"https://via.placeholder.com/180x150/52BE80/fff?text=Yoga+Mat",desc:"Non-slip"},{id:20,name:"Dumbbells",price:59.99,cat:"sports",img:"https://via.placeholder.com/180x150/D35400/fff?text=Dumbbells",desc:"5-25lbs"},{id:21,name:"Running Shoes",price:119.99,cat:"sports",img:"https://via.placeholder.com/180x150/E74C3C/fff?text=Shoes",desc:"Cushioned"},{id:22,name:"Water Bottle",price:19.99,cat:"sports",img:"https://via.placeholder.com/180x150/3498DB/fff?text=Bottle",desc:"32oz"},{id:23,name:"Bands",price:29.99,cat:"sports",img:"https://via.placeholder.com/180x150/9B59B6/fff?text=Bands",desc:"5 levels"},{id:24,name:"Gym Bag",price:44.99,cat:"sports",img:"https://via.placeholder.com/180x150/E67E22/fff?text=Gym+Bag",desc:"Large"}];let cart=[],filter="all";function displayProducts(p){document.getElementById('productsGrid').innerHTML=p.map(x=>`<div class="product-card"><img src="${x.img}" alt="${x.name}" class="product-image"><h3>${x.name}</h3><p class="product-description">${x.desc}</p><div class="product-footer"><span class="price">$${x.price}</span><button class="add-btn" onclick="addCart(${x.id})">Add</button></div></div>`).join('')}function filterByCategory(c){filter=c;displayProducts(c==='all'?products:products.filter(x=>x.cat===c));document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));event.target.classList.add('active')}function addCart(id){const p=products.find(x=>x.id===id);const e=cart.find(x=>x.id===id);if(e)e.qty++;else cart.push({...p,qty:1});updateCart();alert(p.name+' added!')}function removeCart(id){cart=cart.filter(x=>x.id!==id);updateCart()}function updateCart(){document.getElementById('cartCount').textContent=cart.reduce((s,x)=>s+x.qty,0);const c=document.getElementById('cartItems');c.innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><b>${x.name}</b> - $${x.price}<div class="cart-item-controls"><button onclick="updateQty(${x.id},-1)">-</button><input type="number" value="${x.qty}" onchange="updateQty(${x.id},this.value-0)"><button onclick="updateQty(${x.id},1)">+</button><button class="remove-btn" onclick="removeCart(${x.id})">Remove</button></div></div>`).join(''):'<p style="color:#999;text-align:center">Empty</p>';const s=cart.reduce((a,x)=>a+x.price*x.qty,0);const t=s*0.1;document.getElementById('subtotal').textContent=s.toFixed(2);document.getElementById('tax').textContent=t.toFixed(2);document.getElementById('total').textContent=(s+t).toFixed(2);document.getElementById('summarySubtotal').textContent=s.toFixed(2);document.getElementById('summaryTax').textContent=t.toFixed(2);document.getElementById('summaryTotal').textContent=(s+t+10).toFixed(2);document.getElementById('orderItems').innerHTML=cart.map(x=>`<div class="order-item"><span>${x.name} x${x.qty}</span><span>$${(x.price*x.qty).toFixed(2)}</span></div>`).join('')}function updateQty(id,delta){const e=cart.find(x=>x.id===id);if(e){e.qty=Math.max(1,typeof delta==='number'?delta:e.qty+delta);updateCart()}}function toggleCart(){document.getElementById('cartSidebar').classList.toggle('active')}function goToCheckout(){if(!cart.length){alert('Empty!');return}toggleCart();showPage('checkout')}function backToShop(){showPage('shop')}function showPage(p){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById(p+'Page').classList.add('active')}function placeOrder(){const f=['fullName','email','address','city','zip','country','cardNumber'];if(!f.every(x=>document.getElementById(x).value)){alert('Fill all fields');return}const s=cart.reduce((a,x)=>a+x.price*x.qty,0);const t=s*0.1;alert(`Order #${Math.floor(Math.random()*1e6)}\nTotal: $${(s+t+10).toFixed(2)}\nThank you!`);cart=[];updateCart();f.forEach(x=>document.getElementById(x).value='');backToShop()}displayProducts(products);


 let ccNum = document.getElementById('c-number');
 if(num.length<16){
  ccNum.style.border="1px solid red";
 }else{
  ccNum.style.border="1px solid greenyellow";
 }
});


let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){


 let newInput = eDate.value;


 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }


 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});


let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){


 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.border="1px solid red";
 }else{
  cvvBox.style.border="1px solid greenyellow";
 }
})
