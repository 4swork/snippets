#stage1
#choose image
FROM node:latest as deployment
ENV NODE_ENV deployment
#choose directory in the image
WORKDIR /app
#copy the necessities into the working dir
COPY package.json .
# COPY package-lock.json .
# copy all other files
COPY . .
RUN npm install
RUN npm run build --prod
CMD [ "npm", "run", "start" ]

#stage 2
FROM nginx:alpine
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
# COPY --from=node /app/dist/build /usr/share/nginx/html