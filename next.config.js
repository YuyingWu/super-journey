module.exports = {
  exportPathMap: function () {
    return Object.assign({
      "/": { page: "/user" },
      "/login": { page: "/login" },
      "/register": { page: "/register" },
      "/user": { page: "/user" },
      // "/snowball": { page: "/snowball" },
      // "/flexbox-css-var": { page: "/flexbox-css-var" },
      // "/crypto-calculator": { page: "/crypto-calculator" },
      "/404": { page: "/_error" }
    }, {})
  }
}