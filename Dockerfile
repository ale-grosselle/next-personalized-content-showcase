FROM containers.mpi-internal.com/scm-italy/subito_node_alpine:24.11.0
COPY package.json package-lock.json* ./
COPY node_modules ./node_modules
COPY /.next/standalone ./
COPY . .
ENV NODE_ENV=production
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
