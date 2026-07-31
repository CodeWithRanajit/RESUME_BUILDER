import "dotenv/config";
import app from "./app.js";
import connectDb from "./db/connectDb.js";

const PORT = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at : http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONOGODB Connection FAILED : ${err}`);
  });
