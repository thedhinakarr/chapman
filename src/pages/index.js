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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      pizzaHero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      pizzaMargherita: file(relativePath: { eq: "pizza1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      pizzaPepperoni: file(relativePath: { eq: "pizza2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      pizzaSpecial: file(relativePath: { eq: "pizza3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      interiorShot: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            height: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);
  const heroImage = getImage(data.pizzaHero);
  const interiorImage = getImage(data.interiorShot);

  // Menu featured pizzas
  const featuredPizzas = [
    {
      image: getImage(data.pizzaMargherita),
      name: "Margherita",
      description: "Tomatsås, Ost",
      price: "120 kr"
    },
    {
      image: getImage(data.pizzaPepperoni),
      name: "Indiana",
      description: "Tomatsås, Ost, Oxfile, Lök, Koriander",
      price: "149 kr"
    },
    {
      image: getImage(data.pizzaSpecial),
      name: "Chapman Special",
      description: "Tomatsås, Ost, Salami, Köttfärssås, Bacon",
      price: "149 kr"
    }
  ];

  return (
    <main className="font-sans antialiased text-gray-900 bg-gray-100">
      {/* Add global styles */}
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



      {/* Hero Section - NY Style Pizza with Indian influence */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <GatsbyImage
            image={heroImage}
            alt="Delicious New York style pizza"
            className="w-full h-full"
            objectFit="cover"
            style={{ position: 'absolute' }}
          />
        </div>
        <div className="relative mx-auto px-6 py-32 sm:py-40 z-20">
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight font-pizza uppercase drop-shadow-lg">
              Pizza with a <span className="text-red-500"> Kick </span> – Straight from Karlskrona’s Curry Crew Pizza.
            </h1>
            <div className="h-1 w-32 bg-white mt-6"></div>
            <p className="mt-6 text-xl text-white max-w-lg drop-shadow-lg">
              Hand-tossed crust, quality ingredients, and family recipes with an Indian twist.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/menu" className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow-lg transition duration-200 transform hover:-translate-y-1 no-underline uppercase font-pizza tracking-wide">
                View Menu
              </a>
              <a href="#location" className="px-8 py-3 bg-white text-red-700 hover:bg-red-100 font-bold rounded-lg shadow-lg transition duration-200 no-underline uppercase font-pizza tracking-wide">
                Find Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rating banner */}
      <section className="bg-gradient-to-r from-amber-500 via-red-700 to-green-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-16">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="ml-1 text-xl font-bold">4.4</span>
            <span className="ml-1 text-lg">(394)</span>
          </div>
          <div className="text-lg font-semibold">100-200 kr</div>
          <div className="text-lg">Opens 11am</div>
          <div className="text-lg">Norra Smedjegatan 31, 371 14 Karlskrona</div>
        </div>
      </section>

      {/* Featured Menu Items with Indian Twist */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-pizza text-3xl sm:text-4xl font-bold text-gray-900 uppercase">Our Famous Pies</h2>
            <div className="h-1 w-32 bg-red-700 mx-auto mt-4"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Handcrafted with fresh ingredients and baked in our traditional brick oven. Experience our unique fusion of New York style with Indian flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <GatsbyImage
                    image={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 border-t-4 border-red-700">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold font-pizza text-gray-900">{pizza.name}</h3>
                    <span className="text-xl font-bold text-red-700">{pizza.price}</span>
                  </div>
                  <p className="text-gray-600">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/menu" className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow-lg transition duration-200 no-underline uppercase font-pizza tracking-wide">
              See Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section with Indian Heritage */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
                <GatsbyImage
                  image={interiorImage}
                  alt="Inside Chapman Pizzeria"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-pizza text-3xl sm:text-4xl font-bold text-gray-900 uppercase">Our Story</h2>
              <div className="h-1 w-32 bg-red-700 mt-4"></div>
              <div className="mt-6 text-gray-700 space-y-4">
                <p className="text-lg">
                  Founded with a passion for bringing authentic New York-style pizza with an Indian twist to Karlskrona, Chapman Pizzeria represents the perfect fusion of East meets West.
                </p>
                <p className="text-lg">
                  Our owner brought his culinary expertise from India and combined it with traditional pizza-making techniques learned in New York to create something truly unique.
                </p>
                <p className="text-lg">
                  We pride ourselves on using traditional techniques, hand-tossing our dough daily, and using only the freshest ingredients, with select authentic spices imported directly from India.
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 font-medium">Authentic Flavors</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-2 font-medium">Family Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-pizza text-3xl sm:text-4xl font-bold text-gray-900 uppercase">Find Us</h2>
            <div className="h-1 w-32 bg-red-700 mx-auto mt-4"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Come visit us in the heart of Karlskrona.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold font-pizza text-gray-900 mb-4">Chapman Pizzeria</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div className="ml-3">
                      <p className="text-lg text-gray-900">Norra Smedjegatan 31</p>
                      <p className="text-lg text-gray-900">371 14 Karlskrona</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div className="ml-3">
                      <p className="text-lg text-gray-900">Monday - Thursday: 11:00 - 21:00</p>
                      <p className="text-lg text-gray-900">Friday - Saturday: 11:00 - 22:00</p>
                      <p className="text-lg text-gray-900">Sunday: 12:00 - 21:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div className="ml-3">
                      <p className="text-lg text-gray-900">+46 455-200 73</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="https://goo.gl/maps/your-map-link" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow-lg transition duration-200 no-underline uppercase font-pizza tracking-wide">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="h-80 md:h-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed/v1/place?q=chapman+pizzeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  allowFullScreen=""
                  loading="lazy"
                  title="Chapman Pizzeria Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action banner with Indian colors */}
      <section className="relative py-12 bg-gradient-to-r from-orange-500 via-white to-green-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-pizza text-3xl sm:text-4xl font-bold uppercase mb-6 text-gray-900">Order Now</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-900">
            Takeaway and delivery available. Call us or order through our partners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+46455-200 73" className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow-lg transition duration-200 no-underline uppercase font-pizza tracking-wide flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call to Order
            </a>
            <a href="/menu" className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg shadow-lg transition duration-200 no-underline uppercase font-pizza tracking-wide">
              View Menu
            </a>
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
                <li><Link to="/menu" className="text-gray-400 hover:text-white no-underline">Menu</Link></li>
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

export default IndexPage;
