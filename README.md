## templating engine ejs

    npm install ejs

The app.set method in Express is used to set the value of a configuration setting for an Express application.
in server.js

        app.set("view engine", "ejs"); //we tell express: compile dynamic templates with the puc engine<br>
        app.set("views", "views-custom"); //where to find the files if our folder is named views-custom<br>

<br>
app.use((req, res, next) => {
  // '/' this is default route, we shouldn't add the route, this means all paths after /

//res.status(404).sendFile(path.join(\_\_dirname, "..", "views", "404.html"));

res.status(404).render("404", { pageTitle: "Page not found" });

//we don't need path because app.set() we applyed folder views!, we don't need file extention we did it in app.set("view engine", "ejs");
});

<%- include('path') %> render what inside as html

<%= post.title %> render inside variable's value as string

<% %> render what inside as js

## Session Middleware

express session package

    npm install --save express-session
