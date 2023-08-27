# Notas :

To create an image on multiple platforms, we can run this command: 
`docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t martingm05/cron-ticker:polar --push .`