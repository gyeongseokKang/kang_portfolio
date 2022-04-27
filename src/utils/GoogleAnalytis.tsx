import React from "react";

const GoogleAnalytis = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BCKCVEJ9LW"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BCKCVEJ9LW');
                `,
        }}
      />
    </>
  );
};

export default GoogleAnalytis;
