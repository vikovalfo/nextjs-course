import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

import styles from './page.module.css';
import MealGrid from '../components/meals/meals-grid';


async function Meals() {
    const meals = await getMeals();
    return (<MealGrid meals={meals} />);
}

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created <span className={styles.highlight}> by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself, it's easy and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}