import renderHydrogenApp from '@shopify/hydrogen/entry-server';
import React,{Suspense} from 'react';
import {FileRoutes,Router,ShopifyProvider,Route} from '@shopify/hydrogen';
function App(){
  return(
      <Suspense fallback={<p>Loading...</p>}>
          <ShopifyProvider>
            <Router>
              <FileRoutes/>
              <Route path="*" page={<p>Not found</p>}/>
            </Router>
          </ShopifyProvider>
      </Suspense>
  );
}
export default  renderHydrogenApp(App);