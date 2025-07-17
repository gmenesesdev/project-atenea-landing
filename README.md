# Atenea, Tu Nuevo Estilo - Landing Page

Landing page moderna y responsiva para **Atenea, Tu Nuevo Estilo**, un centro de belleza especializado en cuidado capilar integral. Desarrollada con **Astro** y **Tailwind CSS v4**.

## 🌟 Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Utilizando Tailwind CSS v4 para un diseño elegante y profesional
- **Navegación Intuitiva**: Scroll suave con scrollspy activo y menú hamburguesa
- **Formulario de Contacto**: Integrado con EmailJS, validación con reCAPTCHA y notificaciones toast
- **Galería de Servicios**: Información detallada sobre tratamientos capilares con modal expandible
- **Catálogo de Productos**: Showcase de productos de belleza con imágenes optimizadas
- **SEO Optimizado**: Estructura semántica y meta tags optimizados
- **Rendimiento Superior**: Carga rápida y optimizada con lazy loading
- **Accesibilidad**: Cumple con estándares WCAG 2.1
- **Integración WhatsApp**: Botón flotante para contacto directo

## 🚀 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** v5.8.1 - Framework web moderno
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Preline UI](https://preline.co/)** - Componentes UI pre-construidos
- **[EmailJS](https://www.emailjs.com/)** - Servicio de envío de emails
- **[Google reCAPTCHA](https://www.google.com/recaptcha/)** - Protección contra spam
- **[Toastify](https://github.com/apvarun/toastify-js)** - Notificaciones elegantes
- **[Fontsource](https://fontsource.org/)** - Fuentes web optimizadas (Outfit, Dancing Script)

## 📦 Instalación

### Prerrequisitos
- **Node.js** >= 16.0.0
- **npm** >= 7.0.0

### Instalación paso a paso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/project-atenea-landing.git
   cd project-atenea-landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   # Keys para EmailJS
   PUBLIC_EMAILJS_PUBLIC_KEY="tu_public_key"
   PUBLIC_EMAILJS_SERVICE_ID="tu_service_id"
   PUBLIC_EMAILJS_TEMPLATE_ID="tu_template_id"
   
   # Clave para reCAPTCHA
   PUBLIC_RECAPTCHA_SITE_KEY="tu_recaptcha_site_key"
   ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

6. **Previsualizar producción:**
   ```bash
   npm run preview
   ```

## 🏗️ Estructura del Proyecto

```
project-atenea-landing/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── alisado_photonico.jpg
│   │   ├── alisado_photonico.webp
│   │   ├── masaje_capilar.jpg
│   │   ├── masaje_capilar.webp
│   │   ├── masaje_reposicion_capilar.jpg
│   │   ├── masaje_reposicion_capilar.webp
│   │   ├── masaje_capilar_anticaspa_y_fortalecimiento_capilar.jpg
│   │   ├── masaje_capilar_anticaspa_y_fortalecimiento_capilar.webp
│   │   ├── masaje_cabello_rulos.jpg
│   │   └── masaje_cabello_rulos.webp
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   └── ProductCard.astro
│   │   ├── Footer.astro
│   │   ├── Form.astro
│   │   ├── History.astro
│   │   ├── Navigation.astro
│   │   ├── Products.astro
│   │   ├── Services.astro
│   │   ├── Slider.astro
│   │   └── Whatsapp.astro
│   ├── data/
│   │   ├── products.json
│   │   └── services.json
│   ├── js/
│   │   ├── contact-form.js
│   │   └── navbar.js
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .astro/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🎨 Personalización

### Colores de Marca
Los colores están definidos en `src/styles/global.css`:

```css
@theme {
    --color-atenea: #efdcf4;                 /* Color principal */
    --color-atenea-letter: #1c1881;          /* Texto principal */
    --color-atenea-letter-lighter: #524fb5;  /* Texto hover */
    --color-atenea-icon: #2f3973;            /* Iconos */
    --color-atenea-icon-hover: #5363c1;      /* Iconos hover */
    --color-atenea-icon-darker: #293260;     /* Iconos activos */
    --color-atenea-clear: #fffffe;           /* Fondo claro */
    --color-atenea-clear-darker: #fafafa;    /* Fondo alternativo */
}
```

### Tipografía
- **Fuente principal**: [Outfit](https://fonts.google.com/specimen/Outfit) para textos generales
- **Fuente de marca**: [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) para el logo

### Contenido Dinámico

#### Servicios (services.json)
```json
{
  "id": "service-id",
  "title": "Nombre del Servicio",
  "description": "Descripción breve del servicio",
  "details": [
    "Detalle 1 del servicio",
    "Detalle 2 del servicio"
  ],
  "image": "nombre_imagen_sin_extension"
}
```

#### Productos (products.json)
```json
{
  "titulo": "Nombre del Producto",
  "descripcion": "Descripción del producto",
  "imagen": "URL_de_la_imagen"
}
```

## 📧 Configuración de EmailJS

### Paso a paso detallado

1. **Crear cuenta en EmailJS**
   - Ve a [EmailJS](https://www.emailjs.com/)
   - Registra tu cuenta gratuita

2. **Configurar servicio de email**
   - En el dashboard, ve a "Email Services"
   - Añade un servicio (Gmail, Outlook, etc.)
   - Configura las credenciales de tu email

3. **Crear template**
   - Ve a "Email Templates"
   - Crea un nuevo template
   - Variables disponibles en el formulario:
     ```
     {{name}}        - Nombre del cliente
     {{lastname}}    - Apellido del cliente
     {{email}}       - Email del cliente
     {{phone}}       - Teléfono del cliente
     {{details}}     - Mensaje del cliente
     ```

4. **Obtener credenciales**
   - **User ID**: En "Account" → "General"
   - **Service ID**: En "Email Services" → tu servicio
   - **Template ID**: En "Email Templates" → tu template

5. **Configurar en .env**
   ```env
   PUBLIC_EMAILJS_PUBLIC_KEY="tu_user_id"
   PUBLIC_EMAILJS_SERVICE_ID="tu_service_id"
   PUBLIC_EMAILJS_TEMPLATE_ID="tu_template_id"
   ```

### Template de ejemplo para EmailJS
```html
<h2>Nuevo mensaje de contacto desde Atenea</h2>

<p><strong>Nombre:</strong> {{name}} {{lastname}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Teléfono:</strong> {{phone}}</p>

<p><strong>Mensaje:</strong></p>
<p>{{details}}</p>

<hr>
<p><em>Enviado desde: Atenea, Tu Nuevo Estilo</em></p>
```

## 🔒 Configuración de reCAPTCHA

### Configuración paso a paso

1. **Registro en Google reCAPTCHA**
   - Ve a [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
   - Inicia sesión con tu cuenta de Google

2. **Registrar un nuevo sitio**
   - Etiqueta: "Atenea Landing Page"
   - Tipo: reCAPTCHA v2 ("I'm not a robot")
   - Dominios: `localhost`, `tu-dominio.com`

3. **Obtener Site Key**
   - Copia la "Site Key" (clave del sitio)
   - Configúrala en .env:
   ```env
   PUBLIC_RECAPTCHA_SITE_KEY="tu_site_key"
   ```

## 🚀 Scripts NPM Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo en puerto 4321
npm run build            # Construye para producción en carpeta 'dist'
npm run preview          # Previsualiza build de producción

# Utilidades
npm run astro            # Comandos de Astro CLI
```

## 📱 Secciones Principales

### 🧭 Header/Navigation
- **Logo responsivo** con imagen optimizada
- **Menú hamburguesa** para móviles con animaciones
- **Navegación sticky** con scroll suave
- **Scrollspy activo** que resalta sección actual

### 🎭 Hero/Slider
- **Carrusel automático** con controles manuales
- **Imágenes de Unsplash** con lazy loading
- **Textos superpuestos** con efectos de transición
- **Responsive** para todos los dispositivos

### 📖 Sobre Nosotros
- **Historia de la empresa** con misión y visión
- **Diseño en dos columnas** responsivo
- **Iconografía personalizada** para cada sección

### 💇‍♀️ Servicios
- **Grid responsivo** de tarjetas de servicios
- **Imágenes WebP** con fallback a JPG
- **Expandible "Ver más"** con animaciones
- **5 servicios principales** de la empresa

### 🛍️ Productos
- **Catálogo visual** con imágenes de Unsplash
- **Tarjetas responsivas** con efectos hover
- **Información detallada** de cada producto

### 📞 Contacto
- **Formulario validado** con EmailJS
- **Validación en tiempo real** con feedback visual
- **reCAPTCHA** para protección contra spam
- **Notificaciones toast** de éxito/error
- **Información de contacto** completa
- **Mapa de Google Maps** integrado

### 🔗 Footer
- **Logo circular** centrado
- **Enlaces a redes sociales** (Instagram)
- **Créditos del desarrollador**

### 💬 WhatsApp
- **Botón flotante** fijo en esquina inferior derecha
- **Enlace directo** a WhatsApp con mensaje predefinido
- **Número**: +56 9 8316 8752

## 🎨 Estilos y Animaciones

### Notificaciones Toast
```css
.toast-success {
    @apply bg-green-600 text-white font-medium rounded-lg shadow-lg;
}

.toast-error {
    @apply bg-red-600 text-white font-medium rounded-lg shadow-lg;
}
```

### Scroll Behavior
```css
html {
    scroll-behavior: smooth;
}

/* Offset para navegación sticky */
[id] {
    scroll-margin-top: 230px; /* Móviles */
}

@media (min-width: 768px) {
    [id] {
        scroll-margin-top: 40px; /* Desktop */
    }
}
```

### reCAPTCHA Responsivo
```css
.g-recaptcha > div {
    transform: scale(0.95);
    transform-origin: center;
}
```

## 🌐 Despliegue

### Netlify

#### Opción 1: Despliegue manual
```bash
# Construir el proyecto
npm run build

# Subir carpeta 'dist' a Netlify
```

#### Opción 2: Despliegue automático desde Git
1. **Conectar repositorio** en Netlify
2. **Configurar build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Crear archivo `netlify.toml`** en la raíz:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

# Redirects para SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

4. **Configurar variables de entorno** en Netlify:
   - `PUBLIC_EMAILJS_PUBLIC_KEY`
   - `PUBLIC_EMAILJS_SERVICE_ID`
   - `PUBLIC_EMAILJS_TEMPLATE_ID`
   - `PUBLIC_RECAPTCHA_SITE_KEY`

### Vercel

#### Opción 1: Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login y deploy
vercel login
vercel --prod
```

#### Opción 2: Despliegue desde GitHub
1. **Importar proyecto** en Vercel
2. **Configurar variables de entorno**
3. **Deploy automático** en cada push

### GitHub Pages

#### Configurar GitHub Actions
Crear `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v1
```

## 🌐 Configuración de Dominio .cl

### Paso 1: Registrar dominio .cl
1. **Ir a NIC Chile**: https://www.nic.cl/
2. **Buscar dominio** disponible (ej: `atenea-estilo.cl`)
3. **Registrar dominio** a través de un registrador autorizado:
   - **Registradores recomendados**:
     - NIC Chile (oficial)
     - Netline
     - Punto.cl
     - Hosting.cl
4. **Completar proceso** de registro y pago

### Paso 2: Configurar DNS para Netlify
1. **En Netlify Dashboard**:
   - Ve a "Domain settings"
   - Click "Add custom domain"
   - Ingresa: `atenea-estilo.cl`

2. **Obtener nameservers** de Netlify:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

3. **En tu registrador** (donde compraste el dominio):
   - Buscar "DNS Management" o "Nameservers"
   - Cambiar nameservers a los de Netlify
   - **Tiempo de propagación**: 24-48 horas

### Paso 3: Configurar DNS para Vercel
1. **En Vercel Dashboard**:
   - Ve a tu proyecto → "Settings" → "Domains"
   - Add domain: `atenea-estilo.cl`

2. **Configurar DNS Records** en tu registrador:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Paso 4: Configurar DNS para GitHub Pages
1. **En tu repositorio**:
   - Settings → Pages → Custom domain
   - Agregar: `atenea-estilo.cl`

2. **Crear archivo `CNAME`** en carpeta public:
   ```
   atenea-estilo.cl
   ```

3. **Configurar DNS Records**:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: tu-usuario.github.io
   ```

### Paso 5: Configurar SSL/HTTPS
- **Netlify**: SSL automático (Let's Encrypt)
- **Vercel**: SSL automático
- **GitHub Pages**: SSL automático

### Paso 6: Configurar redirects
**Para Netlify**, en `netlify.toml`:
```toml
[[redirects]]
  from = "https://www.atenea-estilo.cl/*"
  to = "https://atenea-estilo.cl/:splat"
  status = 301
  force = true
```

### Verificación
1. **Comprobar propagación**: https://dnschecker.org/
2. **Verificar SSL**: https://www.ssllabs.com/ssltest/
3. **Test de velocidad**: https://pagespeed.web.dev/

## 🧪 Testing y Optimización

### Lighthouse Score Objetivo
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Herramientas de Testing
```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://atenea-estilo.cl

# Análisis de bundle
npm run build
```

## 📈 SEO y Analytics

### Meta Tags Implementados
```html
<meta name="description" content="Centro de belleza especializado en cuidado capilar">
<meta name="viewport" content="width=device-width">
<meta name="generator" content="Astro">
```

### Structured Data (recomendado agregar)
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Atenea, Tu Nuevo Estilo",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pasaje Pedro Vizcarra #46",
    "addressLocality": "Catapilco",
    "addressRegion": "Valparaíso",
    "addressCountry": "Chile"
  },
  "telephone": "+56983168752",
  "url": "https://atenea-estilo.cl"
}
```

## 🔧 Troubleshooting

### Problemas Comunes

#### EmailJS no funciona
```bash
# Verificar configuración
console.log(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);

# Verificar CORS en dashboard de EmailJS
# Agregar dominio en configuración
```

#### reCAPTCHA no carga
```bash
# Verificar Site Key
# Verificar dominio registrado en Google reCAPTCHA
# Revisar consola del navegador
```

#### Imágenes no cargan
```bash
# Verificar ruta: /images/nombre.jpg
# Verificar que esté en carpeta public/
# Verificar formato (JPG/WebP)
```

## 🤝 Contribuciones

### Guía de Contribución

1. **Fork el proyecto**
2. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Realiza tus cambios**
4. **Ejecuta tests**
   ```bash
   npm run build
   npm run preview
   ```
5. **Commit con mensaje descriptivo**
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   ```
6. **Push a tu rama**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
7. **Abre un Pull Request**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollador

**Gonzalo Meneses**
- **GitHub**: [@gmenesesdev](https://github.com/gmenesesdev)
- **Portfolio**: [gmeneses.dev](https://gmeneses.dev)
- **Email**: contacto@gmeneses.dev

## 📞 Contacto del Cliente

**Atenea, Tu Nuevo Estilo**
- **Email**: ateanatunuevoestilo@gmail.com
- **Teléfono**: +56 9 8316 8752
- **WhatsApp**: [Chat directo](https://wa.me/56983168752)
- **Dirección**: Pasaje Pedro Vizcarra #46, Aires de Catapilco, Catapilco, Zapallar, Chile
- **Instagram**: [@atenea_tu_nuevo_estilo_](https://www.instagram.com/atenea_tu_nuevo_estilo_/)

---

⭐ **¡Si este proyecto te fue útil, considera darle una estrella en GitHub!** ⭐
