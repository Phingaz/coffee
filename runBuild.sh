#!/bin/bash

echo "Running build script..."

#Copy icons
echo "Copying icons..."
# Define the paths
iconsFolder="./icons"
resFolder="./android/app/src/main/res"

# Check if the icons folder exists
if [ -d "$iconsFolder" ]; then
  # Loop through each folder in the icons folder
  for iconFolder in "$iconsFolder"/*; do
    # Get the folder name
    folderName=$(basename "$iconFolder")

    # Check if the corresponding folder exists in the res folder
    if [ -d "$resFolder/$folderName" ]; then
      # Replace the existing folder
      cp -ru "$iconFolder" "$resFolder"
      echo "Copied $folderName in $resFolder."
    else
      # Skip if the folder doesn't exist in the res folder
      echo "Skipped $folderName. Folder not found in $resFolder."
    fi
  done

  echo "Icons folders copied successfully."
else
  echo "Icons folder not found. Skipping..."
fi


echo "Changing app name..."
# rootDirName="$(basename "$PWD")"
# echo "Root dir name: $rootDirName"

stringsXmlPath="android/app/src/main/res/values/strings.xml"

# Check if the app name is already set
if ! grep -q "<string name=\"app_name\">Coffee</string>" "$stringsXmlPath"; then
  # Change the app_name in strings.xml using awk
  awk -v rootDirName="$rootDirName" '/<string name="app_name">/{gsub(/<string name="app_name">.*<\/string>/, "<string name=\"app_name\">" rootDirName "</string>")}1' "$stringsXmlPath" > temp && mv temp "$stringsXmlPath"
  echo "Changed app_name to $rootDirName in $stringsXmlPath."
else
  echo "App name is already set. Skipping modification in $stringsXmlPath."
fi

# Define the Gradle properties file path
gradlePropertiesFile="./android/gradle.properties"

# Check if properties are already set in gradle.properties
if grep -q "MYAPP_UPLOAD_STORE_FILE" "$gradlePropertiesFile"; then
  echo "Environment variables are already set in gradle.properties. Skipping..."
else
  echo "Generating keystore..."
  # Generate keystore
  echo 123123 | keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000 -storepass 123123 -keypass 123123 -dname "CN=pii, OU=pii, O=pii, L=sp, ST=sp, C=br"

  echo "Keystore generated."
  echo "Moving keystore to android/app..."

  # Move keystore to android/app
  mv my-upload-key.keystore ./android/app

  echo "Keystore moved to android/app."
  echo "Setting environment variables in gradle.properties..."

  # Set environment variables in gradle.properties
  echo -e "\nMYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore" >> "$gradlePropertiesFile"
  echo "MYAPP_UPLOAD_KEY_ALIAS=my-key-alias" >> "$gradlePropertiesFile"
  echo "MYAPP_UPLOAD_STORE_PASSWORD=123123" >> "$gradlePropertiesFile"
  echo "MYAPP_UPLOAD_KEY_PASSWORD=123123" >> "$gradlePropertiesFile"

  echo "Environment variables set in gradle.properties."
fi

echo "Adding signing config to build.gradle..."

# Define the Gradle build file path
gradleBuildFile="android/app/build.gradle"

# Add the signing config to the Gradle build file
if grep -q "release {" "$gradleBuildFile"; then
  echo "Signing config is already added to $gradleBuildFile. Skipping..."
else
  sed -i.bak '/signingConfigs {/a \
        release {\
            if (project.hasProperty('\''MYAPP_UPLOAD_STORE_FILE'\'')) {\
                storeFile file(MYAPP_UPLOAD_STORE_FILE)\
                storePassword MYAPP_UPLOAD_STORE_PASSWORD\
                keyAlias MYAPP_UPLOAD_KEY_ALIAS\
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD\
            }\
        }' "$gradleBuildFile"
  echo "Signing config added to $gradleBuildFile."
fi

echo "Building APK..."

cd android && ./gradlew assembleRelease

cd -

# Check if the APK is built
echo "APK built."
apkFileName="app-release.apk"
downloadsFolder="$HOME/Downloads"
echo "Copying APK to $downloadsFolder..."

cd android/app/build/outputs/apk/release/

# Copy APK to Downloads folder
apkFileName="app-release.apk"
downloadsFolder="$HOME/Downloads"
if [ -f "$apkFileName" ]; then
  cp "$apkFileName" "$downloadsFolder"
  echo "APK copied to $downloadsFolder."
else
  echo "Error: APK not found in expected location. Please check the build process."
fi

# Navigate back to the project root
cd -

# Check if .bak is already added to .gitignore
gitignoreFile=".gitignore"
if grep -q ".bak" "$gitignoreFile"; then
  echo ".bak is already added to $gitignoreFile. Skipping..."
else
  echo -e "\n# Ignore backup files\n*.bak" >> "$gitignoreFile"
  echo ".bak added to $gitignoreFile."
fi


echo "Build script finished."
