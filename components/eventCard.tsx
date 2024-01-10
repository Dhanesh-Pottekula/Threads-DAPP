import { BigNumber } from "ethers";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { truncateAddress } from "../utils/truncateAddress";
import { fontSize } from "@thirdweb-dev/react/dist/declarations/src/design-system";


type EventCardProps = {
    walletAddress: string;
    newStatus: string;
    timestamp: BigNumber
};

export default function EventCard(props: EventCardProps) {
    const date = new Date(props.timestamp.toNumber() * 1000);

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventHeader}>
                <Link href={`account/${props.walletAddress}`} style={{ color: "white" }}>
                    <p className={styles.connectedAddress}>{truncateAddress(props.walletAddress)}</p>
                </Link>
                <p style={{ fontSize: "0.75rem " }}>{date.toLocaleString()}</p>
            </div>
            <p style={{ fontSize: "16px" }}>{props.newStatus}</p>
        </div>
    )
}