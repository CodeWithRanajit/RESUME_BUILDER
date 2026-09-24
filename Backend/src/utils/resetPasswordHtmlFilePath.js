import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";



const __filename =fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

const resetPasswordTemplate=fs.readFileSync(
    path.join(__dirname,"../emails/reset-email.html"),
    "utf8"
);



export { resetPasswordTemplate };