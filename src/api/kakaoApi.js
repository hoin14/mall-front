
const rest_api_key = '7058d576ca1349ebac3b8fd549100ab3'

const redirect_uril = 'http://localhost:3000/member/kakao'

const auth_code_path = 'https://kauth.kakao.com/oauth/authorize'

export const getKakaoLoginLink = () => {

    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uril}&response_type=code`

    return kakaoURL    
}