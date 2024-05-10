import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

import { app } from "./app";

app
  .use(cors())
  .use(swagger())
  .listen(3000, () => {
    console.log(
      `🦊 Swagger is running at http://${app.server?.hostname}:${app.server?.port}/swagger`,
    );
  });
