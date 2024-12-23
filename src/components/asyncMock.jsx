// components/asyncMock.jsx
const products = [
    {
      id: "1",
      name: "Curso de JavaScript Moderno",
      price: 99.99,
      category: "programming",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      stock: 50,
      description: "Aprende JavaScript desde cero y domina el lenguaje más popular del mundo.",
    },
    {
      id: "2",
      name: "Curso de Python para Principiantes",
      price: 89.99,
      category: "programming",
      img: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
      stock: 30,
      description: "Un curso completo para aprender Python, uno de los lenguajes más versátiles.",
    },
    {
      id: "3",
      name: "Curso de Diseño Gráfico con Photoshop",
      price: 79.99,
      category: "design",
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/photoshop.svg",
      stock: 20,
      description: "Domina Photoshop y crea diseños impresionantes para cualquier proyecto.",
    },
    {
      id: "4",
      name: "Curso de Desarrollo Web Full Stack",
      price: 199.99,
      category: "programming",
      img: "https://www.pulsiondigital.com/wp-content/uploads/2022/09/full-stack.png",
      stock: 15,
      description: "Aprende a construir aplicaciones web completas desde el front-end hasta el back-end.",
    },
    {
      id: "5",
      name: "Curso de React para Principiantes",
      price: 89.99,
      category: "programming",
      img: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      stock: 40,
      description: "Conviértete en un experto en React y crea aplicaciones web interactivas.",
    },
    {
      id: "6",
      name: "Curso de UX/UI Design",
      price: 99.99,
      category: "design",
      img: "https://static.vecteezy.com/system/resources/previews/017/322/215/non_2x/ux-ui-design-icon-outline-illustration-vector.jpg",
      stock: 25,
      description: "Aprende los principios del diseño de experiencia de usuario y de interfaz.",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === productCategory));
      }, 2000);
    });
  };