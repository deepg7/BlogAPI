//REQUIRE CONFIGURED EXPRESS APP
const app = require("./app");

//GET CONFIGURED PORT FROM ENV VARIABLES OR ASSIGN 3000
const PORT = process.env.PORT || 3000;

//START THE SERVER ON FOUND 'PORT'
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
