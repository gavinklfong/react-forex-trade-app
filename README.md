# Forex Trade App

## Introduction

This repository was created with the aim of demonstrating the use of React JS & Grommet.

This application so far is a static prototype, meaning that all data is static for solely purpose to demonstrate UI compnent and screen flow. Hence, there is no state management or any integration with backend API.

The application consists the following screens:

- Forex Rate Display Screen
- Forex Deal Input Screen
- Forex Deal Review Screen
- Forex Deal Acknowledgement Screen
- Forex Deal History Screen

## Use Case

The user journey starts with a rate display screen which shows a list of currency pairs with sell and buy rates. Users can click buttons and input amount for currency trade. Just before the deal submission, the system will reserve a rate and prompt for confirmation with expiry time in 5 seconds. Users can go ahead if they are happy with the reserved rate or cancel. If users do not make any decision within 5 seconds, then a dialog will be shown to ask users if they would like to reserve a new rate. Upon completion of transaction posting, a transaction history will be displayed.

![Screen Flow](https://raw.githubusercontent.com/gavinklfong/react-forex-trade-app/master/blob/Screen_Flow.jpg)

## How To Build

This app was created using **Create React App**, you can clone this repository to your local machine and then use the following command to build and running this application.

You can follow the commands below:

**Get All Dependencies:**
`npm install`

**Build & Run:**
`npm run start`
