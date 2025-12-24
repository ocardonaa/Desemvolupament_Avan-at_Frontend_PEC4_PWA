# Info del proyecto

- Recomendable usar incognito mode para los service workers.
- "https://fakestoreapi.com/products" en los dataGroups ya alberga toda la información, por eso en la última parte de PWA en la documentación donde se tuvo que cambiar a "https://picsum.photos/" el link para mi no aplica ya que la forma de acceder a productos es "https://fakestoreapi.com/products/1", donde 1 es el id del producto.
- Para ejecutar el server he usado tanto `npx http-server -p 8080 -c-1 dist/project-pwa/browser` en el directorio raiz como `http-server -p 8080` en `dist/project-pwa/browser`.
- El `app.component.ts` es más extenso de lo normal porque encontré una forma de arreglar el warning `Unable to locate stylesheet: C:\assets\css\animate.css`.
- Deployeado aqui `https://project-pwa-pec4-daf.netlify.app/`, recomendable instalar la app desde el navegador ya que Netlify va muy lento.
- El sistema de cache de los service workers mantiene los productos que se han clicado cuando habia internet y la pagina principal como método para mantener la página funcional.
