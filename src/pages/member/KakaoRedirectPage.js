import React from 'react';
import { useSearchParams } from 'react-router-dom';

function KakaoRedirectPage(props) {
    
    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>        
        </div>
    );
}

export default KakaoRedirectPage;