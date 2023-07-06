import Header from '~/components/ui/header';
import Footer from '~/components/ui/footer';
import MainNavigation from './main-navigation';
import SearchBar from './search-bar';
import { useRouter } from 'next/router';

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
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
