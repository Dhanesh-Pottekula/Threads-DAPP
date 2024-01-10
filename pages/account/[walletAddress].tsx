import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";
import styles from "../../styles/Home.module.css";
import EventCard from "../../components/eventCard";


export default function AccountFeed() {
    const router = useRouter();
    const { walletAddress } = router.query;

    const [isLoading, setIsLoading] = useState(true);

    const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

    const {
        data: userEvents,
        isLoading: isUserEventsLoading,
    } = useContractEvents(
        contract,
        "StatusUpdated",
        {
            subscribe: true,
            queryFilter: {
                filters: {
                    user: walletAddress,
                }
            }
        }
    );

    return (
        <div className={styles.container} style={{ maxWidth: "500px" }}>
            <button
                onClick={() => router.push("/")}
                className={styles.updateButton}
            >Back</button>
            <h1>Account Feed</h1>
            <p style={{ fontSize: "0.75rem" }}>{walletAddress}</p>
            <h3>Latest Updates:</h3>
            {!isUserEventsLoading && userEvents && (
                userEvents?.slice(0, 20).map((event, index) => (
                    <EventCard
                        key={index}
                        walletAddress={event.data.user}
                        newStatus={event.data.newStatus}
                        timestamp={event.data.timestamp}
                    />
                ))
            )}
        </div>
    )
}