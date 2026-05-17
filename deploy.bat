@echo off
echo Starting manual deployment for alliance-terraterri...

REM Set variables
set PROJECT_ID=terraterri-454406
set REGION=asia-south1
set IMAGE_NAME=asia-south1-docker.pkg.dev/%PROJECT_ID%/alliance-terraterri/alliance-terraterri:latest
set SERVICE_NAME=alliance-terraterri
set APP_URL=https://alliance-terraterri-773090763620.asia-south1.run.app
set SERVICE_ACCOUNT=deployer-sa@terraterri-454406.iam.gserviceaccount.com

REM Build Docker image
echo Building Docker image...
docker build -t %IMAGE_NAME% .

REM Push to Artifact Registry
echo Pushing to Artifact Registry...
docker push %IMAGE_NAME%

REM Deploy to Cloud Run
echo Deploying to Cloud Run...

call gcloud run deploy %SERVICE_NAME% ^
  --image=%IMAGE_NAME% ^
  --region=%REGION% ^
  --platform=managed ^
  --allow-unauthenticated ^
  --min-instances=1 ^
  --max-instances=100 ^
  --service-account=%SERVICE_ACCOUNT% ^
  --project=%PROJECT_ID%

echo Deployment completed!
echo Test URL: %APP_URL%

pause