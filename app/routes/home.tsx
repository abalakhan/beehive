import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Dashboard from "./dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beehive" },
    { name: "description", content: "Welcome to Beehive!" },
  ];
}

export default function Home() {
  return (
  <div>
    <Dashboard />
  </div>
  )
}
