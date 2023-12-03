# Basic info
This app was created for Kurs Tworzenia WebApps w Node.js & Vue.js classes.
Main feature of this app is to make calls between two users (call center).

# Fronted
## Instalation
1. Go to /front directory
2. Type in console "gp env -u VUE_APP_SERVER_URL", "gp env VUE_APP_SERVER_URL=$(gp url 3000)" and "eval $(gp env -e)"
3. Next type in console "npm install"
4. Finally type in "npm run serve"
Frontend should compile and be ready to use.

# Backend
First configure project.
## Configuration
1. Go to /backend directory
2. Find index.js file
3. Swap <login> and <haslo> with your own credentials here:
 const config = {
    url: 'https://uni-call.fcc-online.pl',
    login: '<login>',
    password: '<haslo>'

};
4. Swap this value with your own phone number: const number2 = '111111111'

## Instalation
1. Go to /backend directory
2. Type in console "npm install"
3. Type in "node index.js"
Backend should compile and be ready to use.

# Additional info
1. When using gitpod make sure you set ports to public.

# Manual
After successful instalation and configuration you can open this app in your browser.
At the first page you will see phone dialer where you can pass number you want to call (by phone keyboard or using input field).
To make a call press green button with phone icon.
If your input data is correct you will be forwarded to calling page where you need to wait for connection. Otherwise your page will reload.
After successful conection you will be redirected to connected page where timer will start counting your call time.
After hang up your call will be ended and you can go back to the first page by clicking red button.