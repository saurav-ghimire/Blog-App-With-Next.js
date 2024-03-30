import Link from "next/link";

function Links() {
  const menuLink = [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'about',
      path: '/about'
    },{
      title: 'contact',
      path: '/contact'
    },
    {
      title: 'blog',
      path: '/blog'
    }

  ]
  return <> {
    menuLink.map(data => (
      <Link href={data.path}>{data.title}</Link>
    ))
  }
  </>;
}

export default Links;