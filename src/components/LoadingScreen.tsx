import styles from "./loadingScreen.module.css"
import runningPika from "../assets/pikachu-running.gif"

const LoadingScreen = () => {
    return (
        <div className={styles.LoadingScreen} >
            <img className={styles.LoadingScreenIcon} src={runningPika} alt="Loading gif" />
        </div>
    );
};

export default LoadingScreen;