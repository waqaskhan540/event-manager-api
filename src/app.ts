import express, {NextFunction ,Request, Response} from "express"
import 'dotenv/config';
import router from "./modules/events";

const app = express()
const PORT = 3000

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});