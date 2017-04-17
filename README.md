Angular Firebase Auth
===================


Proyecto para iniciar la Autentificación (Email) con Firebase y Angular v4 

----------
**Requisitos **

    npm install -g @angular/cli
    npm install -g typings
    npm install -g typescript

 1. Clonar el Repositorio
-------------------

    git clone https://github.com/rolandoDev/firebase-angular-auth-starter
    
    cd firebase-angular-auth-starter

 2. Instalar las dependencias
-------------------

    npm install

 3. Configurar Firebase
-------------

    app.module.ts
    
    export const firebaseConfig = {
      apiKey: '<your-key>',
      authDomain: '<your-project-authdomain>',
      databaseURL: '<your-database-URL>',
      storageBucket: '<your-storage-bucket>',
      messagingSenderId: '<your-messaging-sender-id>'
    };

 4. Iniciar el Servidor
-------------

    ng serve