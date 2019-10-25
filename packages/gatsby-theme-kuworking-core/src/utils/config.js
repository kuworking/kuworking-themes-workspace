import React from 'react'

export const SeoText = {
  generic_keywords: [],
  grid: {
    title: '',
    description: '',
  },
  grid_class: {
    title: '',
    description: '',
  },
  post: {
    pre_title: '',
  },
}

export const Config = {
  url: 'https://github.com/kuworking/gatsby-theme-kuworking-core',
  social: [],
  user: '',
  formcarry: '',
  seo: {
    site_lang: `en`,
    site_author: `KUWorking`,
  },
}

export const Text = {}
Text.site = 'KUWorking CORE'

Text.login = {}
Text.login.login = 'Login'
Text.login.submit = 'Enter'
Text.login.mail = 'mail@gmail.com'
Text.login.id = 'id'
Text.login.password = 'password'
Text.login.rpassword = 'repeat password'
Text.login.signup = 'Sign up'
Text.login.signup_page = '/welcome'
Text.login.problem1 = 'there is another user with the same mail as username'
Text.login.problem2 = 'the two passwords are different!'
Text.login.problem3 = 'This is an error: code '
Text.login.login_problem = 'Login failed'

Text.contact = {}
Text.contact.wrong_mail = 'The email is not correct'
Text.contact.thanks = 'thanks, I have received the message!'
Text.contact.error = 'The message has not been sent | code: '
Text.contact.name = 'name'
Text.contact.mail = 'mail@gmail.com'
Text.contact.message = 'your message'

Text.footer = {}
Text.footer.date = () => <>[ 2018 - {new Date().getFullYear()}, by KUWorking ]</>
Text.footer.cookies = () => <>Notice that we use cookies to improve the usability of this site</>
Text.footer.cookies_agree = 'Ok'

Text.pagination = {}
Text.pagination.next = () => 'Next'
Text.pagination.previous = () => 'Previous'
