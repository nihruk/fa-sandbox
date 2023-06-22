import Header from '~/components/ui/header';
import Footer from '~/components/ui/footer';
import ExploreOtherSites from './explore-other-sites';
import MainNavigation from './main-navigation';
import SearchBar from './search-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainNavigation />
      <SearchBar />
      <main>
        {children}
        <ExploreOtherSites />
      </main>
      <Footer />
    </>
  );
}
