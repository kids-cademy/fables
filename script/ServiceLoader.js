if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/apps/fables/ServiceWorker.js', { scope: '/apps/fables/' })
        .then(registration => console.log('Service worker registration succeeded: ', registration))
        .catch(error => console.log('Service worker registration failed: ', error));
} else {
    console.log('Service workers are not supported.');
}
