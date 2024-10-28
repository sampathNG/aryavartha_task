// import React from "react";
// const Nav = () => {
//   return (
//     <section>
//       <>
//         <link
//           rel="stylesheet"
//           href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
//           integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
//           crossOrigin="anonymous"
//         />
//         <nav classname="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
//           <div classname="container mx-auto">
//             <a classname="navbar-brand" href="#">
//               <img
//                 src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729917566/sn8-removebg-preview_tkto2w.png"
//                 classname="imglogo"
//               />
//             </a>
//             <button
//               classname="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span classname="navbar-toggler-icon" />
//             </button>
//             <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div classname="navbar-nav ml-auto">
//                 <a classname="nav-link active" id="navItem1" href="#wcuSection">
//                   Home
//                   <span classname="sr-only">(current)</span>
//                 </a>
//                 <a
//                   classname="nav-link"
//                   href="#exploreMenuSection"
//                   id="navItem2"
//                 >
//                   VPS
//                 </a>
//                 <a
//                   classname="nav-link"
//                   href="#deliveryPaymentSection"
//                   id="navItem3"
//                 >
//                   Dedicated
//                 </a>
//                 <a classname="nav-link" href="#followUsSection" id="navItem4">
//                   Solutions
//                 </a>
//                 <a classname="nav-link" href="#followUsSection" id="navItem4">
//                   Trading
//                 </a>
//                 <a classname="nav-link" href="#followUsSection" id="navItem4">
//                   Contacts
//                 </a>
//                 <a classname="nav-link" href="#followUsSection" id="navItem4">
//                   Menu
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <div
//           id="carouselExampleIndicators"
//           classname="carousel slide"
//           data-ride="carousel"
//         >
//           <ol classname="carousel-indicators">
//             <li
//               data-target="#carouselExampleIndicators"
//               data-slide-to={0}
//               classname="active"
//             />
//             <li data-target="#carouselExampleIndicators" data-slide-to={1} />
//             <li data-target="#carouselExampleIndicators" data-slide-to={2} />
//           </ol>
//           <div classname="carousel-inner">
//             <div classname="carousel-item active">
//               <img
//                 src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846738/1.jfif_tvj5xg.jpg"
//                 classname="block w-full"
//                 alt="..."
//               />
//             </div>
//             <div classname="carousel-item">
//               <img
//                 src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846739/2.jfif_hooaz4.jpg"
//                 classname="block w-full"
//                 alt="..."
//               />
//             </div>
//             <div classname="carousel-item">
//               <img
//                 src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846739/3.jfif_bqhtyl.jpg"
//                 classname="block w-full"
//                 alt="..."
//               />
//             </div>
//           </div>
//           <a
//             classname="carousel-control-prev"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="prev"
//           >
//             <span classname="carousel-control-prev-icon" aria-hidden="true" />
//             <span classname="sr-only">Previous</span>
//           </a>
//           <a
//             classname="carousel-control-next"
//             href="#carouselExampleIndicators"
//             role="button"
//             data-slide="next"
//           >
//             <span classname="carousel-control-next-icon" aria-hidden="true" />
//             <span classname="sr-only">Next</span>
//           </a>
//         </div>
//         <div classname="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
//           <div classname="container mx-auto">
//             <div classname="flex flex-wrap -mx-2">
//               <div classname="w-full px-2">
//                 <h1 classname="menu-section-heading mb-5">Plan and Pricing</h1>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2 ">
//                 <div classname="shadow menu-item-card p-3 mb-3 ">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$19.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2">
//                 <div classname="shadow menu-item-card p-3 mb-3">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$29.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2">
//                 <div classname="menu-item-card shadow p-3 mb-3">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$39.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2">
//                 <div classname="menu-item-card shadow p-3 mb-3">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$49.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2">
//                 <div classname="menu-item-card shadow p-3 mb-3">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$59.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-4/12 px-2 lg:w-4/12 px-2">
//                 <div classname="menu-item-card shadow p-3 mb-3">
//                   <h1 classname="menu-card-title">
//                     Intel Xeon E3-1240v6 processor
//                   </h1>
//                   <p classname="pcard">12 GB DDR4 RAM (Dedicated)</p>
//                   <p classname="pcard"> 2 x 1 TB Sata Hard Drive</p>
//                   <p classname="pcard"> 10 TB Premium Bandwidth</p>
//                   <p classname="pcard">$69.99</p>
//                   <div classname="text-center">
//                     <button classname="buttoneffect12">Order Now</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div classname="wcu-section  pt-5 pb-5 mt-5" id="wcuSection">
//           <div classname="container mx-auto">
//             <div classname="flex flex-wrap -mx-2">
//               <div classname="w-full px-2">
//                 <h1 classname="wcu-section-heading-1">Hostiko Guarantees</h1>
//                 <p classname="wcu-section-description-1">
//                   For half a decade, Hostiko has stood head and shoulders above
//                   the competition.
//                 </p>
//                 <p classname="hline mb-5">_____</p>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729754999/WhatsApp_Image_2024-10-24_at_12.58.35_93accb4e_dirglu.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title-1 mt-3">
//                     Money-back Guaraguarantee
//                   </h1>
//                   <p classname="wcu-card-description-1">
//                     A money back guarantee is a type of return policy that lets
//                     consumers return a product and get their money back if
//                     they're dissatisfied
//                   </p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729754998/WhatsApp_Image_2024-10-24_at_12.58.36_4315a247_n3t25h.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title-1 mt-3">24/7 Support</h1>
//                   <p classname="wcu-card-description-1">
//                     24/7 support is a customer service strategy that involves
//                     assisting around the clock, 365 days a year.
//                   </p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729754999/WhatsApp_Image_2024-10-24_at_12.58.36_671e328a_sf8jtk.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title-1 mt-3">Cloud Technology</h1>
//                   <p classname="wcu-card-description-1">
//                     A cloud security policy is a framework with rules and
//                     guidelines designed to safeguard cloud-based systems and
//                     data.
//                   </p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729754999/WhatsApp_Image_2024-10-24_at_12.58.37_0eef57e8_axrdxz.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title-1 mt-3">Fast SSD Server</h1>
//                   <p classname="wcu-card-description-1">
//                     SSDs are faster, more powerful and more efficient compared
//                     to a traditional SATA server
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div classname="wcu-section bg pt-5 pb-5" id="wcuSection">
//           <div classname="container mx-auto">
//             <div classname="flex flex-wrap -mx-2">
//               <div classname="w-full px-2">
//                 <h1 classname="wcu-section-heading">Our Best Features</h1>
//                 <p classname="wcu-section-description">
//                   Apart from that, you can hover your mouse over the Search
//                   menu,
//                 </p>
//                 <p classname="hline mb-5">_____</p>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729775397/WhatsApp_Image_2024-10-24_at_18.38.36_f538ae79_mfh0iq.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title mt-3">Shared Hosting</h1>
//                   <p classname="Hosting">$3.99/mo</p>
//                   <p classname="wcu-card-description"></p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729775397/WhatsApp_Image_2024-10-24_at_18.38.34_1651f633_c1nbkd.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title mt-3">Reseller Hosting</h1>
//                   <p classname="Hosting">$3.99/mo</p>
//                   <p classname="wcu-card-description"></p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729775397/WhatsApp_Image_2024-10-24_at_18.38.35_ce5b8a38_dplwwb.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title mt-3">Dedicated Server</h1>
//                   <p classname="Hosting">$3.99/mo</p>
//                   <p classname="wcu-card-description"></p>
//                 </div>
//               </div>
//               <div classname="w-full px-2 md:w-3/12 px-2">
//                 <div classname="wcu-card p-3 mb-3">
//                   <img
//                     src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729775397/WhatsApp_Image_2024-10-24_at_18.38.32_3798ff60_nunatu.jpg"
//                     classname="wcu-card-image"
//                   />
//                   <h1 classname="wcu-card-title mt-3">VPS Server</h1>
//                   <p classname="Hosting">$3.99/mo</p>
//                   <p classname="wcu-card-description"></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div classname="boxcontainer">
//           <div classname="box">
//             <div style={{ textAlign: "center" }}>
//               <p style={{ fontSize: 33 }}>Shared</p>
//               <hr />
//               <p style={{ fontSize: 15 }}>
//                 cost-effective hosting
//                 <br />
//                 where multiple websites
//                 <br />
//                 share the same
//                 <br />
//                 server solution
//               </p>
//               <p style={{ fontSize: 35 }}>
//                 $7.99<span style={{ fontSize: 20 }}>/mo</span>
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginTop: 20,
//                   position: "relative",
//                 }}
//               >
//                 <button classname="custom-inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div classname="box">
//             <div style={{ textAlign: "center" }}>
//               <p style={{ fontSize: 33 }}>Dedicated</p>
//               <span style={{ color: "blue" }}>
//                 <hr />
//               </span>
//               <p style={{ fontSize: 15 }}>
//                 entire server for one
//                 <br />
//                 website, offering maximum
//                 <br />
//                 performance, control,
//                 <br />
//                 and security
//               </p>
//               <p style={{ fontSize: 35 }}>
//                 $9.99<span style={{ fontSize: 20 }}>/mo</span>
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginTop: 20,
//                   position: "relative",
//                 }}
//               >
//                 <button classname="custom-inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div classname="box">
//             <div style={{ textAlign: "center" }}>
//               <p style={{ fontSize: 33 }}>VPS</p>
//               <hr />
//               <p style={{ fontSize: 15 }}>
//                 virtual private server
//                 <br />
//                 offering more control and
//                 <br />
//                 scalability
//               </p>
//               <p style={{ fontSize: 35 }}>
//                 $15.99<span style={{ fontSize: 20 }}>/mo</span>
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   marginTop: 20,
//                   position: "relative",
//                 }}
//               >
//                 <button classname="custom-inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div classname="content">
//           <div classname="overlay" />
//           <div classname="content-inner">
//             <h1>
//               Need Advice
//               <br />
//               on Building your
//               <br />
//               Managed Dedicated Server?
//             </h1>
//             <p>
//               Our dedicated support team is here to assist you with any
//               questions or concerns!
//             </p>
//             <p>
//               For immediate support, reach out to our telecaller team—we’re here
//               to help you 24/7!
//             </p>
//             <button classname="buttoneffect">GET SUPPORT</button>
//           </div>
//         </div>
//         <footer>
//           <div
//             style={{
//               textAlign: "left",
//               fontSize: 20,
//               marginBottom: 60,
//               paddingLeft: 40,
//             }}
//           >
//             <p style={{ fontSize: 30 }}>
//               <b>Build Your Website With Hostiko</b>
//             </p>
//             <p>
//               From professional business to enterprise, we’ve got you covered!
//             </p>
//           </div>
//           <div classname="footer-container mx-auto">
//             <div>
//               <img
//                 classname="footer-image-left"
//                 src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729763725/hostiko-logo-1_fb9eax.png"
//                 alt="Left Footer Image"
//               />
//               <p style={{ fontSize: 15, padding: 15 }}>
//                 Hostiko, Inc. 215 Terry Lane,
//                 <br />
//                 Newyork, NY 47401
//               </p>
//               <p style={{ fontSize: 15, padding: 15 }}>
//                 Copyright © 2019 hostiko.com.
//                 <br />
//                 All rights reserved.
//               </p>
//               <a href="#">
//                 <ion-icon name="logo-linkedin" />
//               </a>
//               <a href="#">
//                 <ion-icon name="logo-twitter" />
//               </a>
//               <a href="#">
//                 <ion-icon name="logo-instagram" />
//               </a>
//               <a href="#">
//                 <ion-icon name="logo-facebook" />
//               </a>
//             </div>
//             <div classname="footer-section">
//               <h4 style={{ color: "#00BFFF" }}>Company</h4>
//               <ul>
//                 <li>
//                   <a href="#">About us</a>
//                 </li>
//                 <li>
//                   <a href="#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//               </ul>
//             </div>
//             <div classname="footer-section">
//               <h4 style={{ color: "#00BFFF" }}>Community</h4>
//               <ul>
//                 <li>
//                   <a href="#">Knowledge Base</a>
//                 </li>
//                 <li>
//                   <a href="#">News</a>
//                 </li>
//                 <li>
//                   <a href="#">Content</a>
//                 </li>
//               </ul>
//             </div>
//             <div classname="footer-section">
//               <h4 style={{ color: "#00BFFF" }}>Services</h4>
//               <ul>
//                 <li>
//                   <a href="#">Shared Hosting</a>
//                 </li>
//                 <li>
//                   <a href="#">Reseller Hosting</a>
//                 </li>
//                 <li>
//                   <a href="#">Virtual Private Servers</a>
//                 </li>
//                 <li>
//                   <a href="#">Dedicated Servers</a>
//                 </li>
//               </ul>
//             </div>
//             <div classname="footer-section">
//               <h4 style={{ color: "#00BFFF" }}>Login</h4>
//               <ul>
//                 <li>
//                   <a href="#">Terms &amp; Conditions</a>
//                 </li>
//                 <li>
//                   <a href="#">Privacy policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Acceptable use policy</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </footer>
//       </>
//     </section>
//   );
// };
// export default Nav;
//
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Assuming you will include custom styles in App.css

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img
          src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729917566/sn8-removebg-preview_tkto2w.png"
          className="imglogo"
          alt="Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active" href="#wcuSection">
            Home
          </a>
          <a className="nav-link" href="#exploreMenuSection">
            VPS
          </a>
          <a className="nav-link" href="#deliveryPaymentSection">
            Dedicated
          </a>
          <a className="nav-link" href="#followUsSection">
            Solutions
          </a>
          <a className="nav-link" href="#followUsSection">
            Trading
          </a>
          <a className="nav-link" href="#followUsSection">
            Contacts
          </a>
          <a className="nav-link" href="#followUsSection">
            Menu
          </a>
        </div>
      </div>
    </div>
  </nav>
);
export default Nav;
// const Carousel = () => (
//   <div
//     id="carouselExampleIndicators"
//     className="carousel slide"
//     data-ride="carousel"
//   >
//     <ol className="carousel-indicators">
//       <li
//         data-target="#carouselExampleIndicators"
//         data-slide-to="0"
//         className="active"
//       ></li>
//       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     </ol>
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         <img
//           src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846738/1.jfif_tvj5xg.jpg"
//           className="d-block w-100"
//           alt="Slide 1"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846739/2.jfif_hooaz4.jpg"
//           className="d-block w-100"
//           alt="Slide 2"
//         />
//       </div>
//       <div className="carousel-item">
//         <img
//           src="https://res.cloudinary.com/dc2wavkin/image/upload/v1729846739/3.jfif_bqhtyl.jpg"
//           className="d-block w-100"
//           alt="Slide 3"
//         />
//       </div>
//     </div>
//     <a
//       className="carousel-control-prev"
//       href="#carouselExampleIndicators"
//       role="button"
//       data-slide="prev"
//     >
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="sr-only">Previous</span>
//     </a>
//     <a
//       className="carousel-control-next"
//       href="#carouselExampleIndicators"
//       role="button"
//       data-slide="next"
//     >
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// );

