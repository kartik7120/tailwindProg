/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text1": "#D9D9D9",
        "text2": "#3C4852",
        "text3": "#BEBEBE",
        "text4": "#FFFFFF",
        "textalert": "#DE4313",
        "alertfill": "linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%, rgba(254, 193, 99, 0.2) 100%)",
        "alertborder": "linear-gradient(135deg, #DE4313 0%, #DE4313 0.75%, #DE4313 2.92%, #DE4414 6.37%, #DF4515 10.97%, #DF4816 16.59%, #E04B18 23.1%, #E1501B 30.37%, #E3561F 38.27%, #E55E24 46.66%, #E7682B 55.41%, #EB7533 64.39%, #EE843C 73.47%, #F39547 82.52%, #F8A954 91.41%, #FEC163 100%)",
        "disablecolor": "#E7E7E7",
        "success": "#47BA68",
        "success2": "#D7EDDD",
        "danger1": "#F77171",
        "danger2": "#FF0000",
        "primary1": "#0096FF",
        "primary2": "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
      },
    },
    plugins: [],
  },
  plugins:[
    require('@tailwindcss/forms'),
  ]
}

