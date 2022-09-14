import React from 'react';
import Layout from '../components/Layout.server';
import Welcome from '../components/Welcome.server';

export default function index() {
  return (
    <>
      <Layout>
        <Welcome/>
      </Layout>
    </>
  );
}
