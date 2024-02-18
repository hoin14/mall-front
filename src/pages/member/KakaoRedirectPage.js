import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAccessToken, getMemberWithAccessToken } from '../../api/kakaoApi';
import { login } from '../../slices/loginSlice';
import useCustomLogin from '../../hooks/useCustomLogin';

function KakaoRedirectPage(props) {
    
    const [searchParams] = useSearchParams()

    const {moveToPath} = useCustomLogin()

    const authCode = searchParams.get('code')

    const dispatch = useDispatch()

    useEffect(() => {
        getAccessToken(authCode).then(accessToken => {
   
            getMemberWithAccessToken(accessToken).then(memberInfo => {
                console.log("----------------------------------")
                console.log(memberInfo)
                dispatch(login(memberInfo))

                if(memberInfo && !memberInfo.social){
                    moveToPath("/")
                }else{
                    moveToPath("/member/modify")
                }
            })
        })
    }, [authCode])

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>        
        </div>
    );
}

export default KakaoRedirectPage;