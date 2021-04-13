const Koa = require('koa');
const { web } = require('./config')
const app = new Koa();
console.log(`Hello~~~~~~~~~~~~~~~Express~~~~~~~~~~~~~~~`);
// response
/*
app.use(ctx => {
  ctx.body = web.message;
});
console.log('The server is listen at :', web.port);
app.listen(web.port);*/