import Page from '../components/page';
import Intro from '../components/home/intro';

export default function Home() {
  return (
    <Page title={`Next.js by - The React Framework`} description={`Desc`}>
      <Intro/>
    </Page>
  )
}
