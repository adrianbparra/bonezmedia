// "data"= [
//     {
//       "id": "prod_NDJSBMwvyx6CJy",
//       "object": "product",
//       "active": true,
//       "created": 1674352736,
//       "default_price": "price_1MSspmFFFIEXyroZllPN1yjF",
//       "description": "1st Gen Chevrolet Silverado 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
//       "images": [],
//       "metadata": {
//         "Type": "Key Chain",
//         "Material": "PLA and Metal"
//       },
//       "name": "Chevrolet Silverado Key Chain",
//       "unit_label": "Piece",
//       "updated": 1674352743
//     },
//   ]

const data = [
    {
        "id": "1k4k35kn5j132jk342534",
        "name": "Chevrolet Colorado Keychain",
        "description":
            "1st Gen Chevrolet Silverado 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/car/200"],
        "price": "price_1MSspmay455roZllPN1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
    {
        "id": "1k4k3k4563lkj4542534",
        "name": "Chevrolet Silverado Keychain",
        "description":
            "Silverado dropped with dished rims 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/cat/200"],
        "price": "price_1MSspmFFFIEXyroZllPr1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
    {
        "id": "1k4k4lk56jlk4352534",
        "name": "Jeep XJ Keychain",
        "description":
            "XJ lifted with 33' rims 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/dog/200"],
        "price": "price_1MSspmFFFaag4aoZllPN1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
    {
        "id": "1k4k4lk5sg42525634 ",
        "name": "Nissan 240sx Keychain",
        "description":
            "240sx static with rims 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/test/200"],
        "price": "price_1MSspg4hsIEXyroZllPN1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
    {
        "id": "1k4k4aasg5as152534",
        "name": "Nissan R34 Keychain",
        "description":
            "R34 static with rims 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/picsum/200"],
        "price": "price_1MSspmg5hs5uhoZllPN1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
    {
        "id": "1k4asdgf774534",
        "name": "Toyota Supra Keychain",
        "description":
            "Supra static with rims 3D printed Key Chain. Made out of PLA and contains Metal Key Ring and chain. The average sizes is 2.25in Length x .75in Wide x .75 Height.",
        "metadata": {
            Type: "Key Chain",
            Material: "PLA and Metal",
        },
        "images": ["https://picsum.photos/seed/pisum/200"],
        "price": "price_1MSspmFFasg5bsh4PN1yjF",
        "unit_amount": 2000,
        "created": 1674352736,
        "updated": 1674352743
    },
];

const cart = [
    {
        id: "1k4k35kn5j132jk342534",
        name: "Colorado",
        amount: 1,
        price: 20.0,
        dateAdded: new Date("2022-11-21T19:32:00"),
    },
    {
        id: "1k4k3k4563lkj4542534",
        name: "Silverado",
        amount: 3,
        price: 20.0,
        dateAdded: new Date("2022-11-21T19:32:00"),
    },
];

export { data, cart };
