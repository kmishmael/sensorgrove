FROM golang:1.21-alpine as builder
WORKDIR /app
COPY go.mod .
COPY go.sum .
COPY . .
ENV GOCACHE=/root/.cache/go-build
RUN go build -o ./tmp ./cmd/server


FROM alpine:latest AS runner
RUN mkdir /app
WORKDIR /app
COPY --from=builder /app/app .
EXPOSE 8080
ENTRYPOINT ["./app"]