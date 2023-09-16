import './BgvidStyle.css'
export default function Bgvid() {
    return(
        <video autoplay loop >
            <source src="../../public/Bgvid.mp4" type="video/mp4" />
        </video>
    );
}