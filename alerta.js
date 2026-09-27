const notifier = require('node-notifier');

notifier.notify({
    title: "Alerta do Pc",
    message: "O programa foi iniciado com sucesso!",
    sound: true

});