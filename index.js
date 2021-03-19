const Koa = require('koa');
const app = new Koa();
const port = 3000
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});
console.log('The server is listen at :', port);
app.listen(port);