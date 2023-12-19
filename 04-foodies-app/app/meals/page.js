import Link from 'next/link';

import styles from './page.module.css';
import MealGrid from '../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
    const meals = await getMeals();
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
                <MealGrid meals={meals} />
            </main>
        </>
    );
}