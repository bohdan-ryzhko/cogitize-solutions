import {
  Container,
  ContentWrapper,
  LazyLoadContent,
  NavigationBar,
} from './components'
import sass from './page.module.scss'

export default function Home() {
  return (
    <main className={sass.main}>
      <Container>
        <ContentWrapper>
          <NavigationBar />
          <LazyLoadContent />
        </ContentWrapper>
      </Container>
    </main>
  )
}
