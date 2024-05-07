import React from 'react'
import txtImg from '../images/textImg.png'
import midImg from '../images/imgMain.png'
import dot from '../images/dot (1).png'
import txtImg2 from '../images/txtImg2.png'
import arow from '../images/arrow.png'


const Mid = () => {
    return (
        <>
            <div className='container' style={{ marginTop: '79px' }}>
                <div className='txtImg' style={{ textAlign: 'center' }}>
                    <img src={txtImg} width="588px" height="178px" alt="logo" />
                </div>
                <div className='container' style={{ marginTop: '50px' }}>
                    <div className='row'>
                        <div className='col'>
                            <img src={midImg} width="650.49px" height="596px" alt="logo" />
                        </div>
                        <div className='col'>
                            <img src={txtImg2} style={{ marginTop: "50px" }} width="398px" height="192px" alt="logo" />
                            <img src={dot} style={{ marginTop: "50px" }} width="56.25px" height="10.75px" alt="logo" />
                            <div className='btnInner'>
                                <button className="btn" style={{ width: '150.39px', height: '60.22px', borderRadius: '108px', marginTop:'90px' }} id='btnMain' type="submit">Explore More
                                <img src={arow} width={"24px"} height={'24px'} alt="" /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>_
        </>
    )
}

export default Mid
