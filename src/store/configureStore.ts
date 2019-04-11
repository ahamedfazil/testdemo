import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

const configure =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod"
    ? configureStoreProd
    : configureStoreDev;

export default configure;
