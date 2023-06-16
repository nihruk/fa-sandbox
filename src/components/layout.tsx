import Header from '~/components/header';
import Footer from '~/components/footer';
import ExploreOtherSites from './explore-other-sites';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ExploreOtherSites />
      <Footer />
    </>
  );
}
