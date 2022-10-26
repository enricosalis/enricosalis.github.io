/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        pulse_slow: {
          '0%': {
            opacity: 0,
          },
          '20%': {
            opacity: .5
          },
          '35%': {
            opacity: 1
          },
          '50%': {
            opacity: .5
          },
          '80%': {
            opacity: 1
          },
          '100%': {
            transform: 'rotate(165deg)',
            opacity: 0
          }
        }
      },
      animation: {
        pulse_slow: 'pulse_slow 6s ease infinite'
      }
    },
  },
  plugins: [],
}
