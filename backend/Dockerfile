FROM openjdk:latest
WORKDIR /app
COPY target/backend-0.0.1-SNAPSHOT.jar  todo.jar
ENTRYPOINT ["java", "-jar", "todo.jar"]