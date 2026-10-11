// ==========================================
// CASE 1: User Data Cleaner
// String & Array Interop
// ==========================================

const rawInput = "  riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap  ";

// Membersihkan whitespace di awal dan akhir
const cleanedInput = rawInput.trim();

// Mengubah string menjadi array nama
const names = cleanedInput.split(",");

// Mengubah setiap nama menjadi lowercase dan membersihkan spasi
const formattedNames = names.map(name => name.trim().toLowerCase());

// Menggabungkan nama menggunakan separator
const result = formattedNames.join(" | ");

console.log("=== CASE 1: User Data Cleaner ===");
console.log(`Hasil: ${result}`);


// ==========================================
// CASE 2: E-Commerce Product Filter
// Array of Objects
// ==========================================

const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// Menyaring produk yang aktif
const activeProducts = products.filter(product => product.active === true);

// Mengambil nama produk aktif
const activeProductNames = activeProducts.map(product => product.name);

// Menghitung total harga produk aktif
const totalPrice = activeProducts.reduce(
    (total, product) => total + product.price,
    0
);

// Membuat salinan array menggunakan spread operator
const copiedActiveProducts = [...activeProducts];

console.log("\n=== CASE 2: E-Commerce Product Filter ===");
console.log(`Produk aktif:`, copiedActiveProducts);
console.log(`Nama produk aktif:`, activeProductNames);
console.log(`Total harga produk aktif: ${totalPrice}`);
