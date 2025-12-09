export const pageview = (url) => {
  window.gtag("config", "G-DY2PYJKGNR", {
    page_path: url,
  });
};
