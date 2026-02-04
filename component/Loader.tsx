"use client";

import { Box, CircularProgress, Typography, Stack, keyframes } from "@mui/material";

export default function Loading() {
  // Falling balls with bounce effect
  const fallWithBounce = keyframes`
    0% {
      transform: translateY(-100px) rotate(0deg) scale(0.5);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: translateY(20vh) rotate(180deg) scale(1);
    }
    20% {
      transform: translateY(25vh) rotate(240deg) scale(0.9);
    }
    30% {
      transform: translateY(40vh) rotate(360deg) scale(1);
    }
    40% {
      transform: translateY(45vh) rotate(480deg) scale(0.9);
    }
    50% {
      transform: translateY(60vh) rotate(600deg) scale(1);
    }
    60% {
      transform: translateY(65vh) rotate(720deg) scale(0.9);
    }
    70% {
      transform: translateY(80vh) rotate(840deg) scale(1);
    }
    80% {
      transform: translateY(85vh) rotate(960deg) scale(0.9);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(1080deg) scale(0.5);
      opacity: 0;
    }
  `;

  const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  `;

  const rotate3D = keyframes`
    from { transform: rotate3d(1, 1, 0, 0deg); }
    to { transform: rotate3d(1, 1, 0, 360deg); }
  `;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark mode background particles */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 20% 50%, rgba(188, 156, 36, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Four golden balls falling with bounce */}
      {[
        { color: "#bc9c24", delay: "0s", left: "15%", size: 24 },
        { color: "#facc15", delay: "0.3s", left: "35%", size: 20 },
        { color: "#eab308", delay: "0.6s", left: "55%", size: 22 },
        { color: "#ca8a04", delay: "0.9s", left: "75%", size: 18 },
      ].map((ball, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: ball.size,
            height: ball.size,
            borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, ${ball.color}, ${ball.color}80)`,
            top: -50,
            left: ball.left,
            animation: `${fallWithBounce} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            animationDelay: ball.delay,
            boxShadow: `
              0 0 20px ${ball.color},
              0 0 40px ${ball.color}40,
              inset 0 0 20px rgba(255, 255, 255, 0.3)
            `,
            zIndex: 1,
          }}
        />
      ))}

      {/* Main content */}
      <Stack spacing={4} alignItems="center" position="relative" zIndex={2}>
        {/* 3D rotating cube effect */}
        <Box
          sx={{
            position: "relative",
            width: 140,
            height: 140,
            perspective: "1000px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              animation: `${rotate3D} 4s linear infinite`,
            }}
          >
            {/* Front face */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "linear-gradient(45deg, #bc9c24, #facc15)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
                backfaceVisibility: "hidden",
                boxShadow: "0 0 40px rgba(188, 156, 36, 0.5)",
              }}
            >
              M
            </Box>
            {/* Back face */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "linear-gradient(45deg, #ca8a04, #eab308)",
                borderRadius: "20px",
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                boxShadow: "0 0 40px rgba(202, 138, 4, 0.5)",
              }}
            />
          </Box>
        </Box>

        {/* Loading text */}
        <Stack spacing={2} alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #facc15 0%, #bc9c24 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              letterSpacing: "2px",
              animation: `${pulse} 2s ease-in-out infinite`,
            }}
          >
            MAXILLOFACIAL CLINIC
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#fef08a",
              fontWeight: 500,
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[...Array(5)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "#facc15",
                    animation: `${pulse} 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </Box>
            INITIALIZING EXPERT SYSTEM
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[...Array(5)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "#facc15",
                    animation: `${pulse} 1s ease-in-out infinite`,
                    animationDelay: `${i * 0.1 + 0.5}s`,
                  }}
                />
              ))}
            </Box>
          </Typography>
        </Stack>
      </Stack>

      {/* Bottom glow effect */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "150px",
          background: "linear-gradient(to top, rgba(188, 156, 36, 0.2), transparent)",
          filter: "blur(20px)",
          zIndex: 1,
        }}
      />
    </Box>
  );
}