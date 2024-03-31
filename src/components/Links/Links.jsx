import NavbarLink from "../navBarLink/navbarLinks";

function Links() {
  const menuLinks = [
    { title: 'home', path: '/' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
    { title: 'blog', path: '/blog' }
  ];

  const session = false;
  const isAdmin = false;

  return (
    <div>
      {/* Render regular menu links */}
      {menuLinks.map(data => (
        <NavbarLink key={data.title} item={data} />
      ))}

      {/* Conditional Rendering for Admin and Logout Links */}
      {session && (
        <>
          {isAdmin && <NavbarLink item={{ title: 'Admin', path: '/admin' }} />}
          <NavbarLink item={{ title: 'Logout', path: '/logout' }} />
        </>
      )}

      {/* Show Login if not in session */}
      {!session && <NavbarLink item={{ title: 'Login', path: '/login' }} />}
    </div>
  );
}

export default Links;
