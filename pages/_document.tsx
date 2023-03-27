import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Image from "next/image";
import axios from "axios"

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLC5KN5"
height="0" width="0" style={{display:'none';visibility:'hidden'}}></iframe></noscript>
  
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal_wrapper" className="modal_wrapper"></div>
        <script dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLC5KN5"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
           ym(92751219, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
           });
     
               `,
            }}
          />
        <noscript><div><Image src="https://mc.yandex.ru/watch/92751219" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9YXZR7Y133"></script>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-260487941-1"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9YXZR7Y133');
               `,
            }}
          /> 

        <script dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-260487941-1');
               `,
            }}
          />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PN1EVHM2RF"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PN1EVHM2RF');
               `,
            }}
        />
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6Ld6fQolAAAAAFZ9jfo8-dDBmQb0CoeTUEmb7PQU"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
                grecaptcha.enterprise.ready(function() {
                    grecaptcha.enterprise.execute('6Ld6fQolAAAAAFZ9jfo8-dDBmQb0CoeTUEmb7PQU', {action: 'homepage'}).then(function(token) {
                    let formData = new FormData()
                    formData.append('token', token)
                        fetch('http://localhost:8000/api/recaptcha', {
                              body: formData,
                              method: 'POST'
                          })
                          .catch(() => {
                              console.log('POST-запрос в API Google не был отправлен.');
                          })
                    });
                });
               `,
            }}
          />
      </body>
    </Html>
  );
}
