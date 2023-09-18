import styles from './StyledText.module.css';

function StyledTextV2({ text }) {

  return (
    <div className={`${styles.headingText} `}>
      <h1 className={`${styles.heading} `}>{text}</h1>
      <span />
      <span />
    </div>
  );
}

export default StyledTextV2;