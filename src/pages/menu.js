import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

// Add global styles to ensure no underlines on links and add Indian accents
const globalStyles = `
  a {
    text-decoration: none !important;
  }
  .no-underline {
    text-decoration: none !important;
  }
  nav a:hover {
    text-decoration: none !important;
  }

  /* Old-school font styling with spice */
  .font-pizza {
    font-family: 'Oswald', 'Impact', sans-serif;
    letter-spacing: 0.5px;
  }

  /* Checkered pattern with Indian colors */
  .checkered-pattern {
    background-image: linear-gradient(45deg, #FF9933 25%, transparent 25%),
      linear-gradient(-45deg, #FF9933 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #138808 75%),
      linear-gradient(-45deg, transparent 75%, #138808 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }

  /* Decorative border for Indian touch */
  .indian-border {
    position: relative;
  }
  .indian-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, #FF9933, #FFFFFF, #138808);
  }
`;


const MenuPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      menuBg: file(relativePath: { eq: "logo2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, height: 400, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 90)
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);
  const menuBgImage = getImage(data.menuBg);

  // Langos
  const langos = [
    "1. Langos med kebab - Kebabkött (nötköt), Ost, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "2. Langos med gyroskött - Gyroskött (fläskkarre), Ost, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "3. Langos med kyckling - Kyckling, Ost, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "4. Langos med tonfisk - Tonfisk, Ost, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni",
    "5. Langos med räkor - Räkor, Ost, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Sallads
  const sallader = [
    "1. Kebabsallad - Kebabkött (nötköt), Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "2. Kyckingsallad - Kyckling, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "3. Falafelsallad - Falafel, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "4. Tonfisksallad - Tonfisk, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "5. Räksallad - Räkor, Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "6. Hawaiisallad - Skinka, Fetaost, Ananas, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka",
    "7. Vegetarisk sallad - Fetaost, Champinjoner (färska), Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka, Paprika (färsk)",
    "8. Gyrossallad - Gyroskött (fläskkarre), Fetaost, Kebabsås mild, Lök, Oliver, Tomater (färska), Isbergssallad, Feferoni, Gurka"
  ];

  // Falafel dishes
  const falafel = [
    "23. Falafel med bröd - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "24. Falafel med bröd special - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "25. Falafelrulle - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "26. Falafelrulle special - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "27. Falafeltallrik med pommes - Falafel, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "28. Falafeltallrik special med pommes - Falafel, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Hamburgers
  const hamburgare = [
    "1. Hamburgare 90g - Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "2. Hamburgertallrik 90g - Pommes frites, Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "3. Hamburgare 150g - Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök",
    "4. Hamburgertallrik 150g - Pommes frites, Hamburgerdressing, Tomater (färska), Isbergssallad, Rödlök"
  ];

  // Kebab plates
  const kebabTallrik = [
    "1. Kebab med bröd - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "2. Kebab med bröd special - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "3. Kebabrulle - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "4. Kebabrulle special - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "5. Kebabtallrik med pommes - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "6. Kebabtallrik special med pommes - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "7. Kebabtallrik med ris - Kebabkött (nötköt), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "8. Kebabtallrik special med ris - Kebabkött (nötköt), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Gyros dishes
  const gyros = [
    "9. Gyros med bröd - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "10. Gyros med bröd special - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "11. Gyrosrulle - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "12. Gyrosrulle special - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "13. Gyrostallrik med pommes - Gyroskött (fläskkarre), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "14. Gyrostallrik special med pommes - Gyroskött (fläskkarre), Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Chicken dishes
  const kyckling = [
    "15. Kyckling med bröd - Kyckling, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "16. Kyckling med bröd special - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "17. Kycklingrulle - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "18. Kycklingrulle special - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "19. Kycklingtallrik med pommes - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "20. Kycklingtallrik special med pommes - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "21. Kycklingtallrik med ris - Kyckling, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni",
    "22. Kycklingtallrik special med ris - Kyckling, Ost, Champinjoner (färska), Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni"
  ];

  // Pizza Klass 1
  const klass1 = [
    "1. Margherita - Tomatsås, Ost",
    "2. Funghi - Tomatsås, Ost, Champinjoner (färska)",
    "3. Vesuvio - Tomatsås, Ost, Skinka",
    "4. Calzone (inbakad) - Tomatsås, Ost, Skinka",
    "5. Capricciosa - Tomatsås, Ost, Skinka, Champinjoner (färska)",
    "6. La gondola - Tomatsås, Ost, Skinka, Räkor",
    "7. Hawaii special - Tomatsås, Ost, Skinka, Ananas",
    "8. Marinara - Tomatsås, Ost, Räkor, Musslor",
    "9. Pescatore - Tomatsås, Ost, Tonfisk, Lök",
    "10. Bolognese - Tomatsås, Ost, Köttfärssås",
    "11. La mafia - Tomatsås, Ost, Bacon, Lök, Paprika (färsk)",
    "12. Vegetariana - Tomatsås, Ost, Champinjoner (färska), Lök, Oliver, Paprika (färsk)"
  ];

  // Pizza Klass 2
  const klass2 = [
    "13. Mama mia - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "14. Tropicana - Tomatsås, Ost, Skinka, Ananas, Banan",
    "15. Gudadera - Tomatsås, Ost, Tonfisk, Musslor, Paprika (färsk)",
    "16. Bambino (inbakad) - Tomatsås, Ost, Köttfärssås, Ananas",
    "17. Quattro stagioni - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska), Musslor",
    "18. Calzone super (inbakad) - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "19. Paradiso - Tomatsås, Ost, Skinka, Räkor, Ananas, Champinjoner (färska)",
    "20. Maraddona - Tomatsås, Ost, Skinka, Salami, Champinjoner (färska)",
    "21. Calzone bolognese (inbakad) - Tomatsås, Ost, Köttfärssås, Lök",
    "22. Chapman - Tomatsås, Ost, Salami, Köttfärssås, Bacon",
    "23. Bambino super - Tomatsås, Ost, Köttfärssås, Räkor, Ananas, Lök, Vitlök",
    "24. Rimini - Tomatsås, Ost, Bacon, Lök, Ägg",
    "25. Hawaii special - Tomatsås, Ost, Skinka, Räkor, Ananas",
    "26. Ronaldo - Tomatsås, Ost, Oxfilé, Bearnaisesås",
    "27. Big Brother - Tomatsås, Ost, Oxfilé, Bearnaisesås, Lök, Tomater (färska), Jalapeño",
    "28. Roma - Tomatsås, Ost, Skinka, Fetaost, Bearnaisesås, Kebabkött (nötköt)",
    "29. Ciao Ciao - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Vitlök",
    "30. Festpizza - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Bearnaisesås",
    "31. Trossö special - Tomatsås, Ost, Salami, Oxfilé (marinerad), Champinjoner (färska), Lök, Tomater (färska)",
    "32. Fiskarepizza - Tomatsås, Ost, Tonfisk, Räkor, Musslor",
    "33. Grönsakspizza - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Grönsaksbland",
    "34. Mexicana - Tomatsås, Ost, Köttfärs, Bacon, Lök, Paprika (färsk)",
    "35. Lambada - Tomatsås, Ost, Skinka, Oxfilé, Köttfärs, Bacon, Champinjoner (färska), Bearnaisesås",
    "36. Valentino special - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök",
    "37. Karlskrona special - Tomatsås, Ost, Bacon, Oxfilé (marinerad), Lök, Paprika (färsk)",
    "38. Hercules - Tomatsås, Ost, Oxfilé, Bearnaisesås, Curry, Banan",
    "39. Kycklingpizza - Tomatsås, Ost, Kyckling, Kebabsås mild, Lök, Tomater (färska), Isbergssallad",
    "40. Kebabpizza - Tomatsås, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni, Kebabkött (nötköt)",
    "41. Venezia - Tomatsås, Ost, Skinka, Kebabsås mild, Kebabkött (nötköt)",
    "42. Gyrospizza special - Tomatsås, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Feferoni, Gyroskött (fläskkarre)",
    "43. Halva halva - Tomatsås, Ost, Kebabsås mild, Gyroskött (fläskkarre), Kebabkött (nötköt)",
    "44. Red Devil - Tomatsås, Ost, Salami, Oxfilé, Bearnaisesås, Jalapeño, Feferoni",
    "45. Bonjour - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök, Paprika (färsk)",
    "46. Palermo - Tomatsås, Ost, Skinka, Oxfilé, Champinjoner (färska), Bearnaisesås",
    "47. Calzone special (inbakad) - Tomatsås, Ost, Skinka, Kebabsås mild, Kebabkött (nötköt)",
    "48. Bagarens favorit - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Lök, Vitlök",
    "49. Mazziani - Tomatsås, Ost, Oxfilé (marinerad), Tomater (färska), Vitlök",
    "50. Vikingbåt (Halvinbakad) - Tomatsås, Ost, Champinjoner (färska), Lök, Vitlök, Gyroskött (fläskkarre)",
    "51. Ciao bella (Halvinbakad) - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Lök, Vitlök",
    "52. Indiana - Tomatsås, Ost, Oxfilé (marinerad), Curry, Banan, Tomater (färska)",
    "53. Bahamas - Tomatsås, Ost, Kyckling, Curry, Banan, Jordnötter",
    "54. Black and White - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Bearnaisesås",
    "55. Sopsäck - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska), Vitlök",
    "56. Mozzarella - Tomatsås, Ost, Pepperoni, Champinjoner (färsk), Bearnaisesås, Mozzarellaost",
    "57. Fur - Tomatsås, Ost, Champinjoner (färska), Lök, Tomater (färska), Vitlök",
    "58. Pommes - Tomatsås, Ost, Kebabsås mild, Kebabkött (nötköt), Pommes frites",
    "59. Osttpizza - Tomatsås, Ost, Fetaost, Vitlök, Gorgonzaolost, Mozzarellaost"
  ];

  // Rollopizza
  const rollopizza = [
    "60. Rollo mardino - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök",
    "61. Rollo kebab - Tomatsås, Ost, Kebabsås mild, Champinjoner (färska), Kebabkött (nötköt)",
    "62. Rollo Chapman - Tomatsås, Ost, Köttfärs, Lök, Tomater (färska), Isbergssallad, Kebabkött (nötköt)",
    "63. Rollo Alanya - Tomatsås, Ost, Kyckling, Oxfilé, Champinjoner (färska), Lök",
    "64. Rollo Oscar - Tomatsås, Ost, Skinka, Räkor, Ananas, Champinjoner (färska)"
  ];

  // Indian dishes
  const indianDishes = [
    "1. Kadai Chicken",
    "2. Chicken Korma",
    "3. Butter chicken",
    "4. Mughlai chicken",
    "5. Vindaloo Chicken",
    "6. Masala chicken"
  ];

  const indianSpecials = [
    "Tomato Chicken",
    "Mushroom Chicken",
    "Saag Meat",
    "Äggcurry"
  ];

  const indianVeg = [
    "1. Kadai paneer",
    "2. Palak paneer(Spenat)",
    "3. Dal makhani(butter)",
    "4. Chana masala(Kikärter)",
    "5. Aloo Matar(potatis med Ärter)",
    "6. Shahi Paneer",
    "7. Matar Mushroom"
  ];

  const indianRice = [
    "1. Chicken biryani",
    "2. Veg biryani",
    "3. Plain rice",
    "4. Jeera rice"
  ];

  const breads = [
    "1. Garlic naan",
    "2. Plain roti",
    "3. Bhatura"
  ];

  return (
    <main className="font-sans antialiased text-gray-900 bg-gray-100">
      <style>{globalStyles}</style>
      {/* Navbar - NY Pizza style with Indian accents */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center md:justify-between h-20 relative">

            {/* Centered logo and text on mobile, left-aligned on desktop */}
            <Link
              to="/"
              className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 flex items-center space-x-2 no-underline"
            >
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-red-700 shadow-lg transform -rotate-6">
                <GatsbyImage
                  image={logoImage}
                  alt="Chapman Pizzeria Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="block text-lg md:text-3xl font-bold text-red-700 font-pizza tracking-wider uppercase">
                  Chapman
                </span>
                <span className="block text-sm md:text-xl font-bold text-green-700 font-pizza tracking-wider italic -mt-1">
                  Pizzeria
                </span>
              </div>

            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-red-700 font-bold font-pizza no-underline uppercase px-3 py-2">
                Home
              </Link>
              <Link to="/menu" className="text-gray-900 hover:text-red-700 font-bold font-pizza no-underline uppercase px-3 py-2">
                Menu
              </Link>
              <Link to="/#about" className="text-gray-900 hover:text-red-700 font-bold font-pizza no-underline uppercase px-3 py-2">
                About
              </Link>
              <Link to="/#location" className="text-gray-900 hover:text-red-700 font-bold font-pizza no-underline uppercase px-3 py-2">
                Location
              </Link>
              <Link to="/#contact" className="text-gray-900 hover:text-red-700 font-bold font-pizza no-underline uppercase px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <GatsbyImage image={menuBgImage} alt="Menu Background" className="absolute inset-0 z-0 w-full h-full object-cover" />
        <div className="relative mx-auto px-6 py-16 z-20 text-center">
          <h1 className="text-5xl font-bold text-white font-pizza uppercase drop-shadow-lg mb-4">
            Meny
          </h1>

          <a
            href="tel:+4645520073"
            className="inline-flex items-center justify-center px-4 py-1.5 bg-red-700 hover:bg-red-800 text-white text-sm font-bold rounded-md shadow-md transition duration-200 no-underline uppercase font-pizza tracking-wide"
          >
            <svg className="w-9 h-9 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call to Order
          </a>
        </div>
      </section>


      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Klass 1 - 120 SEK</h2>
            <p className="text-gray-600 mb-4">Familie Pizza: 230 SEK</p>
            <ul className="space-y-4">
              {klass1.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Klass 2 - 140 SEK</h2>
            <p className="text-gray-600 mb-4">Familie Pizza: 270 SEK</p>
            <ul className="space-y-4">
              {klass2.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">140 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Rollopizza - 159 SEK</h2>
            <ul className="space-y-4">
              {rollopizza.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">159 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Indiska Kycklingrätter - 120 SEK</h2>
            <ul className="space-y-4">
              {indianDishes.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Indiska Special Ratter - 159 SEK</h2>
            <ul className="space-y-4">
              {indianSpecials.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">159 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Indiska Vegårätter - 120 SEK</h2>
            <ul className="space-y-4">
              {indianVeg.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Indiska Risrätter</h2>
            <ul className="space-y-4">
              {indianRice.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">
                    {item.includes("Plain rice") ? "40 kr" :
                      item.includes("Jeera rice") ? "45 kr" : "149 kr"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Bread/Roti</h2>
            <ul className="space-y-4">
              {breads.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">
                    {item.includes("Garlic naan") ? "20 kr" :
                      item.includes("Plain naan") ? "40 kr" : "20 kr"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
            <h3 className="text-xl font-bold text-red-700 font-pizza mb-2">Glutenfria Pizzor</h3>
            <p className="text-gray-800">Alla pizzor kan fås som glutenfria mot ett pristillägg på +30 SEK</p>
          </div>

          {/* New menu sections from the additional image */}
          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Langos - 130 SEK</h2>
            <ul className="space-y-4">
              {langos.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">130 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Sallader - 120 SEK</h2>
            <ul className="space-y-4">
              {sallader.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Falafel - 120 SEK</h2>
            <ul className="space-y-4">
              {falafel.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Hamburgare - 120 SEK</h2>
            <ul className="space-y-4">
              {hamburgare.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Kebabrater - 120 SEK</h2>
            <ul className="space-y-4">
              {kebabTallrik.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Gyros - 120 SEK</h2>
            <ul className="space-y-4">
              {gyros.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6 mt-12">Kyckling - 120 SEK</h2>
            <ul className="space-y-4">
              {kyckling.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">120 kr</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Restaurant information */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-red-700 font-pizza mb-2">Chapman Pizzeriza</h3>
                <p className="text-gray-700">Norra Smedjegatan 31
                  371 14 Karlskrona
                </p>
                <a href="tel:045561301" className="text-blue-600 hover:text-blue-800 block mt-2 font-semibold">
                  Tel: +46 455-200 73
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-700 font-pizza mb-2">Chapman Pizzeriza </h3>
                <p className="text-gray-700 italic">New York style pizza with authentic Indian flavors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer with Indian flag colors */}
      <footer id="contact" className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-red-700">
                  <GatsbyImage
                    image={logoImage}
                    alt="Chapman Pizzeria Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-white font-pizza">Chapman Pizzeria</span>
              </div>
              <p className="mt-4 text-gray-400">
                New York style pizza with authentic Indian flavors since 1982.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 no-underline">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 no-underline">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-pizza mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white no-underline">Home</Link></li>
                <li><Link to="/#about" className="text-gray-400 hover:text-white no-underline">About</Link></li>
                <li><Link to="/menu" className="text-gray-400 hover:text-white no-underline">Menu</Link></li>
                <li><Link to="/#location" className="text-gray-400 hover:text-white no-underline">Location</Link></li>
                <li><Link to="/#contact" className="text-gray-400 hover:text-white no-underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-pizza mb-4">Contact</h4>
              <p className="text-gray-400">Norra Smedjegatan 31<br />371 14 Karlskrona<br />+46 455-200 73</p>
              <p className="text-gray-400 mt-2">Email: info@chapmanpizzeria.se</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chapman Pizzeria. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
};

export default MenuPage;
