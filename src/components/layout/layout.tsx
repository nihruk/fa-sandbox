import { useRouter } from 'next/router';
import Header from '~/components/layout/header';
import MainNavigation from '~/components/layout/main-navigation';
import SearchBar from '~/components/layout/search-bar';
import Footer from '~/components/layout/footer';

import Container from 'react-bootstrap/Container';

const excludedPages = ['/advanced-search', '/contact-and-feedback'];

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isExcludedPage = excludedPages.includes(router.pathname);

  return (
    <>
      <Header />
      <MainNavigation />
      {!isExcludedPage && <SearchBar />}
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
