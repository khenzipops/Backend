import app from "./app";
import appConfig from "./config/app.config";

const port = appConfig.PORT || 5000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});
