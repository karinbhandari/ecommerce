import Router from 'next/router'

const goBack = (): void => {
  Router.back()
}

const navigateTo = (href: string, as: string): void => {
  console.log('Going to naviate')
  Router.push(href, as)
}

export { goBack, navigateTo }
