import { createFileRoute } from "@tanstack/react-router";

function Page() {
  return <div>Hello /room!</div>;
}

export const Route = createFileRoute("/$room")({
  component: Page,
});
