const catalogRoutes = require("./Catalog.routes");
const memberRoutes = require("./Member.routes");
const projectRoutes = require("./Project.routes");
const quoteRoutes = require("./Quote.routes");
const authRoute = require("./auth.routes");
const contactRoutes = require("./Contact.routes");
const adminRoutes = require("./Admin.routes");

module.exports = [catalogRoutes, memberRoutes, projectRoutes, quoteRoutes, authRoute, contactRoutes, adminRoutes];