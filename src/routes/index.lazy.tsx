import { createFileRoute } from "@tanstack/react-router";

import { css } from "~/styled-system/css";

export const Route = createFileRoute("/")({
  component: () => (
    <main
      className={css({
        width: "full",
        height: "full",
        maxW: "6xl",
        mx: "auto",
        p: 3,
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <h1
        className={css({
          fontSize: "4xl",
          fontWeight: "bold",
          textAlign: "center",
        })}
      >
        GPS Distance Measurement
      </h1>
      <div
        className={css({
          mt: 6,
          display: "flex",
          flexDir: ["column", "column", "column", "row"],
          alignItems: "center",
        })}
      >
        <div>
          <p
            className={css({
              fontSize: "lg",
              textAlign: "center",
            })}
          >
            Enter Room Code to Join
          </p>
          <input
            type="text"
            className={css({
              width: "full",
              p: 2,
              mt: 3,
              fontSize: "lg",
              border: "1px solid",
              borderColor: "gray-300",
              borderRadius: "md",
            })}
            placeholder="Room Code (xxx-xxxx-xxx)"
          />
        </div>
        <p className={css({ mx: 6, my: 3 })}>Or,</p>
        <button
          type="button"
          className={css({
            w: ["full", "full", "full", "auto"],
            h: "full",
            p: 3,
            fontSize: "lg",
            border: "1px solid",
            borderColor: "gray-300",
            borderRadius: "md",
          })}
        >
          Create New Room
        </button>
      </div>
    </main>
  ),
});
