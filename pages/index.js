import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/Container';
import Generator from '../components/Generator';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles}>
			<Head>
				<title>Password Generator</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<Generator />
			</Container>
		</div>
	);
}
