export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Home route accessed');
    if (to.path == '/home') {
        
            console.log('Your are in the home page!');
            
    }
  })