import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Info',
    links: [
      { href: '/', children: 'What is Instrumentality?' },
      { href: '/info/quick_start', children: 'Quick Start' },
      { href: '/info/data', children: 'Data'},
      { href: '/info/faq', children: 'FAQ' },
    ]
  },
  {
    title: 'Endpoints',
    links: [
      { href: '/endpoints/frontpage', children: '/' },
      { href: '/endpoints/types', children: '/types' },
      { href: '/endpoints/add', children: '/add' },
      { href: '/endpoints/view', children: '/view' },
      { href: '/endpoints/queue', children: '/queue' },
      { href: '/endpoints/login', children: '/login' },
      { href: '/endpoints/register', children: '/register' },
      { href: '/endpoints/create', children: '/create'},
      { href: '/endpoints/update', children: '/update' },
      { href: '/endpoints/delete', children: '/delete' },
      { href: '/endpoints/reset', children: '/reset' },
    ]
  },
  {
    title: 'Libraries & Clients',
    links: [
      { href: '/misc/instrumentality_py', children: 'instrumentality.py' },
      { href: '/misc/iruel', children: 'Iruel' },
    ]
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height) - var(--footer-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
