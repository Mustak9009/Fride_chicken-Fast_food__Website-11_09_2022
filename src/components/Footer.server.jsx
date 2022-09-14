import {
  flattenConnection,
  gql,
  useShopQuery,
  CacheHours,
} from '@shopify/hydrogen';
import React from 'react';
import FooterNavigation,{QuickLinks} from './FooterNavigation.client';

export default function Footer() {
  const {data} = useShopQuery({
    query: QUERY,
    variables:{
      pageNum:6
    },
    cache:CacheHours(),
    preload: '*',
  });
  const countries = data ? data.localization.availableCountries : null;
  const pages = data ? flattenConnection(data.pages) : null;
  return (
    <footer role="contentinfo">
      <div className="relative bg-white border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <h2 className='text-2xl font-semibold  mb-2'>Locations</h2>
            <ul className='space-y-1'>
              {countries.map((country)=>(
                <li key={country.isoCode} className='hover:opacity-75 cursor-pointer'>{country.name}</li>
              ))}
            </ul>
          </div>
          <div>
              <h2 className='text-2xl font-semibold  mb-2 font-Roboto'>Quick Links</h2>
              <nav className='space-y-1'>
                 <FooterNavigation pages={pages}/> 
              </nav>
          </div>
          <div>
             <h2 className='text-2xl font-semibold  mb-2 font-Roboto'>Contact info</h2>
              <ul className='space-y-1'>
                  <li>+91 6296917453</li>
                  <li>mustaksk62913@gmail.com</li>
                  <li>Bhakuri - Berhampore Rd Raninagar, Berhampore, West Bengal 742101</li>
              </ul>
          </div>
          <div>
             <QuickLinks/>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-50 py-4 px-4 md:px-6">
        <p>
          Copyright <span className="text-green-500">@</span>{' '}
          {new Date().getFullYear()} Mustak sk
        </p>
      </div>
    </footer>
  );
}

const QUERY = gql`
  query GetCountryAvailableForShipping($pageNum:Int!) {
    localization {
      availableCountries {
        isoCode
        name
      }
    }
    pages(first: $pageNum) {
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
