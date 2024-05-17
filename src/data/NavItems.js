const navItems = [


 

  {
    id: 1,
    name: "Home",
    href: "/home",
    subNavItems: [],
  },
 
  // {
  //   id: 1,
  //   name: "Home",
  //   href: "/home2",
  //   subNavItems: [
     
  //     {
  //       id: 2,
  //       name: "Home Two",
  //       href: "/home2",
  //     },
     
      
  //   ],
  // },
  {
    id: 2,
    name: "Programs",
    href: "",
    subNavItems: [
     
      { id: 1, name: "Health", href: "/health" },
      { id: 2, name: "Education", href: "/education" },
      { id: 3, name: "Social", href: "/social" },
      { id: 4, name: "Self Reliance", href: "/self" },
      { id: 5, name: "Culture", href: "/culture" },

      
    ],
  },
  {
    id: 3,
    name: "About",
    href: "",
    subNavItems: [
      { id: 1, name: "About Us", href: "/about" },
      // { id: 2, name: "Volunteers", href: "/volunteers" },
      { id: 3, name: "Gallery", href: "/gallery" },
      { id: 4, name: "Become a Volunteer", href: "/become-volunteer" },
    ],
  },
  // {
  //   id: 4,
  //   name: "Donations",
  //   href: "/causes",
  //   subNavItems: [
  //     { id: 1, name: "Causes", href: "/causes" },
  //     { id: 2, name: "Causes Details", href: "/causes-details" },
  //   ],
  // },
  {
    id: 5,
    name: "Events",
    href: "/events",
    subNavItems: [
      // { id: 1, name: "Events", href: "/events" },
      // { id: 2, name: "Event Details", href: "/event-details" },
    ],
  },
  {
    id: 6,
    name: "News",
    href: "/news",
    subNavItems: [
      // { id: 1, name: "News", href: "/news" },
      // { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
  {
    id: 8,
    name: "",
    href: "/personal/:id",
    subNavItems: [
      { id: 1, name: "Causes Details", href: "/causes-details" }
    ],
  },
  {
  id: 9,
  name: "",
  href: "/receipt",
  subNavItems: [],
},
{
  id: 10,
  name: "",
  href: "/razor",
  subNavItems: [],
},
{
  id: 11,
  name: "",
  href: "/donor",
  subNavItems: [],
},
{
  id: 12,
  name: "",
  href: "/terms",
  subNavItems: [],
},
{
  id: 13,
  name: "",
  href: "/policy",
  subNavItems: [],
},
{
  id: 14,
  name: "",
  href: "/refund",
  subNavItems: [],
},
{
  id: 15,
  name: "",
  href: "/signup",
  subNavItems: [],
},
{
  id: 16,
  name: "",
  href: "/login",
  subNavItems: [],
}
];

export default navItems;

// export const social = [
//   { icon: "fa-twitter", link: "" },
//   { icon: "fa-facebook-square", link: "" },
//   { icon: "fa-dribbble", link: "" },
//   { icon: "fa-instagram", link: "" },
// ];
