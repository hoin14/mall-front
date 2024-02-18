import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { modifyMember } from '../../api/memberApi';
import useCustomLogin from '../../hooks/useCustomLogin';
import loginSlice from '../../slices/loginSlice';
import ResultModal from '../common/ResultModal'

const initState = {
    email:'',
    pw:'',
    nickname:''
}

function ModifyComponent(props) {
    
    const [member, setMember] = useState(initState)

    const loginInfo = useSelector(state => state.loginSlice)
    
    const {moveToLogin} = useCustomLogin()

    const {doLogout, moveToPath} = useCustomLogin()

    const [result, setResult] = useState()

    useEffect(() => {
    
        setMember({...loginInfo, pw:"ABCD"})
    
    }, [loginInfo])

    const handleChange = (e) => {

        member[e.target.name] = e.target.value
        
        setMember({...member})
    }

    const handleClickModify = () => {
        modifyMember(member).then(result => {

            setResult('Modified')
        })
    }

    const closeModal = () => {
        setResult(null)
        doLogout()
        moveToLogin()
    }

    return (
        <div className="mt-6">
            
            {result ? <ResultModal callbackFn={closeModal} title={'회원정보 수정'} content={'수정완료'}></ResultModal> : <></>}
            <div className="flex-justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Email</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="email"
                           type={'text'}
                           value={member.email}
                           readOnly>
                    </input>
                </div>
            </div>
            <div className="flex-justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Passsword</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="pw"
                           type={'password'}
                           value={member.pw}
                           onChange={handleChange}
                           >
                    </input>
                </div>
            </div>
            <div className="flex-justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Nickname</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="nickname"
                           type={'text'}
                           value={member.nickname}
                           onChange={handleChange}
                           >
                    </input>
                </div>
            </div>
            <div className="flex-justify-center">
                <div className="relative mb-4 flex w-full flex-wrap justify-end">
                    <button type="button"
                            className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                            onClick={handleClickModify}>
                            Modify
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModifyComponent;