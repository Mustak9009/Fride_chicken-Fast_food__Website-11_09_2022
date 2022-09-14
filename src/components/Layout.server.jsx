import React, {Suspense} from 'react';
import Header from './Header.client';
import {gql, useShopQuery, flattenConnection, CacheHours} from '@shopify/hydrogen';
import Footer from './Footer.server';
export default function Layout({children}) {
  const {data} = useShopQuery({
    query: QUERY,
    cache: CacheHours(),
    preload: '*',
  });
  const pages = data ? flattenConnection(data.pages) : null;
  const shopName = data ? data.shop.name : '';
  return (
    <>
      <div className="min-h-screen text-gray-700 font-sans">
        <Suspense fallback={null}>
          <Header shopName={shopName} pages={pages} />
        </Suspense>
        <main role='main' id='mainContent' className='bg-gray-50 relative'>
            <div className='mx-auto max-w-[85rem] p-4 md:py-5 md:px-8'>
                <Suspense fallback={null}>{children}</Suspense>
            </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
const QUERY = gql`
  query getShopNameAndCollection {
    shop {
      name
    }
    pages(first: 6) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;
