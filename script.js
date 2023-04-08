const data=[
    {
        id: 1,
        name: "Vest Belt",
        img: "https://m.media-amazon.com/images/I/41-eKlMTqgL._SX450_.jpg",
        amt: 200,
        seller: "Pet Shop",
        category: "Belt"
    },
    {
        id: 2,
        name: "Water-Proof Belt",
        img: "https://m.media-amazon.com/images/I/41m8q4KAPVS._SY300_SX300_QL70_FMwebp_.jpg",
        amt:650,
        seller: "Pet Corner",
        category: "Belt"
    },
    {
        id: 3,
        name: "Out-door vest Belt",
        img: "https://m.media-amazon.com/images/I/514jtLIMTSL._SX450_.jpg",
        amt:540,
        seller: "Pet Care",
        category: "Belt"
    },
    {
        id: 5,
        name: "Adjustable Belt",
        img: "https://m.media-amazon.com/images/I/51cI7qFIJnL._SY300_SX300_QL70_FMwebp_.jpg",
        amt:120,
        seller: "Pet Shop",
        category: "Neck Belt"
    },
    {
        id: 5,
        name: "Free-size Belt",
        img: "https://m.media-amazon.com/images/I/61KD7rgvpRL._SX450_.jpg",
        amt:150,
        seller: "Pet Corner",
        category: "Neck Belt"
    },
    {
        id: 6,
        name: "Free-size Belt",
        img: "https://m.media-amazon.com/images/I/517nuxweGDL._SY300_SX300_QL70_FMwebp_.jpg",
        amt:140,
        seller: "Pet Garden",
        category: "Neck Belt"
    },
    {
        id: 7,
        name: "Fibre Rope",
        img: "https://m.media-amazon.com/images/I/513U+mfKj7L._SX466_.jpg",
        amt:500,
        seller: "F1 Pet Mart",
        category: "Rope"
    },
    {
        id: 8,
        name: "Nylon Rope",
        img: "https://m.media-amazon.com/images/I/417tgYB2yiL._SY300_SX300_QL70_FMwebp_.jpg",
        amt: 320,
        seller: "Pet Care",
        category: "Rope"
    },
    {
        id: 9,
        name: "Leather Rope",
        img: "https://m.media-amazon.com/images/I/81LeJMx5DbL._SX450_.jpg",
        amt:250,
        seller: "Pet Friend",
        category: "Rope"
    },
    {
        id: 10,
        name: "Adult dog food",
        img: "https://cdn.shopify.com/s/files/1/0617/4454/6042/products/PedigreeChicken_VegetablesAdultDryDogFood_510x_2x_510x_2x_362ea8ea-f6f6-466a-9685-b408a5c3aae6_669x669.jpg?v=1642547217",
        amt:210,
        seller: "Pet corner",
        category: "Dry Food"
    },
    {
        id: 11,
        name: "Fixed Size",
        img: "https://m.media-amazon.com/images/I/51agUspafUL._SY300_SX300_QL70_FMwebp_.jpg",
        amt: 160,
        seller: "Pet corner",
        category: "Mask"
    },
    {
        id: 12,
        name: "Free Size",
        img: "https://m.media-amazon.com/images/I/61yHyVscTIL._SY450_.jpg",
        amt: 180,
        seller: "Pet corner",
        category: "Mask"
    },

    

    

];
const productContainer=document.querySelector(".products");
const categoryList=document.querySelector(".category-list");

function displayProducts(products){
    if(products.length>0){
    const product_details=products.map((product)=>`
    <div class="product">
    <div class="img">
        <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="product-details">
        <span class="name">${product.name}</span>
        <span class="amt">Rs. ${product.amt}</span>
        <span class="seller">${product.seller}</span>
    </div>
</div>
    `).join("");
    productContainer.innerHTML=product_details;
}
else{
    productContainer.innerHTML="<h3>No Products Available</h3>";
}
}
displayProducts(data);

function setCategories(){
    const allcategories=data.map((product)=>product.category);
    const categories=["All", ...allcategories.filter((product,index)=>{
        return allcategories.indexOf(product)===index;
    })];
    categoryList.innerHTML=categories.map((category)=>`<li>${category}</li>`).join("");

    categoryList.addEventListener("click",(e)=>{
        const selectCategory=e.target.textContent;
        selectCategory==="All"?displayProducts(data):displayProducts(data.filter((product)=>product.category==selectCategory));

    });
}

const priceRange=document.querySelector("#priceRange");
const priceValue=document.querySelector(".priceValue");
function setPrices(){
    const priceList=data.map((product)=>product.amt);
    const minPrice=Math.min(...priceList);
    const maxPrice=Math.max(...priceList);
    priceRange.min=minPrice;
    priceRange.max=maxPrice;
    priceValue.textContent="Rs."+maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent="Rs."+e.target.value;
        displayProducts(data.filter((product)=>product.amt<=e.target.value));

    });
}


const txtSearch=document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup",(e)=>{
    const value=e.target.value.toLowerCase().trim();
    if(value){
        displayProducts(data.filter((product)=>product.name.toLowerCase().indexOf(value)!=-1));


    }else{
        displayProducts(data);
    }
})

displayProducts(data);
setCategories();
setPrices();