// const PricingCard = ({ title, specs, price }) => (
//   <div className="col-12 col-md-4 col-lg-4">
//     <div className="shadow menu-item-card p-3 mb-3">
//       <h1 className="menu-card-title">{title}</h1>
//       {specs.map((spec, index) => (
//         <p className="pcard" key={index}>
//           {spec}
//         </p>
//       ))}
//       <p className="pcard">${price}</p>
//       <div className="text-center">
//         <button className="buttoneffect12">Order Now</button>
//       </div>
//     </div>
//   </div>
// );

// const ExploreMenu = () => (
//   <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <h1 className="menu-section-heading mb-5">Plan and Pricing</h1>
//         </div>
//         <PricingCard
//           title="Intel Xeon E3-1240v6 processor"
//           specs={[
//             "12 GB DDR4 RAM (Dedicated)",
//             "2 x 1 TB Sata Hard Drive",
//             "10 TB Premium Bandwidth",
//           ]}
//           price="19.99"
//         />
//         <PricingCard
//           title="Intel Xeon E3-1240v6 processor"
//           specs={[
//             "12 GB DDR4 RAM (Dedicated)",
//             "2 x 1 TB Sata Hard Drive",
//             "10 TB Premium Bandwidth",
//           ]}
//           price="29.99"
//         />
//         <PricingCard
//           title="Intel Xeon E3-1240v6 processor"
//           specs={[
//             "12 GB DDR4 RAM (Dedicated)",
//             "2 x 1 TB Sata Hard Drive",
//             "10 TB Premium Bandwidth",
//           ]}
//           price="39.99"
//         />
//       </div>
//     </div>
//   </div>
// );

// const App = () => (
//   <div>
//     <Navbar />
//     <Carousel />
//     <ExploreMenu />
//   </div>
// );

// export default App;
