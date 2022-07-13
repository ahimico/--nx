import styles from './component.module.css';

/* eslint-disable-next-line */
export interface ComponentProps {}

export function Button(props: ComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Component!</h1>
    </div>
  );
}


