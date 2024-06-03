import HeaderImg from '../assets/headerImageRAL.jpg'

const HeaderImage = () => {
    return <div className="w-screen h-48" style={{ backgroundImage: "url('./" + HeaderImg + "')" }}></div>
}

export default HeaderImage