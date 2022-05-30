import Button from "../components/Button";
import Container from "../components/Container";
import Warn from "../components/Warn";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
    return (
        <Container className={styles.container}>
            <Warn
                variant="big"
                title="Not Found Page"
                description="Please check your URL"
            />
            <div className={styles.link}>
                <Button as="div">Home</Button>
            </div>
        </Container>
    );
}

export default NotFoundPage;
