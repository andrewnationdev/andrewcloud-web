import useFileStore from '../../modules/state'
import {byteToGigabytes} from '../../utils/convert';

export default function StorageComponent() {
    const {data} = useFileStore();

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <meter 
            min="0" 
            max="100" 
            value={byteToGigabytes(data?.storageQuota)}
            high={10} 
            low={90} 
            optimum={50}
        >98% Used</meter>
        <span>
            {byteToGigabytes(data?.storageQuota).toFixed(2)} de 100 GB usados
        </span>
        </div>
}