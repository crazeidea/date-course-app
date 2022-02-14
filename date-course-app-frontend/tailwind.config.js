module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#6667AB",
      },
      aspectRatio: {
        banner: "16/9",
      },
    },
  },
  plugins: [],
};
