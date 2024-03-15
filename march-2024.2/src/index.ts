import { App } from "./app";
import { router as pingPongRouter } from "./ping";
import { router as pincodeRouter } from "./modules/pincode/pincode.routes";
import { router as movieRouter } from "./modules/movies/movies.routes";

const application = new App([pingPongRouter, pincodeRouter, movieRouter]);
application.listen();
