import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: "Pichu",
            email: "aguferberna@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },
        {
            name: "Jhony",
            email: "user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,

        },

    ],
    products: [
        {
            
            name: 'Tarta de choclo x1',
            category: 'Tartas',
            image: '../img/1.jpg',
            price: 120,
           

        },
        {
            
            name: 'Prepizza integral x1',
            category: 'Pizzas',
            image: '../img/2.jpg',
            price: 140,
           

        },
        {
           
            name: 'Milanesas de berenjena x500g',
            category: 'Milanesas',
            image: '../img/3.jpg',
            price: 170,
         

        },
        {
           
            name: 'Ñoquis de verdura x500g',
            category: 'Pastas',
            image: '../img/4.jpg',
            price: 200,
    

        }        
    ],
};


export default data;


