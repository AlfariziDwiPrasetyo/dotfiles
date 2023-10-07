import { Elysia } from "elysia";

const app = new Elysia()

app.get("/", ()=> 'HEllO ELYSIA')

app.listen(3000, ()=>{
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
  
})


// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);