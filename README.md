<h1 align="center">Word Puzzle Game</h1>

[![Platform](https://img.shields.io/badge/Platform-React%20Native-brightgreen)](https://reactnative.dev/docs/getting-started)


## **Getting Started**

This section has the information about how to get get started with the Word Puzzle Game

## **Prerequisites**

To Begin with the development you will need:

- **Git**
- **Node**
- **Visual Studio Code**
- **XCode**
- **Android Studio**
- **React Native**

## **To run the App**

1. Clone the repository - `git clone https://github.com/ashutoshagg/word-puzzle-game.git`
2. Execute `npm install`
3. Execute `cd ios && pod install`
4. Start Metro Bundler `npx react-native start` 
5. Execute `npx react-native run-[android/ios]`
6. To run the test cases, execute `npm test`. It will also generate the coverage report under coverage folder. Here is the path - 'coverage/lcov-report/index.html'

## Build and Deployment steps for Android
  - Configure App
    - Create an app icon using `https://www.appicon.co/` or any other website and add it in as `ic_launcher` in drawable
    - Change the package name and applicationId in `AndroidManifest.xml` to something uniquely identifies app on the device and in the Google PlayStore.
  - Generate release build
    - Create a signing key using Android Sutudio menu `Build -> Generate Signed Build/Apk` or using the command `keytool -genkey -v -keystore release-key.keystore -alias key-alias -keyalg RSA -keysize 2048 -validity 10000`
    - In the app level build.gradle file in android project directory, add the following code to add build configuration for debug and release build 
        ```
      signingConfigs {
          release {
            storeFile file('release-key.keystore')
            storePassword '******'
            keyAlias 'key-alias'
            keyPassword '******'
          }
      }
      buildTypes {
          debug { 
            ...
          }
          release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
      }
        ```
  - Build the App
    - Run the following command `npx react-native run-android --variant=release` to create release build or use android studio build varient tool window
  - Upload app to PlayStore
    - Create a developer account on the [Google Play Console](https://play.google.com/console/) website
    - Create a new app listing and upload apk or app bundle created from android studio build menu to make Google use of app bundle to generate and serve optimized APKs for each users device configuration
    - Fill out the app meta information like app name, version, release notes e.t.c
    - Submit app for review and wait for google play team to review the app and then publish the app

## Build and Deployment steps for iOS
  - Configure App
    - Create an app icon using `https://www.appicon.co/` or any other website and add it to `AppIcon` image set
    - Open project in Xcode select the project target and from general tab change the bundle identifier to something uniquely identifies app on the device and in the AppStore.
  - Generate release build and build the app
    - Set up a developer account with Apple and create distribution certificates and provisioning profiles. The steps can be found in the [official documentation for deploying iOS apps](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution)
    - In Xcode, select `Product` from the menu and then select `Archive` of the app
    - Select `Distribute App` and follow the prompts to create an app store provisioning profile
  - Upload app to AppStore
    - In the App Store Connect section of the Apple Developer website, create a new app listing and upload the generated app archive
    - Fill out the app meta infomation and other details of the app
    - Submit the app for review and wait for AppStore review team to review the app and then publish the app

## **Demo Screens**

<p align="center">
<img width="700" height="300" src="https://github.com/ashutoshagg/word-puzzle-game/blob/main/demo/sample-screen.png" alt="logo">

