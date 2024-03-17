import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { css } from "~/styled-system/css";

function Page() {
  const navigate = useNavigate();

  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onJoin = () => {
    setLoading(true);
    if (/^\d{3}-\d{4}-\d{3}$/.test(roomCode)) {
      navigate({ to: `/${roomCode}` });
      return;
    }
    setError("Invalid room code");
    setLoading(false);
  };

  const onCreate = async () => {
    setLoading(true);
    try {
      const result = await fetch(
        `${import.meta.env.API_ORIGIN || ""}/api/room`,
        {
          method: "POST",
        }
      );

      const data = await result.json();
      if (!data.result) {
        setError(data.message);
      }
    } catch (e) {
      setError("Failed to connect to the server. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <main
      className={css({
        width: "full",
        height: "full",
        maxW: "8xl",
        mx: "auto",
        p: 3,
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          borderRadius: "xl",
          boxShadow: "xl",
          p: 6,
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
          <div
            className={css({
              flex: 1,
            })}
          >
            <p
              className={css({
                fontSize: "lg",
                textAlign: ["center", "center", "center", "left"],
              })}
            >
              Enter Room Code to Join
            </p>
            <form
              onSubmit={onJoin}
              className={css({
                mt: 3,
                display: "flex",
                flexDir: ["column", "column", "column", "row"],
              })}
            >
              <div
                className={css({
                  minW: 0,
                  flex: [1, 1, 1, 4],
                })}
              >
                <input
                  type="text"
                  className={css({
                    w: "full",
                    p: 2,
                    fontSize: "lg",
                    border: "1px solid",
                    borderColor: "gray.300",
                    borderRadius: "md",
                    "&::placeholder": {
                      fontSize: "md",
                    },
                  })}
                  placeholder="Room Code (xxx-xxxx-xxx)"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                />
                <p>{error}</p>
              </div>
              <div className={css({ w: 3, h: 3 })} />
              <button
                type="submit"
                disabled={loading}
                className={css({
                  flex: 1,
                  flexShrink: 0,
                  p: 2,
                  cursor: "pointer",
                  color: "white",
                  bgColor: "purple.500",
                  "&:hover": {
                    bgColor: "purple.600",
                  },
                  borderRadius: "md",
                })}
              >
                Join
              </button>
            </form>
          </div>
          <p className={css({ mx: 6, my: 3 })}>Or,</p>
          <button
            type="button"
            disabled={loading}
            className={css({
              w: ["full", "full", "full", "auto"],
              h: "full",
              p: 3,
              fontSize: "lg",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "md",
            })}
            onClick={onCreate}
          >
            Create New Room
          </button>
        </div>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: Page,
});
