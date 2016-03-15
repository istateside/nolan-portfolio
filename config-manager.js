app.set('views', PATH.resolve(__dirname, ROOT, nconf.get('templateRoot')));

  app.engine('hbs', HBS({
      extname:'hbs', 
      defaultLayout:'main.hbs', 
      layoutsDir: PATH.resolve(__dirname, ROOT, nconf.get('templateLayouts'))
  }));

  app.set('view engine', 'hbs');