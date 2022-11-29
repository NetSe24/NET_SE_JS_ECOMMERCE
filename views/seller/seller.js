let product_container = document.querySelector("#product-container");
let t_shirt_card = document.querySelector("#t-shirt-card");
let main_t_shirt = document.querySelector("#mian-t-shirt");


let dialog = document.querySelector("#dialog");
let button_create = document.querySelector("#create-product");
let custom_input = document.getElementById("choice1");

let btn_delete_edit = document.querySelector("#delete-edit")

let text_input = document.getElementById("title");
let price = document.getElementById("price-product");
let img_fromInput = document.querySelector("#img-product");

let getTbody = document.querySelectorAll("#tbody");
// console.log();

function hide(element) {
    element.style.display = "none";
}
function show(element) {
    element.style.display = "block";
}

function Create() {
    hide(dialog)
    img_fromInput.textContent = text_input.value;
    price.textContent = custom_input.value;
    
    let edit = document.createElement("i");
    edit.className = "material-icons";
    edit.textContent = "edit";
    btn_delete_edit.appendChild(edit)
    
    let trash = document.createElement("i");
    trash.className = "material-icons";
    trash.textContent = "delete";
    btn_delete_edit.appendChild(trash)
    
}

function createTr (){
    if(getTbody.length >=1){
        let tr = document.createElement("tr");
    
        let td_img = document.createElement("td");
        td_img.id = "img-product";
        let price_product = document.createElement("td");
        price_product.id = "price-product";
        let delete_edit = document.createElement("td");
        delete_edit.id = "delete-edit";
        tr.appendChild(td_img)
        tr.appendChild(price_product)
        tr.appendChild(delete_edit)

        getTbody.appendChild(tr)
        Create();
        custom_input.value = "33";
    price.value = "33";
    }

   
}
    
let Cancel = () => {
    hide(dialog);
}

function addProduct() {
    show(dialog)

}
























// //  T-Shirts category ================================

// let div_t_shirt = document.createElement("div");
// div_t_shirt.id = "t-shirts";

// let h2_t_shirt = document.createElement("h2");
// h2_t_shirt.innerHTML = "T-Shirts";
// div_t_shirt.appendChild(h2_t_shirt);

// let main_t_shirt_card = document.createElement("div");
// main_t_shirt_card.id = "main-t-shirt-card";

// t_shirt_card_top = document.createElement("div");
// t_shirt_card_top.id = "t-shirt-card-top";

// main_t_shirt_card.appendChild(t_shirt_card_top)
// div_t_shirt.appendChild(main_t_shirt_card);
// product_container.appendChild(div_t_shirt);

// //  jeans category ===========================

// let div_jean = document.createElement("div");
// div_jean.id = "jeans";

// let h2_jean = document.createElement("h2");
// h2_jean.innerHTML = "Jeans";
// div_jean.appendChild(h2_jean);

// let jean_card = document.createElement("div");
// jean_card.id = "main-jean-card";
// div_jean.appendChild(jean_card);

// product_container.appendChild(div_jean);

// // Skirt category ===========================

// let div_skirt = document.createElement("div");
// div_skirt.id = "skirts";

// let h2_skirt = document.createElement("h2");
// h2_skirt.innerHTML = "Skirts";
// div_skirt.appendChild(h2_skirt);

// let skirt_card = document.createElement("div");
// skirt_card.id = "main-skirt-card";
// div_skirt.appendChild(skirt_card);

// product_container.appendChild(div_skirt);


// // Dresses category ===========================

// let div_dress = document.createElement("div");
// div_dress.id = "dresses";

// let h2_dress = document.createElement("h2");
// h2_dress.innerHTML = "Dresses";
// div_dress.appendChild(h2_dress);

// let dress_card = document.createElement("div");
// dress_card.id = "main-skirt-card";

// div_dress.appendChild(dress_card);

// product_container.appendChild(div_dress);


// console.log(product_container)

