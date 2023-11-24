"use client";
import { useReduxState } from '@/hooks'
import { Container, Content } from './components'
import styles from './page.module.scss'

export default function Home() {
  const { posts } = useReduxState();
  console.log(posts);
  return (
    <main className={styles.main}>
      <Container>
        <Content>

        </Content>
      </Container>
    </main>
  )
}
