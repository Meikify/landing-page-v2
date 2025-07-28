import type { Metadata } from 'next'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Meikify',
  description: "Automatiza, optimiza y escala tu negocio con inteligencia artificial.",
  generator: 'metras',
  keywords: "automatización, inteligencia artificial, IA, chatbots, procesos, eficiencia, productividad",
  authors: [{ name: "Meikify" }],
  openGraph: {
    title: "Meikify - Automatización con IA para tu negocio",
    description: "Automatiza, optimiza y escala tu negocio con inteligencia artificial.",
    url: "https://meikify.cl",
    siteName: "Meikify",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meikify - Automatización con IA para tu negocio",
    description: "Automatiza, optimiza y escala tu negocio con inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src='https://connect.facebook.net/en_US/fbevents.js';
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script');
          fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}'); 
          fbq('track', 'PageView');
        `}} />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180"
        href="/images/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32"
        href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16"
        href="/images/favicon-16x16.png" />
      </head>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1"/>` }} />
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(d,t) {
            var BASE_URL=\"https://chatwoot.meikify.cl\";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+\"/packs/js/sdk.js\";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: '${process.env.NEXT_PUBLIC_CHATWOOT_TOKEN}',
                baseUrl: BASE_URL
              })
            }
          })(document,\"script\");
        `}} />
      </body>
    </html>
  )
}
