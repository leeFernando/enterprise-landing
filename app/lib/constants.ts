import { routes } from "app/lib/routes"

export const NAV_ITEMS = [
  { title: "Services", href: routes.SERVICES },
  { title: "About", href: routes.ABOUT },
  { title: "Contact", href: routes.CONTACT }
]

export const SOCIAL_ICONS = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6dc0d5d3e778f5ac40749f698a950f9c800d279aa8e0e3be6417392edb64b83?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Social icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2673330dd9c346192daaf44ef550d2e57d1d310f3e24a158467a3519d40aa33b?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Social icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/26c7563f503816eb96963ec7efbdac896ff851b72c668609a55c5a49db8d3603?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Social icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/944776803ee9060648a26a6e2b75d24fddc464497a6b83d9f3aac8f707d4f21a?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Social icon 4" },
]

export const SERVICES = [
  {
    title: "Quotation, Sales Order and Purchase Order Management",
    description:
      "Our automated system streamlines the quotation, sales order, and purchase order flow, allowing you to generate PDFs for documentation efficiently.",
  },
  {
    title: "Product, Warehouse, and Inventory Management",
    description:
      "Our system provides you with a comprehensive solution for managing your products, warehouses, and inventory, with live inventory tracking.",
  },
  {
    title: "Charts and Analytics on Order Performance",
    description:
      "Our system provides you with charts and analytics on order performance, giving you insights into your supply chain operations and helping you make informed decisions.",
  },
  {
    title: "Customizable Integrations",
    description:
      "Our system can be seamlessly integrated with other systems and software, providing you with a comprehensive supply chain solution that meets all your business needs.",
  },
]

export const FEATURES = [
  {
    title: "Streamlining Supply Chain Management with Orderly",
    description:
      "Discover how our supply chain management system helped ABC Company optimize their operations, leading to a 20% increase in efficiency and an 80% reduction in errors.",
    items: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/540aa70e934e737604499addac8590bc5c2e2aab55a695f859cd14d9785b58da?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
        text: "Automated quotation, sales order, and purchase order flow",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/540aa70e934e737604499addac8590bc5c2e2aab55a695f859cd14d9785b58da?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
        text: "PDF generation for documentation",
      },
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80bc92c01062e430b17db8d2a95c48c614d804854341d1b74de6d09ca0e233f5?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
    imagePosition: "right",
  },
  {
    title: "Enhancing Inventory Management with Orderly",
    description:
      "Learn how our inventory management system helped XYZ Company streamline their operations, leading to a 30% reduction in inventory costs and a 50% improvement in order fulfillment.",
    items: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdd944fda805b1440714b3b0671f91be8e67af0ea0c3b421dbe8336e483301?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
        text: "Live inventory tracking and management",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4fdd944fda805b1440714b3b0671f91be8e67af0ea0c3b421dbe8336e483301?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
        text: "Automated alerts for low inventory levels",
      },
    ],
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/55cb937b9fd6cd0cd2cb4206ff7c895226aacf285331be64b9b8c72ac9d36b4e?apiKey=22246eee373843b9ad31feedbfd0d7ad&",
    imagePosition: "left",
  },
]

export const CLIENT_LOGOS = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8066dc94821676c3dfe3860ce24d40587e62b9b997927a3014c6797c3df082a7?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 1", className: "grow aspect-[3.03] w-[227px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/27b5d85af9aeee09d128aff3a18dada0800863731ce83f2f806ad60e9c69042e?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 2", className: "grow aspect-[1.82] w-[161px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccec66b1d2495b44df808d1405807be43cc47a2aecc2ce4d8ba13f1d65a75e18?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 3", className: "grow aspect-[1.79] w-[158px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b687a7127183ccd3771fb33c0646d76de35000da2380b784bf0bfaf25c0738c6?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 4", className: "aspect-[1.82] w-[139px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2470757fd3c35136428930c1ed278010860e2bc1ad2a6751709f354a397fa3f0?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 5", className: "grow aspect-[3.03] w-[238px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfbb6f7aa2beb114f3e4bdd676f400a2dbecded2296c82fcd65a73a9169dc36a?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 6", className: "grow aspect-[1.82] w-[164px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa3e9407538df5dc74e987181da9b0820e80f5ad78fe03caa32d9d5682146b3b?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 7", className: "aspect-[1.82] w-[157px] max-md:mt-10" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7109a51c491516c0d24dc7be6b01613554b721e39172360f52691a0761327936?apiKey=22246eee373843b9ad31feedbfd0d7ad&", alt: "Client 8", className: "aspect-[1.82] w-[142px] max-md:mt-10" },
]