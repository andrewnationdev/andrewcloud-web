import useFileStore from '../../modules/state'
import { bytesToGigabytes } from '../../utils/convert';

export default function StorageComponent() {
    const { data } = useFileStore();

    return <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "0.95rem"
    }}>
        <meter
            min="0"
            max="100"
            value={bytesToGigabytes(data?.storageQuota)}
            high={10}
            low={90}
            optimum={50}
        >98% Used</meter>
        <span>
            {bytesToGigabytes(data?.storageQuota).toFixed(2)} GB de 100 GB usados
        </span>
    </div>
}