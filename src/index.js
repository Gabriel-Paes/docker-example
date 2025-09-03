import Fastify from "fastify";
import env from "env-var";

const fastify = Fastify({ logger: true });

const PORT = env.get("PORT").default(3000).asInt();

fastify.get("/", async (request, reply) => {
  reply.send({ message: "OK" });
});

fastify
  .listen({ port: PORT, host: "0.0.0.0" })
  .then(() => console.log(`Server running on port ${PORT}`))
  .catch((error) => {
    fastify.log.error(error);
    process.exit(1);
  });
