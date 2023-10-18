import HeaderComponent from '../components/Header/Header.component';

export default function HomePage(){
    return(
        <>
            <HeaderComponent/>
            <meter id="disk_c" value="3.11" min="0" max="100">3.11 GB de 100 GB usados</meter>
        </>
    );
}