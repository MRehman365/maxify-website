import img1 from '../Assets/image 339.png'
import img2 from '../Assets/image 339.png'
import img3 from '../Assets/image 339.png'
import img4 from '../Assets/image 339.png'
import img5 from '../Assets/image 339.png'
import img6 from '../Assets/image 339.png'
import img11 from '../Assets/image 339.png'
import img7 from '../Assets/image 339.png'
import img8 from '../Assets/image 339.png'
import img9 from '../Assets/image 339.png'
import img10 from '../Assets/image 339.png'
import img12 from '../Assets/image 339.png'
import img14 from '../Assets/image 339.png'
export const NaveData = [
  {
      url: "/",
      name: "Home"
  },
  {
    url: "",
    name: "Services",
    subservicemenu: true,

    insideName: [
      // {
      //   dMenu: true,
      //   dText: {
      //     dName: "Services",
      //     text: "Explore exponential services catering to your business!.",
      //     b: "VIEW ALL SERVIES",
      //   },
      // },

      {
        link: "/service/",
        img: img1,
        names: "Web Development",
      },

      {
        link: "/app",
        img: img2,
        names: "App Development",
      },
      {
        link: "/digitalmarketing",
        img: img3,
        names: "Digital Marketing",
      },
      {
        link: "/seo",
        img: img3,
        names: "SEO",
      },
      {
        link: "/smo",
        img: img3,
        names: "SMO",
      },
      {
        link: "/graphic",
        img: img3,
        names: "Graphic Designing",
      },
      {
        link: "/marketingsolutions",
        img: img3,
        names: "3D Design",
      },
      {
        link: "/hrms",
        img: img3,
        names: "HRMS",
      },
    ],
  },
  {
    url: "/industries/",
    name: "Industries",
    subservicemenu: true,
    insideName: [
      {
        dMenu: true,
        dText: {
          dName: "Industries",
          text: "Take a peep into the industries we work with",
          b: "VIEW ALL INDUSTRIES",
        },
      },
      {
        link: "/healthcare",
        img: img4,
        names: "Health Care",
      },
      {
        link: "/education",
        img: img5,
        names: "Education",
      },
      {
        link: "/realestate",
        img: img6,
        names: "Real Estate",
      },
      {
        link: "/banking",
        img: img11,
        names: "Banking",
      },
      {
        link: "/ecommerces",
        img: img11,
        names: "E-Commerce",
      },
    ],
  },
  // {
  //   url: "/success/",
  //   name: "Success Stories",
  //   subservicemenu: true,
  //   insideName: [
  //     {
  //       dMenu: true,
  //       dText: {
  //         dName: "Success Stories",
  //         text: "Explore Success and get a board of yours in our journey!.",
  //         b: "VIEW ALL SUCCESS STORIES",
  //       },
  //     },
  //     {
  //       link: "/sharda-university/",
  //       img: img7,
  //       names: "Sharda University",
  //     },
  //     {
  //       link: "/eye-care/",
  //       img: img8,
  //       names: "Delhi Eye Care",
  //     },
  //     {
  //       link: "/chhota-school/",
  //       img: img9,
  //       names: "Chhota School",
  //     },
  //   ],
  // },
  // {
  //   url: "/about-company/",
  //   name: "About us",
  //   submenu: true,
  //   subservicemenu: true,
  //   insideName: [
  //     {
  //       dMenu: true,
  //       dText: {
  //         dName: "About Us",
  //         text: "Know more about us through Maxify Lens",
  //         b: "VIEW ALL ABOUT US",
  //       },
  //     },

  //     {
  //       link: "/about-company/",
  //       img: img10,
  //       names: "Company",
  //     },

  //     {
  //       link: "/leadership-team/",
  //       img: img12,
  //       names: "Leadership Team",
  //     },
  //     {
  //       link: "/career/",
  //       img: img14,
  //       names: "Career",
  //     },
  //   ],
  // },

  {
      url: "/contact",
      name: "Contact"
  },
  {
      url: "/about",
      name: "About"
  },
];
