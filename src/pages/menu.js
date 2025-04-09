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

  const klass1 = [
    "Margherita - Tomatsås, Ost",
    "Funghi - Tomatsås, Ost, Champinjoner (färska)",
    "Vesuvio - Tomatsås, Ost, Skinka",
    "Calzone (inbakad) - Tomatsås, Ost, Skinka",
    "Capricciosa - Tomatsås, Ost, Skinka, Champinjoner (färska)",
    "La gondola - Tomatsås, Ost, Skinka, Räkor",
    "Hawaii - Tomatsås, Ost, Skinka, Ananas",
    "Marinara - Tomatsås, Ost, Räkor, Musslor",
    "Pescatore - Tomatsås, Ost, Tonfisk, Lök",
    "Bolognese - Tomatsås, Ost, Köttfärssås",
    "La mafia - Tomatsås, Ost, Bacon, Lök, Paprika (färsk)",
    "Vegetariana - Tomatsås, Ost, Champinjoner (färska), Lök, Oliver, Paprika (färsk)"
  ];

  const klass2 = [
    "Mama mia - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "Tropicana - Tomatsås, Ost, Skinka, Ananas, Banan",
    "Gudfadern - Tomatsås, Ost, Tonfisk, Musslor, Paprika (färsk)",
    "Bambino (inbakad) - Tomatsås, Ost, Köttfärssås, Ananas",
    "Quattro stagioni - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska), Musslor",
    "Calzone super (inbakad) - Tomatsås, Ost, Skinka, Räkor, Champinjoner (färska)",
    "Paradiso - Tomatsås, Ost, Skinka, Räkor, Ananas, Champinjoner (färska)",
    "Maradonna - Tomatsås, Ost, Skinka, Salami, Champinjoner (färska)",
    "Calzone bolognese (inbakad) - Tomatsås, Ost, Köttfärssås, Lök",
    "Chapman - Tomatsås, Ost, Salami, Köttfärssås, Bacon",
    "Bambino super - Tomatsås, Ost, Köttfärssås, Räkor, Ananas, Lök, Vitlök",
    "Rimini - Tomatsås, Ost, Bacon, Lök, Ägg",
    "Hawaii special - Tomatsås, Ost, Skinka, Räkor, Ananas",
    "Ronaldo - Tomatsås, Ost, Oxfilé, Bearnaisesås",
    "Big Brother - Tomatsås, Ost, Oxfilé, Bearnaisesås, Lök, Tomater (färska), Jalapeños",
    "Roma - Tomatsås, Ost, Skinka, Fetaost, Bearnaisesås, Kebabkött (nötkött)",
    "Ciao ciao - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Vitlök",
    "Festpizza - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Bearnaisesås",
    "Trossö special - Tomatsås, Ost, Salami, Oxfilé (marinerad), Champinjoner (färska), Lök, Tomater (färska)",
    "Fiskarens pizza - Tomatsås, Ost, Tonfisk, Räkor, Musslor",
    "Gorgonzola - Tomatsås, Ost, Oxfilé (marinerad), Champinjoner (färska), Tomater (färska), Gorgonzolaost",
    "Mexicana - Tomatsås, Ost, Köttfärs, Bacon, Lök, Paprika (färsk)",
    "Lambada - Tomatsås, Ost, Skinka, Oxfilé, Köttfärs, Bacon, Champinjoner (färska), Bearnaisesås",
    "Valentino special - Tomatsås, Ost, Oxfilé, Champinjoner (färska), Bearnaisesås, Lök",
    "Karlskrona special - Tomatsås, Ost, Bacon, Oxfilé (marinerad), Lök, Paprika (färsk)",
    "Hercules - Tomatsås, Ost, Oxfilé, Bearnaisesås, Curry, Banan",
    "Kycklingpizza - Tomatsås, Ost, Kyckling, Kebabsås mild, Lök, Tomater (färska), Isbergssallad",
    "Kebabpizza - Tomatsås, Ost, Kebabsås mild, Lök, Tomater (färska), Isbergssallad, Peperoni, Kebabkött (nötkött)",
    "Venezia - Tomatsås, Ost, Skinka, Kebabsås mild, Kebabkött (nötkött)"
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
            <h2 className="text-3xl font-bold text-red-700 font-pizza border-b-4 border-red-700 inline-block mb-6">Klass 2 - 149 SEK</h2>
            <ul className="space-y-4">
              {klass2.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-2">
                  <span className="text-gray-800">{item}</span>
                  <span className="text-red-700 font-bold">149 kr</span>
                </li>
              ))}
            </ul>
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
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.
                    0.08c0 2.716-.012 3.056-.06 4.123-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06s-3.056-.012-4.123-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 15.371 2 15.031 2 12.315s.013-3.056.06-4.123c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.943 2.013 9.283 2 12 2zm0 1.8c-2.683 0-3.002.01-4.06.058-.978.045-1.508.205-1.861.341a3.1 3.1 0 00-1.129.732 3.1 3.1 0 00-.732 1.13c-.136.352-.296.882-.341 1.86C4.01 8.998 4 9.317 4 12s.01 3.002.058 4.06c.045.978.205 1.508.341 1.861.174.45.43.851.732 1.13.28.303.68.558 1.13.732.352.136.882.296 1.86.341C8.998 19.99 9.317 20 12 20s3.002-.01 4.06-.058c.978-.045 1.508-.205 1.861-.341a3.1 3.1 0 001.13-.732 3.1 3.1 0 00.732-1.13c.136-.352.296-.882.341-1.86.048-1.058.058-1.377.058-4.06s-.01-3.002-.058-4.06c-.045-.978-.205-1.508-.341-1.861a3.1 3.1 0 00-.732-1.13 3.1 3.1 0 00-1.13-.732c-.352-.136-.882-.296-1.86-.341C15.002 3.81 14.683 3.8 12 3.8zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm4.5-2.2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-pizza mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white no-underline">Home</Link></li>
                <li><Link to="/#about" className="text-gray-400 hover:text-white no-underline">About</Link></li>
                <li><Link to="/#location" className="text-gray-400 hover:text-white no-underline">Location</Link></li>
                <li><Link to="/#contact" className="text-gray-400 hover:text-white no-underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-pizza mb-4">Contact</h4>
              <p className="text-gray-400">Norra Smedjegatan 31<br />371 14 Karlskrona<br />+46 123-456789</p>
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
