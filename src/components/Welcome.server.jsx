import {gql,useShopQuery} from '@shopify/hydrogen';
import { flattenConnection } from '@shopify/hydrogen/dist/esnext/utilities';
import React from 'react';
import Slider from './Slider.client';

export default function Welcome() {
  const {data} = useShopQuery({
    query:QUERY,
    variables:{
      productNum:3,
      imageNum:1
    },
    preload:'*'
  });
  const products = data ? flattenConnection(data.products) : null;
  return (
    <div>
      {products?.map((product)=>(
        <Slider products={product}/>
      ))}
    </div>
  );
}
const QUERY = gql`
  query WelcomePageData($productNum:Int!,$imageNum:Int!) {
    products(first: $productNum) {
    edges {
      node {
        title
        description
        images(first: $imageNum) {
          edges {
            node {
              altText
              height
              width
              url
            }
          }
        }
      }
    }
  }
  }
`;
