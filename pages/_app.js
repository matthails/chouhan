import '../styles/globals.css';
import { useRouter } from 'next/router';
import Layout from './../components/Layout';
import AuthContextProvider from '../context/AuthContext';
import ProtectedRoute from './../components/ProtectedRoute';

const noAuthRequired = ['/', '/register'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Layout>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
