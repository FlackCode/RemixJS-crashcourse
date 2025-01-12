import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <Form method="post">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}
