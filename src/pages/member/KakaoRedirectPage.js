import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAccessToken, getMemberWithAccessToken } from '../../api/kakaoApi';

function KakaoRedirectPage(props) {
    
    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    useEffect(() => {
        getAccessToken(authCode).then(accessToken => {
   
            getMemberWithAccessToken(accessToken).then(result => {
                console.log("----------------------------------")
                console.log(result)
            })
        })
    })

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>        
        </div>
    );
}

export default KakaoRedirectPage;