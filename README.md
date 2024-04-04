# Sensorgrove

SensorGrove is an Ecommerce Project with both Client side and API (backend) platforms

## FrontEnd
The frontend is written with reactJS using NextJS Framework. 
To set it up:

install dependencies in `client` folder:
```bash
npm install
```

then run the project

```bash
npm run dev
```

## Backend
The backend is developed with golang with Gin library

to run the project, use the `api-gateway` folder:

first install dependecies
> ensure go is installed on your machine

```bash
go get ./cmd/server .
```

to run the project

```bash
go run ./cmd server .
```

