const continentCountryMap = {
  "Amérique du Nord": [
    { name: "Canada", link: "/countries/canada" },
    { name: "États-Unis", link: "/countries/etats-unis" },
    { name: "Mexique", link: "/countries/mexique" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Amérique Centrale & Caraïbes": [
    { name: "Costa Rica", link: "/countries/costa-rica" }
  /* { name: "Cuba", link: "/countries/cuba" },
    { name: "Guatemala, link: "/countries/guatemala" },
    { name: "République Dominicaine", link: "/countries/republique-dominicaine" }, */
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Amérique du Sud": [
    /* { name: "Brésil", link: "/countries/bresil" }, */
    { name: "Colombie", link: "/countries/colombie" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
   "Europe": [
    { name: "Espagne", link: "/countries/espagne" },
    { name: "Portugal", link: "/countries/portugal" },
    { name: "Norvège", link: "/countries/norvege" },
    { name: "Royaume-Uni", link: "/countries/royaume-uni" }
  /* { name: "Danemark", link: "/countries/danemark" },
    { name: "Benelux", link: "/countries/benelux" },  */
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Asie": [
    { name: "Thailande", link: "/countries/thailande" },
  /*   { name: "Singapour", link: "/countries/singapour" },
    { name: "Malaisie", link: "/countries/malaisie" },
    { name: "Bali", link: "/countries/bali" } */
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Océanie": [
    { name: "Polynésie Française", link: "/countries/polynesie-francaise" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
};

export { continentCountryMap };