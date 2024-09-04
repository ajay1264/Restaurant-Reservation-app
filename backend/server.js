import app from "./app.js";

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`Server is running on Port ${process.env.PORT}`);
    }
});
