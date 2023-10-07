const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const userRoutes = require("./routes/users/userRoute");
const postRoutes = require("./routes/posts/postRoutes");
const globalErrHandler = require("./middleware/globalErrHandler");
const errHandler = require("./utils/errHandler");

const app = express();
const PORT = process.env.PORT || 3000;

//ejs
app.set("view engine", "ejs");

//layout ejs
app.use(expressLayouts);

//public
app.use(express.static("./public"));

//body parse
app.use(express.json());

//USER ROUTE
app.use("/api/v1/user/", userRoutes);

//POSTS ROUTE
app.use("/api/v1/post/", postRoutes);

//global error handler
app.use(globalErrHandler);

//url not found
app.use("/", (req, res, next) => {
  next(errHandler("Not Found Url", 404));
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
