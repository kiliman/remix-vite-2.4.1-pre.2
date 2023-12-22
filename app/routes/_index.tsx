import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { getCount } from "~/utils/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const count = await getCount();
  return json({ count });
}

export default function Index() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Remix!!!</h1>
      <ul className="mt-2">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
