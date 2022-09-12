import React, {Suspense} from 'react';
import Header from './Header.client';
import {gql, useShopQuery, flattenConnection} from '@shopify/hydrogen';
import Footer from './Footer.server';
export default function Layout() {
  const {data} = useShopQuery({
    query: QUERY,
    preload: '*',
  });
  const pages = data ? flattenConnection(data.pages) : null;
  const shopName = data ? data.shop.name : '';
  return (
    <div>
      <div className="min-h-screen text-gray-700 font-sans">
        <Suspense fallback={null}>
          <Header shopName={shopName} pages={pages} />
        </Suspense>
      </div>
      <Footer />
    </div>
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
