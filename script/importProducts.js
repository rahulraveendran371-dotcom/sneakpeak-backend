const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [

    {
      "name": "all-pro-nitro mens sneakers newly launched",
      "price": 6199,
      "image": "https://www.superkicks.in/cdn/shop/files/1-2025-11-25T114717.373.png?v=1768547785&width=1946",
      "category": "men",
      "isActive": true,
      "id": "1"
    },
    {
      "name": "PLATINUM VIOLET/SAIL-GUM DARK BROWN",
      "price": 6799,
      "image": "https://www.superkicks.in/cdn/shop/files/4_93_579162fa-2779-494f-a475-4a5602bf1b14.jpg?v=1753185906&width=1946",
      "category": "men",
      "isActive": true,
      "id": "2"
    },
    {
      "id": "3",
      "name": "trendy&stylish Converse sneakers for men",
      "price": 899,
      "image": "https://www.superkicks.in/cdn/shop/files/1_374d80fe-d6c7-4182-9b5c-de499c5a5ae4.png?v=1764759666&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "4",
      "name": "Chuck leopard print mens sneakers trending",
      "price": 5999,
      "image": "https://www.superkicks.in/cdn/shop/files/1_79f89de8-5a28-45a2-86ec-442f6bc2cea1.jpg?v=1752562796&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "5",
      "name": "Oggy sneaker for men",
      "price": 3999,
      "image": "https://www.superkicks.in/cdn/shop/files/3-2025-08-05T172230.178.jpg?v=1754395195&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "6",
      "name": "trendy Runstar women sneakers",
      "price": 1499,
      "image": "https://www.superkicks.in/cdn/shop/files/1_1f08b2eb-b1a2-4901-a5ac-10573d8c1276.jpg?v=1752563539&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "7",
      "name": "women elegant sneakers Pink",
      "price": 2299,
      "image": "https://www.superkicks.in/cdn/shop/files/1_f3a2c618-6f7e-44ac-94db-5dd5865e252e.jpg?v=1747639548&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "8",
      "name": "velcro mens lays sneakers",
      "price": 999,
      "image": "https://www.superkicks.in/cdn/shop/files/1_fec20db7-8817-41e0-a2e5-4d1c211fe53e.png?v=1761394081&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "9",
      "name": "Puma Red Men sneakers",
      "price": 3099,
      "image": "https://www.superkicks.in/cdn/shop/files/1_5dfee5fb-b0e9-43c3-86c6-0d9ffac4e433.jpg?v=1725957115&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "10",
      "name": "Black air force men formal sneakers",
      "price": 1799,
      "image": "https://www.superkicks.in/cdn/shop/files/ECOMS-2023_58b8f0c3-46de-4e95-b115-460bebc72923.jpg?v=1688474261&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "11",
      "name": "X represent all-time Pro Nitro-2",
      "price": 1199,
      "image": "https://www.superkicks.in/cdn/shop/files/2-2026-01-19T145838.936.png?v=1768815102&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "12",
      "name": "Nike coffee brown vintage sneakers",
      "price": 2099,
      "image": "https://www.superkicks.in/cdn/shop/files/6_c4a2dc6a-4a22-4d0e-8795-d54406c119c5.png?v=1767967579&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "13",
      "name": "Jordan air trendy sneakers men",
      "price": 1499,
      "image": "https://www.superkicks.in/cdn/shop/files/3-2025-08-05T172230.178.jpg?v=1754395195&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "14",
      "name": "2002-R New balance trendy sneaaker",
      "price": 3299,
      "image": "https://www.superkicks.in/cdn/shop/files/1_3b0c2e88-1020-4afb-a21c-71b135b3daf9.png?v=1758270403&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "15",
      "name": "Pink sporty boot for men",
      "price": 1599,
      "image": "https://www.superkicks.in/cdn/shop/files/5_28.png?v=1754565465&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "16",
      "name": "Vintage Cargo sneakers for men",
      "price": 1699,
      "image": "https://www.superkicks.in/cdn/shop/files/1_602b1e15-1e9f-4ab5-abe2-70cbbf1a9ce6.png?v=1764759130&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "name": "new my one produ",
      "price": 2333,
      "image": "https://www.superkicks.in/cdn/shop/files/6-2026-01-15T184800.445.png?v=1768483130&width=1946",
      "category": "men",
      "isActive": true,
      "id": "17"
    },
    {
      "id": "18",
      "name": "L-D 7000 Women sneakers",
      "price": 2699,
      "image": "https://www.superkicks.in/cdn/shop/files/4_0ade8985-77fa-437b-ae56-5bc3d505b0b1.png?v=1758179598&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "19",
      "name": "Dunk Low trendy women sneaker",
      "price": 1999,
      "image": "https://www.superkicks.in/cdn/shop/files/4_06ccb774-9d55-453b-afc0-d1ae485544fd.png?v=1767967627&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "20",
      "name": "Tokyo Red sneakers ",
      "price": 1399,
      "image": "https://www.superkicks.in/cdn/shop/files/1-2025-10-06T185218.032.png?v=1759757200&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "21",
      "name": "Air Bubble Max Purple sneakers",
      "price": 1899,
      "image": "https://www.superkicks.in/cdn/shop/files/4_5a58e11f-7a1c-4559-8e20-181388b82bb6.png?v=1768332756&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "22",
      "name": "SL 72 addidas Og ",
      "price": 2399,
      "image": "https://www.superkicks.in/cdn/shop/files/7_f5307ac7-8b63-4731-b026-9ee218e28bee.png?v=1764161841&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "23",
      "name": "Leberon trendy girl sneaker",
      "price": 1599,
      "image": "https://www.superkicks.in/cdn/shop/files/4-2026-01-14T005944.724.png?v=1768332896&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "24",
      "name": "Air superfly white sneaker",
      "price": 1699,
      "image": "https://www.superkicks.in/cdn/shop/files/4-2025-11-11T163010.979.png?v=1762858836&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "ca19",
      "name": "Taek wundo silver sneakers",
      "price": 4799,
      "image": "https://www.superkicks.in/cdn/shop/files/1-2026-01-28T143044.979_264420d0-1315-4435-b03a-40e412886d40.png?v=1769590942&width=1946",
      "category": "men",
      "isActive": true
    },
    {
      "id": "8399",
      "name": "speedcat pseudo ballet new arrived sneaker",
      "price": 1699,
      "image": "https://www.superkicks.in/cdn/shop/files/1_68.png?v=1756109676&width=1946",
      "category": "women",
      "isActive": true
    },
    {
      "id": "5c79",
      "name": "new one product",
      "price": 666,
      "image": "https://converse.static.n7.io/media/catalog/product/1/6/162050c_a_107x1.jpg",
      "category": "men",
      "isActive": true
    }
  ];



const importData = async () => {

  try {

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Imported Successfully ✅");

    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }

};

importData();