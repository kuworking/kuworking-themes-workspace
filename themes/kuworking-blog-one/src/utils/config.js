import React from 'react'

export const SeoText = {
  generic_keywords: [`gatsby`, `javascript`, `css`, `wordpress`, `react`, `css`, `seo`, `marketing`],
  grid: {
    title: 'KUWorking.com 🖖 javascript, diseño web y marketing digital',
    description:
      'No hay ideas buenas o malas, están las que se hacen y las que no. En kuworking.com quiero enseñarte javascript, diseño web y marketing para que pases del pensar al hacer',
  },
  grid_class: {
    title: 'KUWorking.com 🖖 categoría ',
    description: 'Aprende javascript, diseño web y marketing digital en kuworking.com -> categoría ',
  },
  post: {
    pre_title: 'KUWorking.com 🖖 ',
  },
}

export const Config = {
  url: 'https://www.kuworking.com/',
  social: ['https://www.pinterest.es/kuworking/', 'https://twitter.com/kuworking'],
  user: 'KUWorking',
  formcarry: 'https://formcarry.com/s/Vcvn0qpJt_S',
  seo: {
    site_lang: `es`,
    site_author: `KUWorking Group`,
  },
}

export const Text = {}
Text.login = {}
Text.login.login = 'Acceder'
Text.login.submit = 'Entrar'
Text.login.mail = 'correo@gmail.com'
Text.login.id = 'correo@gmail.com'
Text.login.password = 'password'
Text.login.rpassword = 'repetir password'
Text.login.signup = 'Completar el registro'
Text.login.signup_page = '/bienvenida'
Text.login.problem1 = 'ya existe un usuario con este correo'
Text.login.problem2 = 'los passwords no coinciden!'
Text.login.problem3 = 'No has entrado el correo!'
Text.login.problem4 = 'No has entrado el password!'
Text.login.problem5 = 'El usuario tiene que ser tu correo!'
Text.login.problem = 'Ha habido algún error en la suscripción: código '
Text.login.login_problem = 'ERROR EN LA IDENTIFICACIÓN'

Text.contact = {}
Text.contact.wrong_mail = 'el mail no es correcto'
Text.contact.thanks = 'gracias, he recibido el mensaje!'
Text.contact.error = 'No he podido enviar el mensaje | code: '
Text.contact.name = 'nombre'
Text.contact.mail = 'correo@gmail.com'
Text.contact.message = 'mensaje'

Text.footer = {}
Text.footer.date = () => <>[ 2019 - {new Date().getFullYear()}, by KUWorking ]</>
Text.footer.cookies = () => <>Aquí utilizo cookies para mejorar la usabilidad del sitio</>
Text.footer.cookies_agree = 'De acuerdo'

Text.pagination = {}
Text.pagination.next = () => 'Siguiente'
Text.pagination.previous = () => 'Anterior'
