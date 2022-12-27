FROM cypress/included:10.8.0

WORKDIR /e2e

COPY . ./

RUN mkdir ./node_modules
RUN npm install