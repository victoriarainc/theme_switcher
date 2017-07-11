let body = document.getElementsByTagName( "body" )[ 0 ];

// // ==============================
// // ========== Kittens ===========
// // ==============================
// let kitten_button = document.querySelector("kitten_button");
// function switchToKittenTheme(){
//     body.id = "kittens";
//
// kitten_button.addEventListener( "click", switchToKittenTheme );
//
// // ==============================
// // ========== Tokyo =============
// // ==============================
// let tokyo_button = document.querySelector("tokyo_button");
// function switchToTokyoTheme(){
//   body.id = "tokyo";
// }
// tokyo_button.addEventListener( "click", switchToTokyoTheme);
//
//
// // ==============================
// // ========== Metal =============
// // ==============================
// let metal_button = document.querySelector("metal_button");
// function switchToMetalTheme(){
//   body.id = "metal";
// }
// metal_button.addEventListener( "click", switchToMetalTheme);

// ==============================
// ========== Let ===========
// ==============================
let kitten_button = document.querySelector("#kitten_button");
let tokyo_button = document.querySelector("#tokyo_button");
let metal_button = document.querySelector("#metal_button");

// ==============================
// ========== Fucntion ==========
// ==============================
function switchToKittenTheme(){
    body.id = "kittens";
}
function switchToTokyoTheme(){
  body.id = "tokyo";
}
function switchToMetalTheme(){
  body.id = "metal";
}

// ==============================
// ========== Event =============
// ==============================
kitten_button.addEventListener( "click", switchToKittenTheme );
tokyo_button.addEventListener( "click", switchToTokyoTheme);
metal_button.addEventListener( "click", switchToMetalTheme);
