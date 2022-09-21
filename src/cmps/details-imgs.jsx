
export const DetailsImgs = ({ imgs }) => {

    return (
        <div className='detalis-imgs-main'>
            <div className='detalis-img1'>
                <img className='img1' src={imgs[0]} alt="preview stay" />
            </div>

            <div className='detalis-imgs-sub'>
                <div className='detalis-img2-3'>
                    <img className='img2' src={imgs[1]} alt="preview stay" />
                    <img className='img3' src={imgs[2]} alt="preview stay" />
                </div>
                <div className='detalis-img4-5'>
                    <img className='img4' src={imgs[3]} alt="preview stay" />
                    <img className='img5' src={imgs[4]} alt="preview stay" />
                </div>
            </div>
        </div>
    )
}