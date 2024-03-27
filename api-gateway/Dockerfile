# Builder stage
FROM golang:1.21-alpine as builder
WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
ENV GOCACHE=/root/.cache/go-build
RUN go build -o ./tmp/server ./cmd/server

# Runner stage
FROM alpine:latest AS runner
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/tmp/server .
EXPOSE 8000
ENTRYPOINT ["./server"]
