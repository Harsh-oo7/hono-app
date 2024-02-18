import { Hono } from 'hono'

const app = new Hono()

async function authmiddleWare (c : any, next : any) {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
}

// app.use(authmiddleWare)

app.post('/', authmiddleWare, async (c) => {
  const body = await c.req.json();
  console.log(body)
  console.log(c.req.query("param"))
  return c.text('Hello Hono!')
})

export default app
