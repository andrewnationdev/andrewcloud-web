import useFileStore from '../../modules/state';

export default function AvatarComponent() {
    const {data} = useFileStore();

    return (
        <div className="chip">
            <img src={data.avatar} alt="Contact Person" />
            {data.user}
        </div>
    );
}